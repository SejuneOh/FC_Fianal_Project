import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledMobileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    align-items: center;
    font-weight: 700;

    img {
        width: 12px;
    }

    @media screen and (min-width: 607px) {
        display: none;
    }
`;

const MobileHeader = () => {
    const navigate = useNavigate();

    return (
        <StyledMobileHeader>
            <img onClick={() => navigate(-1)} src={process.env.PUBLIC_URL + `/assets/kkuda/leftArrow.png`} alt="leftArrow" />
            <div>주문 / 결제</div>
            <div></div>
        </StyledMobileHeader>
    );
};

export default MobileHeader;
