import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import TablePager from "../components/TablePager";
import { DeliveryInquiryListDiv } from "../styles/ListStyle";
// 결과값 있을 때
import { DeliveryInquiryTr } from "../components/DeliveryInquiryTr";
// 결과값 없을 때
import { DeliveryInquiryTr_noResult } from "../components/DeliveryInquiryTr";
// 상세팝업
import DeliveryPopup from "../components/DeliveryPopup";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import PaycancelPopup from "../components/PaycancelPopup";

const DeliveryInquiryDiv = styled.div`
    background-color: #edf0f5;
    min-width: 1440px;
`;

export default function DeliveryInquiry() {
    //팝업
    const [popUp, setPopUp] = useState(false);
    const [cancelPopUp, setCancelPopUp] = useState(false);
    const [filterData, setFilterData] = useState("");
    const dummyData = useSelector((it) => it.publicData.dataList);

    const userBrand = useSelector((it) => it.loginInfo.brandName);
    const [filterPartnerData, setFilterPartnerData] = useState("");

    const [partnerData, setPartnerData] = useState("");

    useEffect(() => {
        if (userBrand) {
            setPartnerData(filterData ? filterData.filter((it) => it.brandName === userBrand) : dummyData.filter((it) => it.brandName === userBrand));
        }
    }, [userBrand]);

    const [checked, setChecked] = useState([]);
    const [checkAll, setCheckAll] = useState(false);

    //페이지 당 게시물 수
    const [limit, setLimit] = useState(10);

    //현재 페이지 번호
    const [page, setPage] = useState(1);

    //첫 게시물의 위치
    const offset = (page - 1) * limit;

    const pageNum = Math.ceil(filterData ? filterData.length / limit : partnerData ? partnerData / limit : dummyData.length / limit);

    const viewNum = (e) => {
        setLimit(Number(e.target.value));
        setPage(1);
    };

    console.log(dummyData);

    //전체 체크 함수
    const handleCheckAll = (event) => {
        setCheckAll(event.target.checked);

        if (event.target.checked) {
            if (filterData) {
                let fil = [...filterData];
                const checkAllArr = [];

                fil.map((data) => checkAllArr.push(data.orderNum));
                setChecked(checkAllArr);
            } else {
                let dummyData1 = dummyData;
                const checkAllArr = [];
                dummyData1.map((data) => checkAllArr.push(data.orderNum));
                setChecked(checkAllArr);
            }
        } else {
            setChecked([]);
        }
    };

    return (
        <>
            <Header menuState={"order"} />
            <DeliveryInquiryDiv>
                <PageTitle title={"발주(주문)확인/발송관리"} />
                <Filter dummyData={dummyData} setFilterData={setFilterData} setPartnerData={setPartnerData} partnerData={partnerData} setFilterPartnerData={setFilterPartnerData} />
                <DeliveryInquiryListDiv>
                    <div className="listHeader">
                        <h2 className="title">
                            목록
                            <span>
                                &#40;총{" "}
                                <small id="listSumNum">{filterPartnerData ? filterPartnerData.length : partnerData ? partnerData.length : filterData ? filterData.length : dummyData.length}</small>{" "}
                                개&#41;
                            </span>
                        </h2>
                        <form action="" className="selectForm">
                            <select className="numSelect" onChange={viewNum} name="numSelect" id="">
                                <option value="10">10개씩</option>
                                <option value="30">30개씩</option>
                                <option value="50">50개씩</option>
                                <option value="100">100개씩</option>
                            </select>
                            <button
                                className="deliveryBtn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPopUp(true);
                                }}
                            >
                                배송처리
                            </button>
                            <button
                                className="deliveryBtn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCancelPopUp(true);
                                }}
                            >
                                결제처리
                            </button>
                        </form>
                    </div>
                    <div className="listTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <fieldset className="allCheck">
                                            <input type="checkbox" id="allCheck" onChange={handleCheckAll} value={checkAll} checked={checkAll}></input>
                                            <label htmlFor="allCheck"></label>
                                        </fieldset>
                                    </th>
                                    <th>주문번호</th>
                                    <th>브랜드명</th>
                                    <th>상품명</th>
                                    <th>상품코드</th>
                                    <th>택배사</th>
                                    <th>송장번호</th>
                                    <th>결제상태</th>
                                    <th>배송상태</th>
                                    <th>주문일</th>
                                    <th>발송일</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterPartnerData
                                    ? filterPartnerData
                                          .map((data, idx) => <DeliveryInquiryTr checkAll={checkAll} checked={checked} setChecked={setChecked} key={data.orderNum} data={data} />)
                                          .slice(offset, offset + limit)
                                    : partnerData
                                    ? partnerData
                                          .map((data, idx) => <DeliveryInquiryTr checkAll={checkAll} checked={checked} setChecked={setChecked} key={data.orderNum} data={data} />)
                                          .slice(offset, offset + limit)
                                    : filterData
                                    ? filterData
                                          .map((data, idx) => <DeliveryInquiryTr checkAll={checkAll} checked={checked} setChecked={setChecked} key={data.orderNum} data={data} />)
                                          .slice(offset, offset + limit)
                                    : dummyData
                                          .map((data, idx) => <DeliveryInquiryTr checkAll={checkAll} checked={checked} setChecked={setChecked} key={data.orderNum} data={data} />)
                                          .slice(offset, offset + limit)}
                            </tbody>
                        </table>
                    </div>
                    <TablePager setPage={setPage} page={page} pageNum={pageNum} />
                </DeliveryInquiryListDiv>
            </DeliveryInquiryDiv>
            <Footer />
            {
                //팝업
                (popUp && <DeliveryPopup checked={checked} setChecked={setChecked} setPopUp={setPopUp} />) ||
                    //팝업
                    (cancelPopUp && <PaycancelPopup checked={checked} setChecked={setChecked} setPopUp={setCancelPopUp} />)
            }
        </>
    );
}
