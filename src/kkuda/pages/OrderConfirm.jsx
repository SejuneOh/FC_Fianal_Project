import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import KkudaBtn from "../components/KkudaBtn";
import Notice from "../components/Notice";
import SelectPurchaseType from "../components/SelectPurchaseType";

const StyledOrder = styled.div`
    /* background-color: #f2f3f2; */
    font-family: "Noto Sans KR";
    width: 1024px;
    margin: auto;
    margin-top: 71px;
    min-height: 100vh;
    font-size: 20px;

    input {
        background-color: white;
        padding-left: 10px;
        font-size: 17px;
        color: black;
    }

    select {
        border: 1px solid black;
        color: black;
        font-size: 17px;
        padding-left: 10px;
    }

    @media screen and (max-width: 1080px) {
        width: 90vw;
        font-size: 0.95rem;
        select,
        input {
            font-size: 0.95rem;
        }
    }
    @media screen and (max-width: 606px) {
        margin-top: 30px;
    }
`;

const StyledMobileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    align-items: center;

    img {
        width: 12px;
    }

    @media screen and (min-width: 607px) {
        display: none;
    }
`;

const StyledOrderStep = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;

    .stepBox {
        background-color: gray;
        width: 23%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 5px;
        border: 1px solid #4cd9ef;
        background-color: white;
        font-weight: 700;
    }

    .vector {
        width: 8px;
    }

    .productImage {
        width: 30px;
    }

    .two {
        color: white;
        background-color: #4cd9ef;
    }

    @media screen and (max-width: 834px) {
        .arrow,
        .vector {
            display: none;
        }

        .stepBox {
            justify-content: center;
        }
    }

    @media screen and (max-width: 606px) {
        display: none;
        .firstCul {
            width: 30%;
        }
    }

    img {
        width: 50px;

        margin-right: 15.69px;
    }

    span {
        font-size: 0.9em;
    }

    .arrow {
        width: 30px;
    }
`;

const OrderLine = styled.div`
    margin-top: 68px;
    font-weight: 900;
    font-size: 21px;
    @media screen and (max-width: 606px) {
        display: none;
    }
`;

const ProductBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 70px;
    width: 100%;
    align-items: center;

    .mobileQuantity {
        display: none;
    }

    .rentalMoney {
        /* margin-top: 3px; */
    }

    .deliveryFee {
        /* margin-top: 2px; */
    }

    select {
        border: none;
    }

    .info {
        width: 55%;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    .productImage {
        margin-right: 20px;
        width: 150px;
    }
    .productRight {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 30px;
        .infoValue {
            width: 37%;
            margin-right: 1%;
            margin-bottom: 25px;

            .infoValueBrand {
                font-weight: 700;
                margin-bottom: 10px;
            }

            .infoValueProductName {
                font-weight: 350;
            }
        }

        .quantity {
            width: 10%;
        }

        .rentalMonth {
            width: 44%;
        }

        .rentalFlex {
            display: flex;
            width: 37%;
        }
    }

    @media screen and (max-width: 606px) {
        .productImage {
            margin-right: 20px;
            width: 120px;
        }

        .info {
            margin-bottom: 50px;
        }

        .infoValueProductName {
            color: black;
        }

        .productRight {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            margin-top: 70px;

            .infoValue,
            .quantity,
            .rentalMonth,
            .rentalMoney,
            .deliveryFee {
                width: 100%;
                margin-bottom: 10px;
            }
            .rentalFlex {
                width: 50vw;
            }
            .rentalMoney {
                margin-top: 1px;
            }

            .rentalMonth {
                width: 60%;
            }

            .quantity,
            .deliveryFee {
                display: none;
            }
            .mobileQuantity {
                margin-top: 3px;
                display: block;
                margin-bottom: 11px;
                color: #818181;
                font-weight: 350;
                font-size: 12px;
            }
        }
    }
`;

const StyledOrdererInfo = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid #c5c5c5;
    border-top: 1px solid #c5c5c5;

    table,
    tr,
    th {
        text-align: start;
        padding: 10px 0;
    }

    .firstCul {
        width: 80%;
        display: block;
        margin-right: 20px;
    }

    table {
        width: 100%;
        margin-bottom: 71.63px;
    }

    .widthValue {
        width: 20%;
    }

    h1 {
        margin-top: 75.44px;
        margin-bottom: 46px;
        font-weight: 700;
        font-size: 21px;
    }

    .name {
        width: 70%;
        height: 55px;
        box-sizing: border-box;
    }

    .PhoneNumSelect {
        width: 13%;
        height: 55px;
        margin-right: 2%;
        /* text-align: center; */
        display: block;
        box-sizing: border-box;
    }

    .phoneNumInput {
        width: 55%;
        height: 55px;
        box-sizing: border-box;
    }

    .phoneNum {
        display: flex;
    }

    .emailInput {
        display: block;
        width: 39.8%;
        height: 51px;
        margin-right: 1%;
    }

    .emailSelect {
        display: block;
        width: 55%;
        height: 55px;
        margin-left: 1%;
    }

    .emailDirectInput {
        display: block;
        width: 47%;
        height: 55px;
        margin-left: 1%;
    }

    .email {
        display: flex;
        align-items: center;
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

    .widthValue,
    .firstCul,
    .emails {
        font-weight: 500;
    }

    @media screen and (max-width: 606px) {
        border-top: 0.4px solid #eeeeee;
        border-bottom: 0.4px solid #eeeeee;

        .name {
            width: 100%;
        }

        .firstCul {
            width: 75px;
        }

        .widthValue {
            width: 18%;
        }

        .phoneNumInput {
            width: 80%;
        }

        h1 {
            margin-top: 43px;
            margin-bottom: 15px;
            font-weight: 700;
            font-size: 18px;
        }

        table,
        tr,
        th {
            padding: 5px 0;
        }

        .name,
        .PhoneNumSelect,
        .phoneNumInput,
        .emailSelect,
        .emailDirectInput {
            height: 43px;
            border-radius: 2.15px;
        }

        .emailInput {
            height: 39px;
            border-radius: 2.15px;
        }

        .PhoneNumSelect {
            width: 25%;
        }

        table {
            margin-bottom: 38px;
        }
    }
`;
const StyledShippingInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid #c5c5c5;
    margin-top: 78.11px;

    table,
    tr,
    th {
        text-align: start;
        padding: 10px 0;
    }

    .widthValue,
    .firstCul,
    .phoneNums,
    .addresses,
    .requestsTag {
        font-weight: 500;
    }

    table {
        width: 100%;
    }

    .firstCul {
        width: 80%;
        display: block;
        margin-right: 20px;
    }

    .widthValue {
        width: 20%;
    }

    h1 {
        margin-bottom: 70.87px;
        font-weight: 700;
        font-size: 21px;
    }

    .infoTop {
        display: flex;
        justify-content: space-between;

        .explanation {
            color: #30cee6;
            font-weight: 700;
            font-size: 19px;
        }
    }

    .postCode {
        position: absolute;
        width: 100px;
        border: 2px solid black;
        margin-right: 300px;
        left: 32vw;
        background-color: red;
    }

    .shipper {
        height: 55px;
        width: 100%;
        box-sizing: border-box;
    }

    .PhoneNumSelect {
        width: 15%;
        height: 55px;
        margin-right: 2%;
        /* text-align: center; */
        display: block;
        box-sizing: border-box;
    }

    .phoneNumInput {
        width: 100%;
        height: 55px;
        box-sizing: border-box;
    }

    .phoneNum {
        display: flex;
    }

    .recipient {
        height: 55px;
        width: 100%;
        box-sizing: border-box;
    }

    .phoneNum {
        box-sizing: inherit;
        height: 55px;
        width: 100%;
        box-sizing: border-box;
    }

    .addressBtn {
        background-color: white;
        border: 1px solid #30cee6;
        color: #30cee6;
        height: 55px;
        width: 90px;
        border-radius: 6px;
        /* margin-right: 50px; */
    }

    .address {
        display: block;
        height: 55px;
        width: 100%;
        /* padding-right: 60px; */
        box-sizing: border-box;
    }

    .writeRequest {
        height: 55px;
        width: 98%;
        box-sizing: border-box;
        margin-bottom: 50px;
    }

    .subAddress {
        height: 55px;
        width: 100%;
        box-sizing: border-box;
    }

    .requests {
        display: block;
        height: 55px;
        width: 100%;
        /* margin-top: 10px; */
        margin-bottom: 95px;
        box-sizing: border-box;
    }

    input,
    select {
        border: 1px solid #9a9a9a;
        border-radius: 5px;
    }

    .addFlex {
        display: flex;
    }

    @media screen and (max-width: 606px) {
        margin-top: 42px;
        border-bottom: 0.4px solid #eeeeee;

        .name {
            width: 100%;
        }

        .firstCul {
            width: 75px;
        }

        .widthValue {
            width: 18%;
        }

        .PhoneNumSelect {
            width: 39%;
        }

        .PhoneNumSelect,
        .phoneNumInput,
        .shipper,
        .recipient,
        .phoneNum,
        .addressBtn,
        .address,
        .writeRequest,
        .subAddress,
        .requests {
            height: 43px;
            border-radius: 2.15px;
        }
        table,
        tr,
        th {
            padding: 5px 0;
        }

        h1 {
            margin-bottom: 26px;
            font-weight: 700;
            font-size: 18px;
        }

        .infoTop {
            .explanation {
                font-size: 16px;
            }
        }

        .requests {
            margin-bottom: 23px;
        }
    }
`;

export default function OrderConfirm() {
    const userInfo = useSelector((it) => it.userInfo.userInfo);
    const productInfo = useSelector((it) => it.productInfo.productInfo);
    const navigate = useNavigate();

    const onClick = () => {
        // const P_RESERVED = d_rtpay=Y&rentalPeriod=12&rentalPrice=10000&rentalCompNm=이니상점
        const body = {
            P_INI_PAYMENT: "RTPAY",
            P_MID: "INIpayTest",
            P_OID: 11111111,
            P_AMT: 360000,
            P_GOODS: "삼성모니터",
            P_UNAME: "조주선",
            P_NEXT_URL: "localhost:3000/kkuda/order/test",
            P_MOBILE: "01028819110",
            P_EMAIL: "jo_ami@naver.com",
            P_RECV_POSTNUM: 3333,
            P_RECV_ADDR: "대전 서구 갈마동",
            P_RECV_ADDR_DETAIL: "100동 100호",
        };

        const getData = async () => {
            const response = await axios.post(
                "/smart/payment?q=d_rtpay=Y&rentalPeriod=12&rentalPrice=46400&rentalCompNm=이니시스&rentalCompNo=2208155597&rentalCompPhone=01012341234&rentalRecipientNm=테스트&rentalRecipientNm=01022295199",
                body
            );
            console.log(response);
            return response;
        };

        getData();
        navigate("/kkuda/order/orderconfirm/ordercompleted");
    };

    console.log("confirm :", userInfo);

    return (
        <StyledOrder>
            <Header />
            <StyledMobileHeader>
                <img onClick={() => navigate(-1)} src={process.env.PUBLIC_URL + `/assets/kkuda/leftArrow.png`} alt="leftArrow" />
                <div>주문 / 결제</div>
                <div></div>
            </StyledMobileHeader>
            <StyledOrderStep>
                <div className="stepBox one">
                    <img className="productImage" src={process.env.PUBLIC_URL + `/assets/kkuda/stepOne.png`} alt="productImg" />
                    <span>주문정보 입력</span>
                    <img className="productImage arrow" src={process.env.PUBLIC_URL + `/assets/kkuda/rightArrow.png`} alt="productImg" />
                </div>
                <div className="stepBox two">
                    <img className="productImage" src={process.env.PUBLIC_URL + `/assets/kkuda/stepTwo.png`} alt="productImg" />
                    <span>주문정보 확인</span>
                    <img className="vector" src={process.env.PUBLIC_URL + `/assets/kkuda/Vector.png`} alt="productImg" />
                </div>
                <div className="stepBox three">
                    <img className="productImage " src={process.env.PUBLIC_URL + `/assets/kkuda/stepThree.png`} alt="productImg" />
                    <span>결제정보 입력</span>
                    <img className="productImage arrow" src={process.env.PUBLIC_URL + `/assets/kkuda/rightArrow.png`} alt="productImg" />
                </div>
                <div className="stepBox four">
                    <img className="productImage" src={process.env.PUBLIC_URL + `/assets/kkuda/stepFour.png`} alt="productImg" />
                    <span>주문 완료</span>
                    <img className="productImage arrow" src={process.env.PUBLIC_URL + `/assets/kkuda/rightArrow.png`} alt="productImg" />
                </div>
            </StyledOrderStep>
            <OrderLine>
                <div>주문 / 결제</div>
            </OrderLine>
            <ProductBox>
                <div>
                    <div className="info">상품정보</div>
                    <img className="productImage" src={productInfo.titleImage} alt="productImg"></img>
                </div>

                <div className="productRight">
                    <div className="infoValue">
                        <div className="infoValueBrand">{productInfo.brandName}</div>
                        <div className="infoValueProductName">{productInfo.name}</div>
                    </div>
                    <div className="mobileQuantity">1개 / 무료배송</div>
                    <div className="quantity">1개</div>
                    <div className="rentalFlex">
                        <div className="rentalMonth">{userInfo.selected}개월 &nbsp;&nbsp;</div>

                        <div className="rentalMoney">월 {userInfo.rentalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                    </div>
                    <div className="deliveryFee">무료배송</div>
                </div>
            </ProductBox>
            <StyledOrdererInfo>
                <h1>주문자 정보</h1>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <th className="widthValue">이름</th>
                            <th>
                                <input disabled defaultValue={userInfo.ordererName} className="name" />
                            </th>
                        </tr>
                        <tr>
                            <th className="firstCul">휴대폰 번호</th>
                            <th>
                                <div className="phoneNum">
                                    <select disabled defaultValue={userInfo.ordererNum.slice(0, 3)} className="PhoneNumSelect">
                                        <option key="010" value="010">
                                            010
                                        </option>
                                        <option key="011" value="011">
                                            011
                                        </option>
                                    </select>
                                    <input disabled defaultValue={userInfo.ordererNum ? userInfo.ordererNum.slice(3, 11) : ""} placeholder="숫자만 입력" className="phoneNumInput" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="emails">이메일</th>
                            <th>
                                <div className="email">
                                    <input disabled defaultValue={userInfo.ordererEmail ? userInfo.ordererEmail.split("@", 1) : ""} className="emailInput" />@
                                    {
                                        <input
                                            disabled
                                            defaultValue={userInfo.ordererEmail ? userInfo.ordererEmail.substring(userInfo.ordererEmail.indexOf("@"), userInfo.ordererEmail.length).slice(1) : ""}
                                            className="emailSelect"
                                        ></input>
                                    }
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </StyledOrdererInfo>
            <StyledShippingInfo>
                <div className="infoTop">
                    <h1>배송 정보</h1>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th className="widthValue">배송자명</th>
                            <th>
                                <input disabled value={userInfo.place} className="shipper" />
                            </th>
                        </tr>
                        <tr>
                            <th className="firstCul">받는 사람</th>
                            <th>
                                <input disabled value={userInfo.recipient} className="recipient" />
                            </th>
                        </tr>
                        <tr>
                            <th className="phoneNums">휴대폰 번호</th>
                            <th>
                                <div className="phoneNum">
                                    <select disabled defaultValue={userInfo.recipientPhoneNum.slice(0, 3)} className="PhoneNumSelect">
                                        <option key="010" value="010">
                                            010
                                        </option>
                                        <option key="011" value="011">
                                            011
                                        </option>
                                    </select>
                                    <input disabled defaultValue={userInfo.recipientPhoneNum ? userInfo.recipientPhoneNum.slice(3, 11) : ""} placeholder="숫자만 입력" className="phoneNumInput" />
                                </div>
                                {/* <input disabled value={userInfo.recipientPhoneNum} className="phoneNum" /> */}
                            </th>
                        </tr>
                        <tr className="styledAddress">
                            <th className="addresses">주소</th>
                            <th>
                                <input value={userInfo.zoneCode} disabled className="address" />
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                <input value={userInfo.address} disabled className="subAddress" />
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                <input value={userInfo.subAddress} disabled placeholder="상세주소 입력" className="subAddress" />
                            </th>
                        </tr>
                        <tr>
                            <th className="requestsTag">요청사항</th>
                            <th>
                                {!userInfo.directInputRequest ? (
                                    <select disabled className="requests">
                                        <option>{userInfo.requests}</option>
                                    </select>
                                ) : (
                                    <input className="requests" disabled defaultValue={userInfo.directInputRequest} />
                                )}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </StyledShippingInfo>
            <SelectPurchaseType />
            <Notice />
            <KkudaBtn onClick={onClick} text={"다음 (2/3)"} />
        </StyledOrder>
    );
}
