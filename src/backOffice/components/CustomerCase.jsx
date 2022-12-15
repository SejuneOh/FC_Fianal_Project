import React from "react";
import styled from "styled-components";

const StyledCustomerCase = styled.div`
    .CustomerCase_defaultCase {
        width: 55px;
        height: 20px;
        background: #598cf0;
        color: white;
        margin: auto;
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: -1.25px;
        border-radius: 2px;

        gap: 10px;
        display: flex;
        align-items: center;

        justify-content: center;
    }

    .CustomerCase_examinationFailure {
        width: 55px;
        height: 20px;
        background: #f0db35;
        margin: auto;
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: -0.25px;
        color: black;
        border-radius: 2px;

        gap: 10px;
    }

    .CustomerCase_paymentFailed {
        width: 55px;
        height: 20px;
        background-color: #fd565f;
        color: white;
        text-align: center;
        margin: auto;
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: -0.25px;
        border-radius: 2px;

        gap: 10px;
    }
`;

const defaultCase = () => {
    return <div className="CustomerCase_defaultCase">주문완료</div>;
};
const examinationFailure = () => {
    return <div className="CustomerCase_examinationFailure">심사실패</div>;
};
const paymentFailed = () => {
    return <div className="CustomerCase_paymentFailed">결제실패</div>;
};

const CustomerCase = ({ type }) => {
    return <StyledCustomerCase>{type === "defaultCase" ? defaultCase() : type === "examinationFailure" ? examinationFailure() : type === "paymentFailed" ? paymentFailed() : ""}</StyledCustomerCase>;
};

CustomerCase.defaultProps = {
    type: "default",
};

export default CustomerCase;
