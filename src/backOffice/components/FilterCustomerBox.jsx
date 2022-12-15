import React, { useState } from "react";
import styled from "styled-components";
import { FormSelect } from "./Filter";
// import { TermButtonsUl } from "./TermCalendar";
// import { CalendarDiv } from "./TermCalendar";
import Calendar from "./TermCalendar";
import { ProductPageBtn } from "../styles/ButtonsStyle";

const FilterCustomerDiv = styled.div`
    height: 234px;
    width: 1400px; /*전체넓이 변경가능*/
    margin: 0 auto;
    margin-top: 12px;
    box-sizing: border-box;
    padding: 22px 44px; /*조정*/
    background: #f8f9fd;
    /*공통 글자 */
    font-size: 15px;
    line-height: 22px;
    textarea {
        resize: none;
        margin-bottom: 11px;
        width: 202px;
        height: 87px;
        padding: 0 11px;
        padding-top: 5px;
        background: #ffffff;
        border: 1px solid #e0e4e8;
        box-sizing: border-box;
    }
`;

const ContainDiv = styled.div`
    height: 72px;
    width: 1308px;
    border-bottom: 1px solid #e9edf1;
    box-sizing: border-box;
    display: flex; /*수직정렬 */
    align-items: center;
    span {
        margin-left: 10px; /*추가 */
        display: block;
        font-weight: 500;
        color: #767a83;
    }
`;

const CheckboxFieldset = styled.fieldset`
    div {
        margin-right: 17px;
        display: flex;
        align-items: center;

        input[type="checkbox"] {
            display: none;
        }
        input[type="checkbox"]:checked + label .box {
            background-color: #4cd9ef;
        }
        input[type="checkbox"]:checked + label .box::after {
            display: block;
            content: "";
            width: 14.64px;
            height: 11.5px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url("../assets/checkIcon.svg") no-repeat 0 0;
        }
        label {
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            letter-spacing: -0.5px;
            color: #4d5159;
            display: flex;
            align-items: center;
            .box {
                width: 23px;
                height: 23px;
                margin-right: 6px;
                background: #ffffff;
                border: 1px solid #e0e4e8;
                position: relative;
            }
            .radioBox {
                width: 24px;
                height: 24px;
                margin-right: 6px;
                box-sizing: border-box;
                position: relative;
                border-radius: 50%;
                position: relative;
                background-color: #fff;
                border: 1px solid #e3e7ea;
            }
        }
        input[type="radio"] {
            display: none;
        }
        input[type="radio"]:checked + label .radioBox {
            border: 8px solid #4cd9ef;
        }
    }
`;

const TextInputDiv = styled.div`
    width: calc(541px + 23px);
    height: 36px;
    margin-bottom: 13px;
    display: flex;
    label {
        display: inline-block;
        margin-right: 8px;
        margin-left: 15px;

        font-weight: 500;
        font-size: 15px;
        line-height: 36px;
        color: #4d5159;
    }
    input[type="text"] {
        width: 202px;
        height: 36px;
        box-sizing: border-box;
        padding: 7px 9px;
        border: 1px solid #dadde1;
    }
`;

export const SearchBarDiv2 = styled.div`
    width: 1400px; /*전체 넓이 변경가능 */
    height: 88px;
    margin: 0px auto;
    margin-bottom: 11px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    .skyBlueBtn .whiteBtn {
        font-weight: 500;
        font-size: 16px;
        line-height: 23.17px;
    }
`;

function FilterCustomerBox({ dummyData, setFilterData }) {
    let today = new Date();

    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let aMonthAgo = ("0" + today.getMonth()).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);

    let aMonthAgoDateString = year + "-" + aMonthAgo + "-" + day;
    let dateString = year + "-" + month + "-" + day;

    // const [startDay, setStartDay] = useState(aMonthAgoDateString);
    // const [endDay, setEndDay] = useState(dateString);

    const [startDate, setStartDate] = useState(new Date("2015-01-01"));
    const [endDate, setEndDate] = useState(new Date());

    const [multipleSearch, setMultipleSearch] = useState();
    const [userName, setUserName] = useState("");
    const [userPhoneNum, setUserPhoneNum] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userOrderNum, setUserOrderNum] = useState("");

    const [checkingMultiple, setCheckingMultiple] = useState();

    const [multiArr, setMultiArr] = useState();
    const [sorting, setSorting] = useState("최신순");

    let startDateFormat = startDate.getFullYear() + "-" + ("0" + (startDate.getMonth() + 1)).slice(-2) + "-" + ("0" + startDate.getDate()).slice(-2);
    let endDateFormat = endDate.getFullYear() + "-" + ("0" + (endDate.getMonth() + 1)).slice(-2) + "-" + ("0" + endDate.getDate()).slice(-2);

    const handleSearch = () => {
        const filterData = dummyData.reduce((acc, data) => {
            const nameData = userName ? data.ordererName === userName : true;
            const phoneNumData = userPhoneNum ? data.ordererPhoneNum === userPhoneNum : true;
            const emailData = userEmail ? data.ordererEmail === userEmail : true;
            const orderNumData = userOrderNum ? data.orderNum === userOrderNum : true;
            const dateData = startDate && endDate ? data.orderDay < endDateFormat && data.orderDay > startDateFormat : true;

            if (nameData && phoneNumData && emailData && orderNumData && dateData) {
                acc.push(data);
            }

            return acc;
        }, []);

        if (sorting === "과거순") {
            filterData.sort((a, b) => new Date(a.orderDay) - new Date(b.orderDay));
        }
        if (sorting === "최신순") {
            filterData.sort((a, b) => new Date(b.orderDay) - new Date(a.orderDay));
        }

        if (checkingMultiple === "name" && multipleSearch) {
            const multipleData = filterData.map((data) => {
                for (let i = 0; i < multipleSearch.length; i++) {
                    if (data.ordererName === multipleSearch[i]) {
                        return data;
                    }
                }
            });
            const filterUndefined = multipleData.filter((data) => data !== undefined);
            return setFilterData(filterUndefined);
        } else if (checkingMultiple === "phoneNum" && multipleSearch) {
            const multipleData = filterData.map((data) => {
                for (let i = 0; i < multipleSearch.length; i++) {
                    if (data.ordererPhoneNum === multipleSearch[i].replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)) {
                        return data;
                    }
                }
            });
            const filterUndefined = multipleData.filter((data) => data !== undefined);
            return setFilterData(filterUndefined);
        }

        setFilterData(filterData);
    };

    const resetData = () => {
        setFilterData("");
    };

    return (
        <>
            <FilterCustomerDiv>
                <ContainDiv
                    style={{
                        height: "118px",
                    }}
                >
                    <span>검색어</span>
                    <CheckboxFieldset
                        style={{
                            marginLeft: "145px",
                            marginBottom: "11px",
                        }}
                    >
                        <div style={{ marginBottom: "13px" }}>
                            <input onClick={(e) => setCheckingMultiple(e.target.value)} value="name" type="radio" id="productNum" name="searchKeywordOption" />
                            <label htmlFor="productNum">
                                <span className="radioBox"></span>
                                <strong className="radioBoxName">이름</strong>
                            </label>
                        </div>
                        <div style={{ marginRight: "72px" }}>
                            <input onClick={(e) => setCheckingMultiple(e.target.value)} value="phoneNum" type="radio" id="sellerProductCode" name="searchKeywordOption" />
                            <label htmlFor="sellerProductCode">
                                <span className="radioBox"></span>
                                <strong className="radioBoxNum">연락처</strong>
                            </label>
                        </div>
                    </CheckboxFieldset>
                    <textarea onChange={(e) => setMultipleSearch(e.target.value.split(","))} placeholder="복수검색 ',' "></textarea>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <TextInputDiv>
                            <label htmlFor="productName">이름&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input onChange={(e) => setUserName(e.target.value)} type="text" />
                            <label htmlFor="modelName">연락처&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input onChange={(e) => setUserPhoneNum(e.target.value)} type="text" />
                        </TextInputDiv>
                        <TextInputDiv>
                            <label htmlFor="prodcutionName">이메일</label>
                            <input onChange={(e) => setUserEmail(e.target.value)} type="text" />
                            <label htmlFor="brandName">주문번호</label>
                            <input onChange={(e) => setUserOrderNum(e.target.value)} type="text" />
                        </TextInputDiv>
                    </div>
                </ContainDiv>
                <ContainDiv>
                    <span>상품주문일</span>
                    <FormSelect
                        style={{
                            width: "86px",
                            height: "35px",
                            marginLeft: "127px",
                            marginRight: "12px",
                        }}
                    >
                        <select name="sorting" id="sorting" onChange={(e) => setSorting(e.target.value)} value={sorting}>
                            <option value="최신순">최신순</option>
                            <option value="과거순">과거순</option>
                        </select>
                    </FormSelect>
                    <Calendar Height={"35px"} marginTop={"11.5px"} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
                </ContainDiv>
            </FilterCustomerDiv>
            <SearchBarDiv2>
                <ProductPageBtn
                    onClick={handleSearch}
                    className="skyBlueBtn"
                    style={{
                        width: "134px",
                        height: "44px",
                        marginRight: "17px",
                    }}
                >
                    검색
                </ProductPageBtn>
                <ProductPageBtn
                    onClick={resetData}
                    className="whiteBtn"
                    style={{
                        width: "134px",
                        height: "44px",
                    }}
                >
                    초기화
                </ProductPageBtn>
            </SearchBarDiv2>
        </>
    );
}

export default FilterCustomerBox;
