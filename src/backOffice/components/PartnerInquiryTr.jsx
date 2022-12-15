import React from "react";
import { useNavigate } from "react-router-dom";

/* 파트너 조회/수정 페이지 - 결과값 있을 때 tr */
function PartnerInquiryTr({ data }) {
    //파트너 상세페이지 이동
    const navigate = useNavigate();
    const detailPartner = () => {
        navigate(`/backoffice/partnerinquiry/partnerinfo/${data.brandName}`);
    };

    return (
        <tr onClick={detailPartner}>
            <td>{data.brandName}</td>
            <td>{data.companyName}</td>
            <td>{data.businessNum}</td>
            <td>{data.businessmanName}</td>
            <td>{data.managerName}</td>
            <td>{data.managerContact}</td>
            <td>{data.managerEmail}</td>
        </tr>
    );
}

/* 파트너 조회/수정 페이지 - 결과값 없을 때 tr */
function PartnerInquiryTr_noResult() {
    return (
        <tr className="noResult">
            <td colSpan="11">데이터가 존재하지 않습니다.</td>
        </tr>
    );
}

export { PartnerInquiryTr, PartnerInquiryTr_noResult };
