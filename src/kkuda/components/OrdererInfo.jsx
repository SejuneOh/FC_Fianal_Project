import React from "react";
import styled from "styled-components";

const StyledOrdererInfo = styled.div`
    margin-top: 82px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid #c5c5c5;
    table,
    tr,
    th {
        text-align: start;
        padding: 10px;
    }

    table {
        width: 100%;
        margin-bottom: 87px;
    }

    h1 {
        margin-bottom: 56px;
        font-weight: 700;
        font-size: 20px;
    }

    .name {
        width: 50%;
        height: 43px;
    }

    .PhoneNumSelect {
        width: 20%;
        height: 47px;
        margin-right: 28px;
        text-align: center;
    }

    .phoneNumInput {
        width: 48%;
        height: 43px;
        margin-right: 23px;
    }

    .emailInput {
        width: 45%;
        height: 43px;
        margin-right: 10px;
    }

    .emailSelect {
        width: 45%;
        height: 47px;
        margin-left: 10px;
    }

    input {
        border: 1px solid #9a9a9a;
        border-radius: 5px;
    }

    select {
        border: 1px solid #9a9a9a;
        border-radius: 5px;
    }

    button {
        background-color: #30cee6;
        height: 52px;
        border-radius: 50px;
        color: white;
        font-size: 13px;
        width: 18%;
        border: none;
        cursor: pointer;
    }

    .firstCul {
    }
`;

const OrdererInfo = () => {
    return (
        <StyledOrdererInfo>
            <h1>주문자 정보</h1>
            <br />
            <table>
                <tbody>
                    <tr>
                        <th>이름</th>
                        <th>
                            <input className="name" />
                        </th>
                    </tr>
                    <tr>
                        <th className="firstCul">휴대폰 번호</th>
                        <th>
                            <select className="PhoneNumSelect">
                                <option>010</option>
                            </select>
                            <input className="phoneNumInput" />
                            {/* <button>인증번호 발송</button> */}
                        </th>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <th>
                            <input className="emailInput" />@
                            <select className="emailSelect">
                                <option>naver.com</option>
                            </select>
                        </th>
                    </tr>
                </tbody>
            </table>
        </StyledOrdererInfo>
    );
};

export default OrdererInfo;
