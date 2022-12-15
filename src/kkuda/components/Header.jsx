import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 50px;
    margin-bottom: 62px;

    @media screen and (max-width: 606px) {
        display: none;
    }

    img {
        width: 70.4px;
    }
`;
export default function Header() {
    return (
        <StyledHeader>
            <img src={process.env.PUBLIC_URL + `/assets/kkuda/logo.png`}></img>
        </StyledHeader>
    );
}
