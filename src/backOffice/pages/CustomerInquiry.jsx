import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CustomerCase from "../components/CustomerCase";
import CustomerListTable from "../components/CustomerListTable";
import FilterCustomerBox from "../components/FilterCustomerBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import TablePager from "../components/TablePager";
import { CustomerInquiryListDiv } from "../styles/ListStyle";
import * as XLSX from "xlsx";

const StyledCustomerInquiry = styled.div`
    background-color: #edf0f5;
    color: #555555;
`;

const CostumerInquiry = () => {
    const [filterData, setFilterData] = useState("");
    const dummyData = useSelector((it) => it.publicData.dataList);

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

    // 엑셀파일로 다운로드
    const excelDown = () => {
        const dataWS = XLSX.utils.json_to_sheet(dummyData);
        const wb = XLSX.utils.book_new(dataWS);
        XLSX.utils.book_append_sheet(wb, dataWS, "nameData");
        XLSX.writeFile(wb, "example.xlsx");
    };

    return (
        <>
            <Header menuState={"customer"} />
            <StyledCustomerInquiry>
                <PageTitle title={"고객조회"} />
                <FilterCustomerBox dummyData={dummyData} setFilterData={setFilterData} />
                <CustomerInquiryListDiv>
                    <div className="listHeader">
                        <h2 className="title">
                            상품 목록
                            <span>
                                &#40;총 <small id="listSumNum">{filterData ? filterData.length : dummyData.length}</small> 개&#41;
                            </span>
                        </h2>
                        <form action="" className="selectForm productInquiry">
                            <select defaultValue={limit} onChange={viewNum} className="numSelect" name="numSelect" id="">
                                <option value="10">10개씩</option>
                                <option value="30">30개씩</option>
                                <option value="50">50개씩</option>
                                <option value="100">100개씩</option>
                            </select>
                            <button className="downloadExcel" onClick={excelDown}>
                                엑셀다운
                            </button>
                        </form>
                    </div>
                    <div className="listTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>NO.</th>
                                    <th>이름</th>
                                    <th>연락처</th>
                                    <th>이메일</th>
                                    <th>주문일</th>
                                    <th>주문상품</th>
                                    <th>주문번호</th>
                                    <th>고객CASE</th>
                                    <th>자세히</th>
                                </tr>
                            </thead>
                            {filterData
                                ? filterData.map((data, idx) => <CustomerListTable key={idx} num={idx + 1} data={data} />).slice(offset, offset + limit)
                                : dummyData.map((data, idx) => <CustomerListTable key={idx} num={idx + 1} data={data} />).slice(offset, offset + limit)}
                        </table>
                    </div>

                    <TablePager setPage={setPage} page={page} pageNum={pageNum} />
                </CustomerInquiryListDiv>
                <Footer />
            </StyledCustomerInquiry>
        </>
    );
};

export default CostumerInquiry;
