import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import PageTitle from "../components/PageTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductVeiwIcon from "../components/ProductVeiwIcon";
import ProductVeiwPopup from "../components/ProductVeiwPopup";
import ProductBrandPopup from "../components/ProductBrandPopup";
import ProductPricePopup from "../components/ProductPricePopup";
import FilterProduct from "../components/FilterProduct";
import { ProductInquiryListDiv } from "../styles/ListStyle";
//조회 결과 있을 때
import { ProductInquiryTr } from "../components/ProductInquiryTr";
//조회 결과 없을 때
//import { ProductInquiryTr_noResult } from "../components/ProductInquiryTr";
import TablePager from "../components/TablePager";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";

const ProductInquiryDiv = styled.div`
    background-color: #edf0f5;
    min-width: 1440px;
`;

export default function ProductInquiry() {
    //리덕스에서 dummy데이터 
    const dummyJson1 = useSelector((it) => it.productList.productInfo);
    //필터링 데이터
    const [filterData, setFilterData] = useState("");
    //테일블 상위 액션 일괄변경->판매변경
    const [changeOptions, setChangeOptions] = useState("");
    //테이블 체크박스
    const [checked, setChecked] = useState([]);
    const [checkAll, setCheckAll] = useState(false);
    //팝업
    const [detailPopup, setDetailPopup] = useState(false);
    const [pricePopup, setPricePopup] = useState(false);
    const [brandPopup, setBrandPopup] = useState(false);

    //일괄변경 
    const handleOption = (e) => {
        setChangeOptions(e.target.value);
        if (e.target.value === "판매가변경") {
            setPricePopup(true);
        }
        if (e.target.value === "브랜드변경") {
            setBrandPopup(true);
        }
    };

    //체크박스 함수
    const removeChecks = () => {
        // 아름님 작성
        if (checked) {
            if (filterData) {
                let fil = [...filterData];
                fil = fil.filter((i) => !checked.includes(i.productNumber));
                setFilterData(fil);
            } else {
                let dummyData = [...dummyJson1];
                dummyData = dummyData.filter((i) => !checked.includes(i.productNumber));
                setFilterData(dummyData);
            }
        }

        setChecked([]);
        setCheckAll(false);
    };

    const handleCheckAll = (event) => {
        setCheckAll(event.target.checked);
        console.log("checkAll", checkAll);

        if (event.target.checked) {
            if (filterData) {
                let fil = [...filterData];
                const checkAllArr = [];

                fil.map((data) => checkAllArr.push(data.productNumber));
                setChecked(checkAllArr);
            } else {
                let dummyData = dummyJson1;
                const checkAllArr = [];
                dummyData.map((data) => checkAllArr.push(data.productNumber));
                setChecked(checkAllArr);
            }
        } else {
            setChecked([]);
        }
    };

    //페이지 당 게시물 수
    const [limit, setLimit] = useState(10);

    //현재 페이지 번호
    const [page, setPage] = useState(1);

    //첫 게시물의 위치
    const offset = (page - 1) * limit;

    const pageNum = Math.ceil(filterData ? filterData.length / limit : dummyJson1.length / limit);

    const viewNum = (e) => {
        setLimit(Number(e.target.value));
        setPage(1);
    };

    // 엑셀파일로 다운로드
    const excelDown = () => {
        if(filterData.length > 0){
            const dataWS = XLSX.utils.json_to_sheet(filterData);
            const wb = XLSX.utils.book_new(dataWS);
            XLSX.utils.book_append_sheet(wb, dataWS, "nameData");
            XLSX.writeFile(wb, "example.xlsx");
        } else {
            const dataWS = XLSX.utils.json_to_sheet(dummyJson1);
            const wb = XLSX.utils.book_new(dataWS);
            XLSX.utils.book_append_sheet(wb, dataWS, "nameData");
            XLSX.writeFile(wb, "example.xlsx");
        }
    };

    return (
        <>
            <Header menuState={"product"} />
            <ProductInquiryDiv>
                <PageTitle title={"상품 조회 / 수정"} />
                <ProductVeiwIcon data={dummyJson1}/>
                <FilterProduct dummyData={dummyJson1} setFilterData={setFilterData} />
                <ProductInquiryListDiv>
                    <div className="listHeader">
                        <h2 className="title">
                            상품 목록
                            <span>
                                &#40;총 <small id="listSumNum">{filterData ? filterData.length : dummyJson1.length}</small> 개&#41;
                            </span>{" "}
                        </h2>
                        <form action="" className="selectForm productInquiry">
                            <select className="numSelect" name="numSelect" id="" onChange={viewNum}>
                                <option value="10">10개씩</option>
                                <option value="30">30개씩</option>
                                <option value="50">50개씩</option>
                                <option value="100">100개씩</option>
                            </select>
                            <button className="downloadExcel" style={{ marginLeft: "8px" }} onClick={excelDown}>
                                엑셀다운
                            </button>
                        </form>
                    </div>
                    <div className="listFilter">
                        <form action="" className="selectForm">
                            <button type="button" className="selectdeleteBtn" onClick={removeChecks}>
                                선택삭제
                            </button>
                            <span className="vertical"></span>
                            <select className="" name="" id="" value={changeOptions} onChange={handleOption}>
                                <option value="일괄변경">일괄변경</option>
                                <option value="판매가변경">판매가변경</option>
                                <option value="브랜드변경">브랜드변경</option>
                            </select>
                            <button type="submit" className="submitBtn" onClick={() => alert("수정 api 필요")}>
                                수정저장
                            </button>
                        </form>
                        <p className="alertMsg">관리자 검수가 필요한 상점의 경우에는 판매상태를 직접 변경하실 수 없습니다.</p>
                    </div>
                    <div className="listTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <fieldset className="allCheck">
                                            <input type="checkbox" id="allCheck" 
                                                onChange={handleCheckAll}
                                                value={checkAll}
                                                checked={checkAll}
                                            />
                                            <label htmlFor="allCheck"></label>
                                        </fieldset>
                                    </th>
                                    <th>수정</th>
                                    <th>상품번호</th>
                                    <th>상품명</th>
                                    <th>렌탈개월수</th>
                                    <th>가격&#40;원&#41;</th>
                                    <th>브랜드</th>
                                    <th>대표이미지</th>
                                    <th>판매분류</th>
                                    <th>상세설명</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterData
                                    ? filterData
                                          .map((data, idx) => (
                                              <ProductInquiryTr
                                                  key={data.productNumber}
                                                  data={data}
                                                  index={idx}
                                                  checkAll={checkAll}
                                                  checked={checked}
                                                  setChecked={setChecked}
                                                  setOpenPopUp={setDetailPopup}
                                              />
                                          ))
                                          .slice(offset, offset + limit)
                                    : dummyJson1
                                          .map((data, idx) => (
                                              <ProductInquiryTr
                                                  key={data.productNumber}
                                                  data={data}
                                                  index={idx}
                                                  checkAll={checkAll}
                                                  checked={checked}
                                                  setChecked={setChecked}
                                                  setOpenPopUp={setDetailPopup}
                                              />
                                          ))
                                          .slice(offset, offset + limit)}
                                {/* <ProductInquiryTr_noResult /> */}
                            </tbody>
                        </table>
                    </div>
                    <TablePager setPage={setPage} page={page} pageNum={pageNum} />
                    {/* <ProductPageBtn className="skyBlueBtn">수정 항목 저장</ProductPageBtn> */}
                </ProductInquiryListDiv>
            </ProductInquiryDiv>
            <Footer />
            {detailPopup && <ProductVeiwPopup setOpenPopUp={setDetailPopup} />}
            {pricePopup && <ProductPricePopup setOpenPopUp={setPricePopup} checked={checked} setChecked={setChecked} setSelect={setChangeOptions}/>}
            {brandPopup && <ProductBrandPopup setOpenPopUp={setBrandPopup} checked={checked} setChecked={setChecked} setSelect={setChangeOptions}/>}
        </>
    );
}


