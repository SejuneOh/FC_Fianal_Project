import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Filter from "../components/Filter";
import { MasterOrderListDiv } from "../styles/ListStyle";
import TablePager from "../components/TablePager";
//조회 결과 있을 때
import { MasterOrderTr } from "../components/MasterOrderTr";
//조회 결과 없을 때
import { MasterOrderTr_noResult } from "../components/MasterOrderTr";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MasterOrderDiv = styled.div`
    background-color: #edf0f5;
    padding-bottom: 40px;
    min-width: 1440px;
`;

export default function MasterOrder() {
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

    console.log("filterPartnerData", filterPartnerData);
    console.log("partnerData", partnerData);
    console.log("dummyData :", dummyData);

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

    return (
        <>
            <Header menuState={"order"} />
            <MasterOrderDiv>
                <PageTitle title={"주문통합검색"} />
                <Filter dummyData={dummyData} setFilterData={setFilterData} setPartnerData={setPartnerData} partnerData={partnerData} setFilterPartnerData={setFilterPartnerData} />
                <MasterOrderListDiv>
                    <div className="listHeader">
                        <h2 className="title">
                            목록{" "}
                            <span>
                                &#40;총{" "}
                                <small id="listSumNum">{filterPartnerData ? filterPartnerData.length : partnerData ? partnerData.length : filterData ? filterData.length : dummyData.length}</small>{" "}
                                개&#41;
                            </span>{" "}
                        </h2>
                        <form action="" className="selectForm masterOrder">
                            <select name="listNumFilter" onChange={viewNum} id="">
                                <option value="10">10개씩 보기</option>
                                <option value="30">30개씩 보기</option>
                                <option value="50">50개씩 보기</option>
                                <option value="100">100개씩 보기</option>
                            </select>
                        </form>
                    </div>
                    <div className="listTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>브랜드명</th>
                                    <th>상품명</th>
                                    <th>상품코드</th>
                                    <th>주문번호</th>
                                    <th>주문일시</th>
                                    <th>주문자명</th>
                                    <th>결제수량</th>
                                    <th>개월 수</th>
                                    <th>결제금액</th>
                                    <th>결제상태</th>
                                    <th>배송상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterPartnerData
                                    ? filterPartnerData.map((data, idx) => <MasterOrderTr key={idx} data={data} />).slice(offset, offset + limit)
                                    : partnerData
                                    ? partnerData.map((data, idx) => <MasterOrderTr key={idx} data={data} />).slice(offset, offset + limit)
                                    : filterData
                                    ? filterData.map((data, idx) => <MasterOrderTr key={idx} data={data} />).slice(offset, offset + limit)
                                    : dummyData.map((data, idx) => <MasterOrderTr key={idx} data={data} />).slice(offset, offset + limit)}
                            </tbody>
                        </table>
                    </div>
                    <TablePager setPage={setPage} page={page} pageNum={pageNum} />
                </MasterOrderListDiv>
            </MasterOrderDiv>
            <Footer />
        </>
    );
}
