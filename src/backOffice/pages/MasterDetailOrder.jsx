import React from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { StatusBtn } from "../styles/ButtonsStyle";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailOrderWrapper = styled.div`
    background: #edf0f5;
`;

const DetailOrder = styled.div`
    width: 1400px;
    box-sizing: border-box;
    background-color: #fff;
    padding: 60px 50px 10px 50px;
    margin: auto;
`;

const InnerBox = styled.div`
    width: 1300px;
    margin: 0 0 60px 0;
    .header {
        height: 40px;
        border-bottom: 1px solid #d4d5da;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        margin-bottom: 40px;
        div {
            display: flex;
            .checkImg {
                width: 17px;
                height: 13px;
                background: url(/assets/check.png) center no-repeat;
                background-size: cover;
                margin: 3px 15px 0 0;
            }
        }
        .date {
            margin-top: 12px;
        }
    }
    .body {
        div.text {
            display: flex;
            font-size: 16px;
            font-weight: 500;
            line-height: 23px;

            .label {
                color: #949494;
                width: 64px;
                margin-right: 24px;
            }
            .inform {
                /* display: flex; */
                /* align-items: center; */
                color: #000000;
                margin-bottom: 20px;
            }
        }
    }
`;

const OrderProduct = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    .img {
        width: 80px;
        height: 90px;
        background: url({detailData.brandImg}) center no-repeat;
        background-size: cover;
        margin-right: 19px;
    }
    .name {
        width: 360px;
        display: block;
        /* justify-content: center; */
        .company {
            display: block;
            font-size: 24px;
            height: 35px;
            line-height: 35px;
            margin-bottom: 7px;
        }
        .box {
            height: 23px;
            line-height: 23px;
            display: flex;
            font-size: 16px;
            .product {
                margin-right: 9px;
                width: 220px;
            }
            .productid {
            }
        }
    }
    .orderPay {
        display: flex;
        color: #8c8c8f;
        font-weight: 500;
        font-size: 16px;
        /* line-height: 23px; */
        height: 16px;
        margin-right: 118px;
        .won {
            padding: 0 6px 0 0;
            border-right: #8c8c8f solid 1px;
        }
        .num {
            padding: 0 6px 0;
            border-right: #8c8c8f solid 1px;
        }
        .term {
            padding: 0 6px 0;
        }
    }
    .ticketBox {
        display: flex;
        justify-content: space-between;
        width: 154px;
        margin-right: 147px;
    }
    .orderNum {
        font-size: 20px;
        color: #8c8c8f;
    }
`;

export default function MasterDetailOrder() {
    const { orderNum } = useParams();
    const dummyData = useSelector((it) => it.publicData.dataList);

    const detailData = dummyData.filter((it) => it.orderNum == orderNum)[0];

    console.log(detailData);
    console.log(orderNum);

    return (
        <>
            <Header menuState={"order"} />
            <DetailOrderWrapper>
                <PageTitle title={"주문 상세조회"} />
                <DetailOrder>
                    <InnerBox>
                        <div className="header">
                            <div>
                                <div className="checkImg" />
                                <div className="title">주문내역</div>
                            </div>
                            <div className="date">2022/06/27 16:57:23</div>
                        </div>
                        <div className="body">
                            <OrderProduct>
                                <img src={detailData.brandImg} className="img" alt="productImg" />
                                <div className="name">
                                    <div className="company">{detailData.brandName}</div>
                                    <div className="box">
                                        <div className="product">{detailData.orderProduct}</div>
                                        {/* <div className="productid">&#40; testid123 &#41;</div> */}
                                    </div>
                                </div>
                                <div className="orderPay">
                                    <div className="won">{detailData.paymentAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
                                    <div className="num">{detailData.paymentQuantity}개</div>
                                    <div className="term">{detailData.rentalMonth}개월</div>
                                </div>
                                <div className="ticketBox">
                                    <StatusBtn className={detailData.paymentStatus === "결제완료" ? "payDone" : "payCancel"}>
                                        {detailData.paymentStatus === "결제완료" ? "결제완료" : "결제취소"}
                                    </StatusBtn>
                                    <StatusBtn className={detailData.deliveryStatus === "배송준비중" ? "deliverReady" : detailData.deliveryStatus === "배송중" ? "delivering" : "deliverDone"}>
                                        {detailData.deliveryStatus === "배송준비중" ? "배송준비중" : detailData.deliveryStatus === "배송중" ? "배송중" : "배송완료"}
                                    </StatusBtn>
                                </div>
                                <div className="orderNum">
                                    {detailData.orderNum} &#40;{detailData.ordererName}&#41;
                                </div>
                            </OrderProduct>
                        </div>
                    </InnerBox>
                    <InnerBox>
                        <div className="header">
                            <div className="">
                                <div className="checkImg" />
                                <div className="title">주문 정보</div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="text">
                                <div className="label">주문자명</div>
                                <div className="inform">{detailData.ordererName}</div>
                            </div>
                            <div className="text">
                                <div className="label">전화번호</div>
                                <div className="inform">{detailData.ordererPhoneNum}</div>
                            </div>
                            <div className="text">
                                <div className="label">이메일</div>
                                <div className="inform">{detailData.ordererEmail}</div>
                            </div>
                        </div>
                    </InnerBox>
                    <InnerBox>
                        <div className="header">
                            <div>
                                <div className="checkImg" />
                                <div className="title">결제 정보</div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="text">
                                <div className="label">상품금액</div>
                                <div className="inform">{detailData.paymentAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
                            </div>
                            <div className="text">
                                <div className="label">배송비</div>
                                <div className="inform">{detailData.shippingFee.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
                            </div>
                            <div className="text">
                                <div className="label">할인금액</div>
                                <div className="inform">0원</div>
                            </div>
                            <div className="text">
                                <div className="label">결제금액</div>
                                <div className="inform">{detailData.paymentAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
                            </div>
                            <div className="text">
                                <div className="label">결제일</div>
                                <div className="inform">매월 {detailData.paymentDate}일</div>
                            </div>
                        </div>
                    </InnerBox>
                    <InnerBox>
                        <div className="header">
                            <div className="text">
                                <div className="checkImg" />
                                <div className="title">배송 정보</div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="text">
                                <div className="label">받는 사람</div>
                                <div className="inform">{detailData.recipient}</div>
                            </div>
                            <div className="text">
                                <div className="label">전화번호</div>
                                <div className="inform">{detailData.recipientPhoneNum}</div>
                            </div>
                            <div className="text">
                                <div className="label">주소</div>
                                <div className="inform">{detailData.recipientAddress}</div>
                            </div>
                            <div className="text">
                                <div className="label">요청사항</div>
                                <div className="inform">{detailData.request}</div>
                            </div>
                        </div>
                    </InnerBox>
                </DetailOrder>
                <Footer />
            </DetailOrderWrapper>
        </>
    );
}
