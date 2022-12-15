import React, { Component, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const MainDiv = styled.div`
  background: #edf0f5;
  min-width: 1440px;
  padding: 103px 0 83px;
  .wrapper {
    max-width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
  }
  section.top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .totalDiv {
    width: 66%;
    background-color: #ffffff;
    height: 290px;
    border: 1px solid #d4d5da;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 29px 24px;
    .todayTime {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .today {
        font-size: 14px;
        letter-spacing: -0.25px;
        color: #ffffff;
        padding: 4px 2px;
        background: #f07059;
        border-radius: 2px;
        margin-right: 10px;
      }
      .time {
        font-weight: 500;
        font-size: 20px;
        color: #000000;
      }
    }
    .totalLists {
      padding: 41px 25px;
      display: flex;
      justify-content: space-around;
      .totalList {
        width: 135px;
        height: 135px;
        background: linear-gradient(225deg, #4cd9ef 0%, #2cb8e3 100%);
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .title {
          font-size: 20px;
          line-height: 1.44;
          color: #29626e;
          margin-bottom: 10px;
          margin-top: 23px;
        }
        .num {
          height: 41px;
          line-height: 41px;
          color: #fff;
          padding-left: 10px;
          strong {
            font-weight: 500;
            font-size: 41px;
          }
        }
      }
    }
  }
  section.bottom {
    overflow-x: auto;
    max-width: 1000px;
  }
  section.bottom::-webkit-scrollbar {
    height: 10px;
  }
  section.bottom::-webkit-scrollbar-thumb {
    background-color: #5c5f71;
    border-radius: 10px;
  }
  section.bottom::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 10px;
  }
  .quickmenuWrapper {
    display: flex;
    justify-content: space-between;
  }
  .quickmenuWrapper.master {
    width: 1610px;
    margin-bottom: 9px;
    .kkuda {
      margin-right: 0;
    }
  }
`;

const QuickMenuDiv = styled.div`
  width: ${(props) => (props.auth == "master" ? "31%" : "32%")};
  margin-right: ${(props) => props.auth == "master" && "15px"};
  height: 290px;
  border: 1px solid #d4d5da;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 56px 28px;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: 19% 83%;
  background-size: 105px;
  cursor: pointer;
  .title {
    font-size: 16px;
    font-weight: 500;
    line-height: 2;
    color: #383838;
    text-align: right;
    margin-bottom: 14px;
    strong {
      font-size: 32px;
      line-height: 1;
      text-transform: capitalize;
      margin-right: 5px;
    }
  }
  .subtitle {
    font-size: 14px;
    line-height: 1.42;
    display: block;
    text-align: right;
  }
  &.myPage {
    width: 32%;
    background-image: url("../assets/main_mypage.png");
  }
  &.product {
    background-image: url("../assets/main_product.png");
  }
  &.order {
    background-image: url("../assets/main_order.png");
  }
  &.customer {
    background-image: url("../assets/main_customer.png");
  }
  &.partner {
    background-image: url("../assets/main_partner.png");
  }
  &.kkuda {
    background-image: url("../assets/main_kkuda.png");
  }
  &.delivery {
    background-image: url("../assets/main_delivery.png");
  }
`;

export default function Mypage() {
  const navigate = useNavigate();
  const loginInfo = useSelector((state) => state.loginInfo);
  const dummyData = useSelector((it) => it.publicData.dataList);
  const orderTotal = dummyData.length;
  const payTotal = dummyData.filter((element) => element.paymentStatus === "결제완료").length;
  const delivering = dummyData.filter((element) => element.deliveryStatus === "배송중").length;
  const deliverdone = dummyData.filter((element) => element.deliveryStatus === "배송완료").length;
  let deliverTotal = delivering + deliverdone;

  const [authority] = useState(loginInfo.authority);

  const [time, setTime] = useState(new Date());
  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  var dateString = year + "-" + month + "-" + day;

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(clock);
  }, [time]);

  return (
    <>
      <Header menuState={""} />
      <MainDiv>
        <div className="wrapper">
          <section className="top">
            <div className="totalDiv">
              <div className="todayTime">
                <span className="today">Today</span>
                <p className="time">
                  {dateString} {time.toLocaleTimeString("en-US")}
                </p>
              </div>
              <ul className="totalLists">
                <li className="totalList order">
                  <small className="title">주문</small>
                  <p className="num">
                    <strong>{orderTotal}</strong>건
                  </p>
                </li>
                <li className="totalList payment">
                  <small className="title">결제</small>
                  <p className="num">
                    <strong>{payTotal}</strong>건
                  </p>
                </li>
                <li className="totalList delivery">
                  <small className="title">배송</small>
                  <p className="num">
                    <strong>{deliverTotal}</strong>건
                  </p>
                </li>
              </ul>
            </div>
            {loginInfo.authority == "master" ? (
              <QuickMenuDiv className="myPage" style={{ cursor: "auto" }}>
                <p className="title">
                  <strong>{loginInfo.authority}</strong>님
                </p>
                <span className="subtitle">
                  오늘도 즐거운 <br /> 꾸다 생활❣️{" "}
                </span>
              </QuickMenuDiv>
            ) : (
              <QuickMenuDiv
                className="myPage"
                onClick={() => {
                  navigate("/backoffice/mypage");
                }}
              >
                <p className="title">
                  <strong>{loginInfo.authority}</strong>님
                </p>
                <span className="subtitle">마이페이지</span>
              </QuickMenuDiv>
            )}
          </section>
          <section className="bottom">
            {loginInfo.authority == "master" ? (
              <div className="quickmenuWrapper master">
                <QuickMenuDiv
                  className="product"
                  auth="master"
                  onClick={() => {
                    navigate("/backoffice/productinquiry");
                  }}
                >
                  <p className="title">
                    <strong>상품관리</strong>
                  </p>
                  <span className="subtitle">
                    꾸다에 판매할 상품들을
                    <br />
                    조회, 수정, 삭제 가능합니다.
                  </span>
                </QuickMenuDiv>
                <QuickMenuDiv
                  className="order"
                  auth="master"
                  onClick={() => {
                    navigate("/backoffice/masterorder");
                  }}
                >
                  <p className="title">
                    <strong>주문관리</strong>
                  </p>
                  <span className="subtitle">주문 들어온 상품들을 확인할 수 있습니다.</span>
                </QuickMenuDiv>
                <QuickMenuDiv
                  className="customer"
                  auth="master"
                  onClick={() => {
                    navigate("/backoffice/customerinquiry");
                  }}
                >
                  <p className="title">
                    <strong>고객관리</strong>
                  </p>
                  <span className="subtitle">
                    상품을 주문한 고객리스트를
                    <br />
                    조회할 수 있습니다.
                  </span>
                </QuickMenuDiv>
                <QuickMenuDiv
                  className="partner"
                  auth="master"
                  onClick={() => {
                    navigate("/backoffice/partnerinquiry");
                  }}
                >
                  <p className="title">
                    <strong>파트너관리</strong>
                  </p>
                  <span className="subtitle">
                    꾸다 파트너 사장님들의 정보를
                    <br />
                    조회하고 수정해드릴 수 있습니다.
                  </span>
                </QuickMenuDiv>
                <QuickMenuDiv
                  className="kkuda"
                  auth="master"
                  onClick={() => {
                    navigate("/kkuda");
                  }}
                >
                  <p className="title">
                    <strong>꾸다 바로가기</strong>
                  </p>
                  <span className="subtitle">www.kkuda.kr</span>
                </QuickMenuDiv>
              </div>
            ) : (
              <div className="quickmenuWrapper vendor">
                <QuickMenuDiv
                  className="order"
                  auth="vendor"
                  onClick={() => {
                    navigate("/backoffice/masterorder");
                  }}
                >
                  <p className="title">
                    <strong>주문조회</strong>
                  </p>
                  <span className="subtitle">주문 들어온 상품들을 확인할 수 있습니다.</span>
                </QuickMenuDiv>
                <QuickMenuDiv
                  className="delivery"
                  auth="vendor"
                  onClick={() => {
                    navigate("/backoffice/deliveryinquiry");
                  }}
                >
                  <p className="title">
                    <strong>배송조회</strong>
                  </p>
                  <span className="subtitle">
                    송장번호를 입력하여
                    <br />
                    배송상태를 변경 할수 있습니다.
                  </span>
                </QuickMenuDiv>
                <QuickMenuDiv
                  className="kkuda"
                  auth="vendor"
                  onClick={() => {
                    navigate("/kkuda");
                  }}
                >
                  <p className="title">
                    <strong>꾸다 바로가기</strong>
                  </p>
                  <span className="subtitle">www.kkuda.kr</span>
                </QuickMenuDiv>
              </div>
            )}
          </section>
        </div>
      </MainDiv>
      <Footer />
    </>
  );
}
