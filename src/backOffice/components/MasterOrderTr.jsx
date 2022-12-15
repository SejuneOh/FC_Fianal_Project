import React from "react";
import { useNavigate } from "react-router-dom";
import { StatusBtn } from "../styles/ButtonsStyle";
import styled from "styled-components";

const StyledTr = styled.tr`
    cursor: pointer;
    :hover {
        background-color: #f0fcfd;
    }
`;

//마스터 주문조회) 결과값 있을 때 tr
function MasterOrderTr({ data }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/backoffice/masterorder/masterdetailorder/${data.orderNum}`);
    };

    return (
        <StyledTr onClick={handleClick}>
            <td className="brandName">{data.brandName}</td>
            <td className="itemName">{data.orderProduct}</td>
            <td className="itemcode">{data.productCode}</td>
            <td className="orderNum">{data.orderNum}</td>
            <td className="orderDate">{data.orderDay}</td>
            <td className="orderer">{data.ordererName}</td>
            <td className="payQuantity">{data.paymentQuantity}개</td>
            <td className="installmentMonth">{data.rentalMonth}개월</td>
            <td className="payPrice">{data.paymentAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</td>
            <td>
                <StatusBtn className={data.paymentStatus === "결제완료" ? "payDone" : "payCancel"}>{data.paymentStatus === "결제완료" ? "결제완료" : "결제취소"}</StatusBtn>
            </td>
            <td>
                <StatusBtn className={data.deliveryStatus === "배송준비중" ? "deliverReady" : data.deliveryStatus === "배송중" ? "delivering" : "deliverDone"}>
                    {data.deliveryStatus === "배송준비중" ? "배송준비중" : data.deliveryStatus === "배송중" ? "배송중" : "배송완료"}
                </StatusBtn>
            </td>
        </StyledTr>
    );
}

//마스터 주문조회) 결과값 없을 때 tr
function MasterOrderTr_noResult() {
    return (
        <tr className="noResult">
            <td colSpan="11">데이터가 존재하지 않습니다.</td>
        </tr>
    );
}

export { MasterOrderTr, MasterOrderTr_noResult };
