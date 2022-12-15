import React from "react";
import styled from "styled-components";
import FindAddress from "./FindAddress";

const StyledShippingInfo = styled.div`
    margin-top: 86px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid #c5c5c5;

    table,
    tr,
    th {
        text-align: start;
        padding: 10px 0;
    }

    h1 {
        margin-bottom: 87px;
        font-weight: 700;
        font-size: 20px;
    }

    .infoTop {
        display: flex;
        justify-content: space-between;

        .explanation {
            color: #30cee6;
            font-weight: 700;
        }
    }

    .shipper {
        height: 43px;
        width: 99%;
    }

    .recipient {
        height: 43px;
        width: 99%;
    }

    .phoneNum {
        height: 43px;
        width: 99%;
    }

    .addressBtn {
        background-color: white;
        border: 1px solid #30cee6;
        color: #30cee6;
        height: 43px;
        width: 90px;
        border-radius: 6px;
        margin-right: 23px;
    }

    .address {
        height: 43px;
        width: 80%;
    }

    .subAddress {
        height: 43px;
        width: 99%;
    }

    .requests {
        height: 43px;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 50px;
    }

    input,
    select {
        border: 1px solid #9a9a9a;
        border-radius: 5px;
    }

    .addFlex {
        display: flex;
    }
`;

const ShippingInfo = () => {
    return (
        <StyledShippingInfo>
            <div className="infoTop">
                <h1>배송 정보</h1>
                <h2 className="explanation">위와 동일하게 채우기</h2>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>배송자명</th>
                        <th>
                            <input className="shipper" />
                        </th>
                    </tr>
                    <tr>
                        <th>받는 사람</th>
                        <th>
                            <input className="recipient" />
                        </th>
                    </tr>
                    <tr>
                        <th>휴대폰 번호</th>
                        <th>
                            <input className="phoneNum" />
                        </th>
                    </tr>
                    <tr className="styledAddress">
                        <th>주소</th>
                        <th>
                            <div className="addFlex">
                                <FindAddress />
                                <input disabled className="address" />
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>
                            <input disabled className="subAddress" />
                        </th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>
                            <input placeholder="상세주소 입력" className="subAddress" />
                        </th>
                    </tr>
                </tbody>
            </table>
            <select className="requests">
                <option>문 앞에 놔주세요</option>
                <option>배송 전에 미리 연락바랍니다.</option>
                <option>부재시 경비실에 맡겨주세요.</option>
                <option>부재시 전화주시거나 문자 남겨주세요.</option>
                <option>직접 입력</option>
            </select>
        </StyledShippingInfo>
    );
};

export default ShippingInfo;
