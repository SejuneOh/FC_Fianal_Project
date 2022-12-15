import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { format } from "date-fns";
import { FormSelect } from "./Filter";
import Calendar from "./TermCalendar";
import { ProductPageBtn } from "../styles/ButtonsStyle";

function FilterProduct({ dummyData, setFilterData }) {
    const [productName, setProductName] = useState("");
    const [productor, setProductor] = useState("");
    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [sellingChecked, setSellingChecked] = useState([]); //판매분류의 check박스 옵션
    const [productRegister, setproductRegister] = useState("createdAt"); /*상품등록일, 최종수정일*/
    const [sorting, setSorting] = useState("최신순");

    //복수검색
    const [multipleSearch, setMultipleSearch] = useState();
    const [checkingMultiple, setCheckingMultiple] = useState();

    //기간 선택 값 -> 달력 자식 컴포넌트 값
    const [startDate, setStartDate] = useState(new Date("2015-01-01")); //startdate 초기값 설정
    const [endDate, setEndDate] = useState(new Date());
    let fromDate = format(startDate, "yyyy-MM-dd"); //datepicker에서 넘어온 값 변경
    let toDate = format(endDate, "yyyy-MM-dd");
    const [sellingOption, setSellingOption] = useState("전체");

    //판매분류의 check박스 옵션 처리
    const handleSellingCheck = (event) => {
        let updatedList = [...sellingChecked];
        if (event.target.checked) {
            updatedList.push(event.target.value);
        } else {
            updatedList.splice(updatedList.indexOf(event.target.value), 1);
        }
        setSellingChecked(updatedList);

        if (updatedList.includes("전체")) {
            setSellingOption("전체");
        } else if (updatedList.includes("렌탈") && updatedList.includes("일시불")) {
            setSellingOption("전체");
        } else if (updatedList.includes("일시불")) {
            setSellingOption("일시불");
        } else if (updatedList.includes("렌탈")) {
            setSellingOption("렌탈");
        } else {
            setSellingOption("전체");
        }
    };

    //function: 인풋에대한 처리
    const handleSearch = () => {
        const filterData = dummyData.reduce((acc, data) => {
            const productNameData = productName ? data.name === productName : true;
            const productorData = productor ? data.vendorName === productor : true;
            const modelData = model ? data.modelName === model : true;
            const brandData = brand ? data.brandName === brand : true;
            const categoryData = category ? data.categoryId === category : true;
            const productRegisterData = productRegister === "createdAt" ? data.createdAt >= fromDate && data.createdAt <= toDate : data.updatedAt >= fromDate && data.updatedAt <= toDate;
            let sellingOptionData = true;
            if (sellingOption !== "전체") {
                sellingOptionData = sellingOption === "일시불" ? data.prices[0].month === 0 : data.prices[0].month > 0;
            }

            if (productNameData && productorData && modelData && brandData && categoryData && productRegisterData && sellingOptionData) {
                acc.push(data);
            }
            return acc;
        }, []);

        if (sorting === "과거순" && productRegister === "createdAt") {
            filterData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
        if (sorting === "최신순" && productRegister === "createdAt") {
            filterData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        if (sorting === "과거순" && productRegister === "updatedAt") {
            filterData.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
        }
        if (sorting === "최신순" && productRegister === "updatedAt") {
            filterData.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        }

        if (checkingMultiple === "상품번호" && multipleSearch) {
            const multipleData = filterData.map((data) => {
                for (let i = 0; i < multipleSearch.length; i++) {
                    if (data.productNumber == multipleSearch[i]) {
                        return data;
                    }
                }
            });
            const filterUndefined = multipleData.filter((data) => data !== undefined);
            return setFilterData(filterUndefined);
        } else if (checkingMultiple === "판매자상품코드" && multipleSearch) {
            const multipleData = filterData.map((data) => {
                for (let i = 0; i < multipleSearch.length; i++) {
                    if (data.productNumber == multipleSearch[i]) {
                        return data;
                    }
                }
            });
            const filterUndefined = multipleData.filter((data) => data !== undefined);
            return setFilterData(filterUndefined);
        }
        setFilterData(filterData);
    };

    //초기화 버튼 event
    const handleClear = () => {
        setProductName("");
        setProductor("");
        setModel("");
        setBrand("");
        setCategory("");
        setSellingChecked([]);
        setSellingOption("전체");
        setproductRegister("상품등록일");
        setSorting("최신순");
        setStartDate(new Date("2015-01-01"));
        setEndDate(new Date());
        setFilterData("");
        setMultipleSearch("");
        setCheckingMultiple("");
        //window.location.replace("/backoffice/productinquiry"); //추가
    };

    return (
        <>
            <FilterProductDiv>
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
                            <input onClick={(e) => setCheckingMultiple(e.target.value)} type="radio" value="상품번호" id="productNum" name="searchKeywordOption" />
                            <label htmlFor="productNum">
                                <span className="radioBox"></span>
                                <strong>상품번호</strong>
                            </label>
                            <ImgGrayDiv></ImgGrayDiv>
                        </div>
                        <div>
                            <input onClick={(e) => setCheckingMultiple(e.target.value)} type="radio" value="판매자상품코드" id="sellerProductCode" name="searchKeywordOption" />
                            <label htmlFor="sellerProductCode">
                                <span className="radioBox"></span>
                                <strong>판매자상품코드</strong>
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
                            <label htmlFor="productName">상품명</label>
                            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                            <label htmlFor="productor">제조사명</label>
                            <input type="text" value={productor} onChange={(e) => setProductor(e.target.value)} />
                        </TextInputDiv>
                        <TextInputDiv>
                            <label htmlFor="model">모델명</label>
                            <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
                            <label htmlFor="brandName">브랜드명</label>
                            <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                        </TextInputDiv>
                    </div>
                </ContainDiv>

                <ContainDiv>
                    <span>카테고리</span>
                    <FormSelect
                        style={{
                            margin: "0px 10px 0px 140px" /*131px->140px 변경 */,
                            width: "447px" /*455px-> 447px 변경 -8px */,
                            height: "35px",
                        }}
                        iconSize={"13px 8px"}
                    >
                        <select name="largeDivision" id="largeDivision" value={category} onChange={(e) => setCategory(Number(e.target.value))}>
                            <option value="">카테고리를 선택해주세요</option>
                            <option value="1">option1</option>
                            <option value="2">option2</option>
                            <option value="3">option3</option>
                        </select>
                    </FormSelect>

                    <SortDiv>
                        <span className="verticalSpan"></span>
                        <span>판매분류</span>
                    </SortDiv>

                    <CheckboxFieldset
                        style={{
                            display: "flex",
                            marginLeft: "12px",
                        }}
                    >
                        <div>
                            <input type="checkbox" id="all" className="all" onChange={handleSellingCheck} value={"전체"}/>
                            <label htmlFor="all">
                                <span className="box"></span>
                                <strong>전체</strong>
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" id="rental" className="rental" onChange={handleSellingCheck} value={"렌탈"} />
                            <label htmlFor="rental">
                                <span className="box"></span>
                                <strong>렌탈</strong>
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" id="payNow" className="payNow" onChange={handleSellingCheck} value={"일시불"} />
                            <label htmlFor="payNow">
                                <span className="box"></span>
                                <strong>일시불</strong>
                            </label>
                        </div>
                    </CheckboxFieldset>
                </ContainDiv>

                <ContainDiv>
                    <span>기간</span>
                    <FormSelect
                        style={{
                            width: "150px",
                            height: "35px",
                            marginLeft: "168px"
                        }}
                    >
                        <select name="productRegister" id="productRegister" onChange={(e) => setproductRegister(e.target.value)} value={productRegister}>
                            <option value="createdAt">상품등록일</option>
                            <option value="updatedAt">최종수정일</option>
                        </select>
                    </FormSelect>
                    <FormSelect
                        style={{
                            width: "106px",
                            height: "35px",
                            marginLeft: "12px",
                        }}
                    >
                        <select name="sorting" id="sorting" onChange={(e) => setSorting(e.target.value)} value={sorting}>
                            <option value="최신순">최신순</option>
                            <option value="과거순">과거순</option>
                        </select>
                    </FormSelect>
                    <div style={{ marginTop: "10px" }}>
                        <Calendar startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
                    </div>
                </ContainDiv>
            </FilterProductDiv>
            <SearchBarDiv2>
                <ProductPageBtn
                    className="skyBlueBtn"
                    style={{
                        width: "134px",
                        height: "44px",
                        marginRight: "17px",
                    }}
                    htmlType="submit"
                    onClick={handleSearch}
                >
                    검색
                </ProductPageBtn>
                <ProductPageBtn
                    className="whiteBtn"
                    style={{
                        width: "134px",
                        height: "44px",
                    }}
                    onClick={handleClear}
                >
                    초기화
                </ProductPageBtn>
            </SearchBarDiv2>
        </>
    );
}

export default FilterProduct;

const FilterProductDiv = styled.div`
    height: 306px; 
    width: 1400px;
    margin: 0 auto;
    margin-top: 12px;
    box-sizing: border-box;
    padding: 22px 44px; 
    background: #f8f9fd;
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
    display: flex; 
    align-items: center;
    span {
        margin-left: 10px;
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

const SortDiv = styled.div`
    display: flex;
    margin-left: 34.5px; 
    .verticalSpan {
        display: inline-block;
        align-items: center;
        width: 1px;
        height: 17.5px;
        background: #dadde1;
        margin-right: 34.5px;
    }

    span {
        font-size: 15px;
        line-height: 22px;
        color: #767a83;
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
    width: 1400px; 
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

const ImgGrayDiv = styled.div`
    background: url("../assets/grayIcon.svg") center no-repeat;
    width: 16px;
    height: 16px;
    margin-left: 12px;
    margin-bottom: 5px;
`;
