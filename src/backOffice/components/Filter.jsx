import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./TermCalendar";

export const FormSelect = styled.form`
    background-color: #ffffff;
    border: 1px solid #d2d5db;
    box-sizing: border-box;
    select::-ms-expand {
        display: none; /*for IE10,11*/
    }

    select {
        -webkit-appearance: none; /* for chrome */
        -moz-appearance: none; /*for firefox*/
        appearance: none;
        width: 100%;
        height: 100%;
        border: 0px;
        background: url(/assets/downIcon.svg) no-repeat right 11.33px center;
        background-origin: content-box;
        background-size: 8.33px 5px;
        padding-left: 10px;
        padding-top: 2px; 
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
        color: #4d5159;
    }
`;

const DateBarDiv = styled.div`
    display: flex;
    padding-top: 32px;
    padding-left: 35px;
    box-sizing: border-box;
    span {
        display: block;
        height: 20px;
        margin-top: 4px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #8b9092;
    }
    .calendarWrapper {
        width: 600px;
        //border: 1px solid;
        margin-left: 118px;
    }
`;

export const ConditionBarDiv = styled.div`
    height: 66px;
    margin-top: 24px;
    margin-left: 35px;
    margin-bottom: 23px;

    .selecOption {
        width: 100%;
        height: 28px;
        display: flex;
        span {
            display: block;
            height: 20px;
            margin-top: 3px;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #8b9092;
        }
        input {
            width: 190px;
            height: 32px;
            margin-left: 12px;
            margin-right: 48px; 
            background: #fff;
            border: 1px solid #e0e4e8;
            box-sizing: border-box;
        }
    }
    .selecPaymentDelivery {
        display: flex;
        width: 250px;
        margin-left: 181px; 
        box-sizing: border-box;
        padding-top: 10px;
    }
`;

export const FilterSection = styled.section`
    margin: 0px auto 20px;
    width: 1400px;
    height: 257px;
    box-sizing: border-box;
    .section {
        height: 217px; 
        background-color: #f8f9fd;
        hr {
            background: #eaeef3;
            margin: 12px 221px 0px 35px;
            width: 1144px;
            height: 1px;
            background-color: #eaeef3;
            border: none;
        }
    }
`;

export const SearchBarDiv = styled.div`
    margin: 0 auto;
    height: 60px;
    width: 1400px;
    background-color: #ffffff;
    text-align: center; 
    button {
        margin-top: 12px;
        background: #4cd9ef;
        border: 0.880952px solid #2cb8e3;
        width: 104px;
        height: 36px;
        font-size: 14.0952px;
        line-height: 20px;
        text-align: center;
        color: #ffffff;
    }
`;

function Filter({ dummyData, setFilterData, setPartnerData, partnerData, setFilterPartnerData }) {
    const [startDate, setStartDate] = useState(new Date("2015-01-01"));
    const [endDate, setEndDate] = useState(new Date());

    const [mainSelect, setMainSelect] = useState("");
    const [mainInput, setMainInput] = useState("");

    console.log(mainSelect, mainInput);

    const [leftSelect, setLeftSelect] = useState("");
    const [rightSelect, setRightSelect] = useState("");

    let startDateFormat = startDate.getFullYear() + "-" + ("0" + (startDate.getMonth() + 1)).slice(-2) + "-" + ("0" + startDate.getDate()).slice(-2);
    let endDateFormat = endDate.getFullYear() + "-" + ("0" + (endDate.getMonth() + 1)).slice(-2) + "-" + ("0" + endDate.getDate()).slice(-2);

    const handleSearch = () => {
        console.log(mainSelect);
        const filterData = partnerData
            ? partnerData.reduce((acc, data) => {
                  const mainSelectData =
                      mainSelect && mainSelect === "상품명"
                          ? data.orderProduct === mainInput
                          : mainSelect === "상품코드"
                          ? data.productCode === mainInput
                          : mainSelect === "주문자명"
                          ? data.ordererName === mainInput
                          : mainSelect === "주문번호"
                          ? data.orderNum === mainInput
                          : true;

                  const leftSelectData = leftSelect ? data.paymentStatus === leftSelect : true;
                  const rightSelectData = rightSelect ? data.deliveryStatus === rightSelect : true;
                  const dateData = startDate && endDate ? data.orderDay < endDateFormat && data.orderDay > startDateFormat : true;

                  if (dateData && mainSelectData && leftSelectData && rightSelectData) {
                      acc.push(data);
                  }

                  return acc;
              }, [])
            : dummyData.reduce((acc, data) => {
                  const mainSelectData =
                      mainSelect && mainSelect === "상품명"
                          ? data.orderProduct === mainInput
                          : mainSelect === "상품코드"
                          ? data.productCode === mainInput
                          : mainSelect === "주문자명"
                          ? data.ordererName === mainInput
                          : mainSelect === "주문번호"
                          ? data.orderNum === mainInput
                          : true;

                  const leftSelectData = leftSelect ? data.paymentStatus === leftSelect : true;
                  const rightSelectData = rightSelect ? data.deliveryStatus === rightSelect : true;
                  const dateData = startDate && endDate ? data.orderDay < endDateFormat && data.orderDay > startDateFormat : true;

                  if (dateData && mainSelectData && leftSelectData && rightSelectData) {
                      acc.push(data);
                  }

                  return acc;
              }, []);

        partnerData ? setFilterPartnerData(filterData) : setFilterData(filterData);
    };

    return (
        <>
            <FilterSection>
                <div className="section">
                    <DateBarDiv>
                        <span>조회기간</span>
                        <div className="calendarWrapper">
                            <Calendar Height={"32px"} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
                        </div>
                    </DateBarDiv>
                    <hr />
                    <ConditionBarDiv>
                        <div className="selecOption">
                            <span>상세조건</span>
                            <FormSelect
                                style={{
                                    width: "190px",
                                    height: "32px",
                                    marginLeft: "129px",
                                }}
                            >
                                <select onChange={(e) => setMainSelect(e.target.value)} name="searchOption" id="searchOption">
                                    <option>전체</option>
                                    <option value="상품명">상품명(상품id)</option>
                                    <option value="상품코드">상품코드</option>
                                    <option value="주문자명">주문자명</option>
                                    <option value="주문번호">주문번호</option>
                                </select>
                            </FormSelect>
                            <input onChange={(e) => setMainInput(e.target.value)} className="textinput"></input>
                        </div>

                        <div className="selecPaymentDelivery">
                            <FormSelect
                                style={{
                                    marginRight: "12px",
                                    width: "120px",
                                    height: "32px",
                                }}
                            >
                                <select onChange={(e) => setLeftSelect(e.target.value)} name="paymentStatus" id="paymentStatus">
                                    <option>결제상태</option>
                                    <option value="결제완료">결제완료</option>
                                    <option value="결제취소">취소완료</option>
                                </select>
                            </FormSelect>
                            <FormSelect
                                style={{
                                    width: "120px",
                                    height: "32px",
                                }}
                            >
                                <select onChange={(e) => setRightSelect(e.target.value)} name="deliveryStatus" id="deliveryStatus">
                                    <option>배송상태</option>
                                    <option value="배송준비중">배송준비중</option>
                                    <option value="배송중">배송중</option>
                                    <option value="배송완료">배송완료</option>
                                </select>
                            </FormSelect>
                        </div>
                    </ConditionBarDiv>
                    <SearchBarDiv>
                        <button onClick={handleSearch}>검색</button>
                    </SearchBarDiv>
                </div>
            </FilterSection>
        </>
    );
}

export default Filter;
