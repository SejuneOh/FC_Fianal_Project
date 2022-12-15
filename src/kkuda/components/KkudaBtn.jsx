import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledKkudaBtn = styled.button`
    margin-top: 103px;

    width: 100%;
    background-color: #30cee6;
    height: 107px;
    margin-bottom: 66px;
    border: none;
    color: white;
    border-radius: 7px;
    font-size: 23px;
    font-weight: 900;
    cursor: pointer;

    @media screen and (max-width: 606px) {
        margin-top: 52px;
        margin-bottom: 32px;
        font-size: 17px;
        height: 46px;
    }
`;

const KkudaBtn = ({ text, onClick }) => {
    return <StyledKkudaBtn onClick={onClick}>{text}</StyledKkudaBtn>;
};

export default KkudaBtn;
