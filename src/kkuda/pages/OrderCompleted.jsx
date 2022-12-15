import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import KkudaBtn from "../components/KkudaBtn";

const StyledOrder = styled.div`
    /* background-color: #f2f3f2; */
    font-family: "Noto Sans KR";
    width: 1024px;
    margin: auto;
    margin-top: 55px;
    min-height: 100vh;
    font-size: 20px;

    @media screen and (max-width: 1080px) {
        width: 90vw;
        font-size: 0.95rem;
    }

    @media screen and (max-width: 606px) {
        margin-top: 30px;
    }

    .mobileAccount {
        display: none;
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

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 50px;
    margin-bottom: 114.81px;

    img {
        width: 70.4px;
    }

    @media screen and (max-width: 606px) {
        display: none;
    }
`;

const StyledOrderStep = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: #eaeaea; */
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

    .four {
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
    margin-top: 67px;
    font-weight: 900;
    font-size: 21.4682px;
    @media screen and (max-width: 606px) {
        display: none;
    }
`;

const CheckPoint = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;

    img {
        width: 80px;
    }

    .completeText {
        margin-top: 40px;
        font-size: 35px;

        .emphasis {
            font-weight: 700;
        }
    }

    @media screen and (max-width: 606px) {
        .completeText {
            font-size: 23px;
        }
    }
`;

const ProductInfo = styled.div`
    margin-top: 68px;
    border: 0.825699px solid #c5c5c5;
    border-radius: 4.12849px;
    font-size: 16px;

    img {
        height: 189px;
        width: 177px;
        margin: 38px 36px;
    }

    .rightPrice {
        display: none;
    }

    .mobileQuantity {
        display: none;
    }

    .productInfoBox {
        display: flex;

        .productLeft {
            display: flex;
            /* width: 80%; */

            .productInfo {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 50%;

                .productBrand {
                    font-weight: 700;
                    font-size: 16.514px;
                }

                .productName {
                    margin-top: 10px;
                    margin-bottom: 20px;
                    font-weight: 350;
                    font-size: 16.514px;
                    /* line-height: 24px; */
                }

                .rentalInfo {
                    margin-bottom: 10px;
                    font-weight: 500;
                    font-size: 16.514px;
                }

                .quantity {
                    font-size: 14px;
                    color: gray;
                }
                @media screen and (max-width: 606px) {
                    .productBrand,
                    .productName,
                    .rentalInfo,
                    .quantity {
                        font-size: 12px;
                    }
                    .productName {
                        margin-top: 7px;
                        margin-bottom: 7px;
                    }

                    .quantity {
                        display: none;
                    }

                    .mobileQuantity {
                        display: block;
                    }

                    .totalPrice {
                        font-family: "AppleSDGothicNeoEB00", "Noto Sans KR";
                    }
                }
            }
        }

        .productRight {
            width: 45%;
            padding: 30px 20px;
            border-left: 0.825699px solid #c5c5c5;
            .paymentInfos {
                display: flex;
                flex-direction: column;
                border-bottom: 0.825699px solid #c5c5c5;

                .paymentInfo {
                    display: flex;
                    justify-content: space-between;

                    .paymentTitle {
                        font-weight: 700;
                        font-size: 16.514px;
                        margin-bottom: 20px;
                    }

                    .paymentValue {
                        font-weight: 400;
                        font-size: 16.514px;
                    }
                }
            }
            .totalPayment {
                display: flex;
                justify-content: space-between;
                margin-top: 35px;

                .totalPaymentTitle {
                    font-weight: 900;
                    font-size: 19.8168px;
                }

                .totalPaymentValue {
                    font-weight: 500;
                    font-size: 19.8168px;
                }
            }
        }
    }

    @media screen and (max-width: 806px) {
        border: none;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;

        .rightPrice {
            display: block;
        }
        .totalPrice {
            font-weight: 500;
            font-size: 20px;
            margin-top: 10px;
            /* background-color: red; */

            width: 220%;
        }

        .productBrand,
        .productName {
            font-size: 12px;
        }

        .productInfoBox {
            display: block;
        }
        .productLeft {
            width: 100%;

            .productInfo {
                width: 30%;
                margin-top: 14px;
            }
        }
        .productRight {
            display: none;
        }

        .paymentTitle {
            display: none;
        }

        .totalPaymentValue {
            display: block;
        }

        img {
            margin: 38px 0;
            margin-right: 9px;
            width: 72px;
            height: 82px;
        }

        .flexMobile {
            justify-content: space-between;
            display: flex;
            font-size: 12px;
            width: 155%;

            .productName {
                margin-right: 20%;
            }
        }

        .mobileTotal {
            text-align: end;
        }

        .rightPrice {
            width: 55%;
            text-align: end;

            .rightPriceTop {
                margin-bottom: 5px;

                width: 102%;
            }

            .rightPriceBottom {
                color: #4cd9ef;
                width: 102%;
            }
        }
    }
`;

const CompletedInfo = styled.div`
    margin-top: 87px;
    text-align: left;
    font-family: "AppleSDGothicNeoL00", "Noto Sans KR";
    table {
        width: 100%;
    }

    .addressContent {
        line-height: 25px;
    }

    th {
        padding: 0 0 30px 0;
    }
    .orderNum {
        padding-bottom: 70px;
    }

    .shippingInfo {
        padding-top: 33px;
    }

    .requests {
        padding-top: 40px;
    }

    .deliveryRequest {
        padding-top: 14px;
        padding-bottom: 0px;
    }

    .benefits {
        width: 100%;
        height: 50px;
        border: 1px solid #c5c5c5;
        border-radius: 5px;
    }

    .deliveryRequestText {
        padding: 0;
    }

    .orderNum,
    .ordererInfo,
    .shippingInfo,
    .requests,
    .deliveryRequest {
        font-weight: 700;
    }

    .content {
        font-weight: 400;
    }

    @media screen and (max-width: 606px) {
        margin-top: 30px;
        font-size: 14px;

        .orderNum,
        .numberContent {
            display: none;
        }
        .ordererInfo {
            width: 30%;
        }
        .emailBottom {
            border-bottom: 1px solid #eeeeee;
        }
    }
`;

const OrderCompleted = () => {
    const navigate = useNavigate();
    const userInfo = useSelector((it) => it.userInfo.userInfo);
    const productInfo = useSelector((it) => it.productInfo.productInfo);

    const onClick = () => {
        navigate("/kkuda");
    };

    return (
        <StyledOrder>
            <StyledHeader>
                <img src={process.env.PUBLIC_URL + `/assets/kkuda/logo.png`}></img>
            </StyledHeader>
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
                    <img className="productImage arrow" src={process.env.PUBLIC_URL + `/assets/kkuda/rightArrow.png`} alt="productImg" />
                </div>
                <div className="stepBox three">
                    <img className="productImage " src={process.env.PUBLIC_URL + `/assets/kkuda/stepThree.png`} alt="productImg" />
                    <span>결제정보 입력</span>
                    <img className="productImage arrow" src={process.env.PUBLIC_URL + `/assets/kkuda/rightArrow.png`} alt="productImg" />
                </div>
                <div className="stepBox four">
                    <img className="productImage" src={process.env.PUBLIC_URL + `/assets/kkuda/stepFour.png`} alt="productImg" />
                    <span>주문 완료</span>
                    <img className="vector" src={process.env.PUBLIC_URL + `/assets/kkuda/Vector.png`} alt="productImg" />
                </div>
            </StyledOrderStep>
            <OrderLine>
                <div>주문 / 결제</div>
            </OrderLine>
            <CheckPoint>
                <img src={process.env.PUBLIC_URL + `/assets/kkuda/check.png`} alt="step1" />
                <div className="completeText">
                    <span className="emphasis">주문이 정상적으로 완료</span>
                    되었습니다.
                </div>
            </CheckPoint>
            <ProductInfo>
                <div className="productInfoBox">
                    <div className="productLeft">
                        <div className="productImg">
                            <img src={productInfo.titleImage} alt="titleImage" />
                        </div>
                        <div className="productInfo">
                            <div className="productBrand">{productInfo.brandName}</div>
                            <div className="flexMobile">
                                <div className="productName">{productInfo.name}</div>
                                <div className="rightPrice">
                                    <div className="rightPriceTop">{productInfo.originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                                    <div className="rightPriceBottom">(-) 0원</div>
                                </div>
                            </div>
                            <div className="rentalInfo">
                                (렌탈) 월 {userInfo.rentalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 * {userInfo.selected}개월
                            </div>
                            <div className="flexMobile">
                                <div className="quantity">주문수량 : 1개</div>
                                <div className="quantity mobileQuantity">1개&nbsp;&nbsp; |&nbsp;&nbsp; 무료배송</div>
                                <div className="rightPrice totalPrice">{productInfo.originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                            </div>
                        </div>
                    </div>
                    <div className="productRight">
                        <div className="paymentInfos">
                            <div className="paymentInfo">
                                <div className="paymentTitle">상품금액</div>
                                <div className="paymentValue">
                                    월 {userInfo.rentalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 * {userInfo.selected}개월
                                </div>
                            </div>
                            <div className="paymentInfo">
                                <div className="paymentTitle">할인금액</div>
                                <div className="paymentValue">(-) 0원</div>
                            </div>
                            <div className="paymentInfo">
                                <div className="paymentTitle">마일리지 사용</div>
                                <div className="paymentValue">(-) 0원</div>
                            </div>
                            <div className="paymentInfo">
                                <div className="paymentTitle">배송비</div>
                                <div className="paymentValue">(-) 0원</div>
                            </div>
                        </div>
                        <div className="totalPayment">
                            <div className="totalPaymentTitle">총결제금액</div>
                            <div className="totalPaymentValue">{productInfo.originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                        </div>
                    </div>
                </div>
            </ProductInfo>
            <CompletedInfo>
                <table>
                    <tbody>
                        <tr>
                            <th className="orderNum">주문번호</th>
                            <th className="content numberContent">2022062938952222</th>
                        </tr>
                        <tr>
                            <th className="ordererInfo">주문자 정보</th>
                            <th className="content">{userInfo.ordererName} </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th className="content">{userInfo.ordererNum.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}</th>
                        </tr>
                        <tr className="emailBottom">
                            <th></th>
                            <th className="content">{userInfo.ordererEmail}</th>
                        </tr>
                        <tr>
                            <th className="shippingInfo">배송 정보</th>
                            <th className="content">
                                {userInfo.recipient}&nbsp;&nbsp; |&nbsp;&nbsp; {userInfo.place}
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th className="content">{userInfo.recipientPhoneNum.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th className="content addressContent">{`(${userInfo.zoneCode}) ${userInfo.address} ${userInfo.subAddress}`}</th>
                        </tr>
                        <tr>
                            <th className="deliveryRequest">배송요청사항</th>
                            <th className="deliveryRequestText">{userInfo.directInputRequest ? userInfo.directInputRequest : userInfo.requests}</th>
                        </tr>
                    </tbody>
                </table>
                {/* <select className="benefits">
                    <option>구매혜택</option>
                </select> */}
            </CompletedInfo>
            <KkudaBtn onClick={onClick} text={"쇼핑 계속하기"} />
        </StyledOrder>
    );
};

export default OrderCompleted;
