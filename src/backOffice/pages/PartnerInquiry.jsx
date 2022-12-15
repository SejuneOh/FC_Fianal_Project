import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterPartner from "../components/FilterPartner";
import TablePager from "../components/TablePager";
import { PartnerInquiryListDiv } from "../styles/ListStyle";
// 결과값 있을 때
import { PartnerInquiryTr } from "../components/PartnerInquiryTr";
// 결과값 없을 때
import { PartnerInquiryTr_noResult } from "../components/PartnerInquiryTr";
import { useSelector } from "react-redux";

const PartnerInquiryDiv = styled.div`
    background-color: #edf0f5;
    min-width: 1440px;
`;

export default function PartnerInquiry() {
    const [filterData, setFilterData] = useState("");
    const dummyData = useSelector((it) => it.partnerInfo.partnerList);

    console.log(dummyData);

    //페이지 당 게시물 수
    const [limit, setLimit] = useState(10);

    //현재 페이지 번호
    const [page, setPage] = useState(1);

    //첫 게시물의 위치
    const offset = (page - 1) * limit;

    const pageNum = Math.ceil(filterData ? filterData.length / limit : dummyData.length / limit);

    const viewNum = (e) => {
        setLimit(Number(e.target.value));
        setPage(1);
    };

    return (
        <>
            <Header menuState={"partner"} />
            <PartnerInquiryDiv>
                <PageTitle title={"파트너 목록"} />
                <FilterPartner dummyData={dummyData} setFilterData={setFilterData} />
                <PartnerInquiryListDiv>
                    <div className="listHeader">
                        <h2 className="title">
                            목록
                            <span>
                                &#40;총 <small id="listSumNum">{filterData ? filterData.length : dummyData.length}</small> 개&#41;
                            </span>
                        </h2>
                        <form action="" className="selectForm">
                            <select onChange={viewNum} className="numSelect" name="numSelect" id="">
                                <option value="10">10개씩</option>
                                <option value="30">30개씩</option>
                                <option value="50">50개씩</option>
                                <option value="100">100개씩</option>
                            </select>

                        </form>
                    </div>
                    <div className="listTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>브랜드명</th>
                                    <th>업체명</th>
                                    <th>사업자등록번호</th>
                                    <th>사업자명</th>
                                    <th>담당자명</th>
                                    <th>연락처</th>
                                    <th>이메일</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterData
                                    ? filterData.map((data, idx) => <PartnerInquiryTr key={idx} data={data} />).slice(offset, offset + limit)
                                    : dummyData.map((data, idx) => <PartnerInquiryTr key={idx} data={data} />).slice(offset, offset + limit)}

                                {/* <PartnerInquiryTr_noResult/> */}
                            </tbody>
                        </table>
                    </div>
                    <TablePager setPage={setPage} page={page} pageNum={pageNum} />
                </PartnerInquiryListDiv>
            </PartnerInquiryDiv>
            <Footer />
        </>
    );
}
