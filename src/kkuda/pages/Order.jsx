import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import KkudaBtn from "../components/KkudaBtn";
import Notice from "../components/Notice";

import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "../reducers/userInfo";
import DaumPostcodeEmbed from "react-daum-postcode";
import SelectPurchaseType from "../components/SelectPurchaseType";

import { useDaumPostcodePopup } from "react-daum-postcode";

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
    }

    select {
        font-size: 17px;
        padding-left: 10px;
        border: 1px solid black;

        color: black;
    }

    @media screen and (max-width: 1080px) {
        width: 89vw;
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

    .one {
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
    margin-top: 70px;
    font-weight: 900;
    font-size: 21px;
    @media screen and (max-width: 606px) {
        display: none;
    }
`;

const ProductBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 71.35px;
    width: 100%;
    align-items: center;

    .mobileQuantity {
        display: none;
    }

    select {
        border: none;
    }

    .info {
        width: 60%;
        font-size: 21px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    .productImage {
        margin-right: 38px;
        width: 150px;
    }
    .productRight {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 30px;

        .quantity {
            width: 10%;
            /* border: 1px solid black; */
            text-align: center;
        }

        .rentalMonth {
            width: 40%;
            text-align: center;
        }

        .rentalSelect {
            padding: 0;
        }

        .rentalMoney {
            margin-top: 5px;
            height: 20px;
            width: 50%;
            text-align: center;
            /* border: 1px solid black; */
        }

        .deliveryFee {
            margin-top: 5px;
            margin-left: 10px;

            text-align: center;
            /* border: 1px solid black; */
        }

        .infoValue {
            width: 37%;
            margin-right: 1%;
            margin-top: 8px;

            .infoValueBrand {
                font-weight: 700;
                margin-bottom: 10px;
            }

            .infoValueProductName {
                font-weight: 350;
                color: black;
                line-height: 24px;
            }
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
            margin-bottom: 35px;
            font-size: 18px;
        }

        .infoValueProductName {
            color: black;
        }

        .productRight {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            margin-top: 55px;

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

            .rentalMonth {
                margin-right: 30px;
                width: 60%;
                padding: 0px;
            }

            .rentalMoney {
                margin-top: 5px;
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

const StyledFindAddr = styled.div`
    background-color: white;
    border: 1px solid #30cee6;
    font-weight: 700;
    color: #30cee6;
    height: 53px;
    width: 15%;
    border-radius: 6px;
    margin-right: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #30cee6;
        color: white;
    }

    @media screen and (max-width: 606px) {
        height: 41px;
        border-radius: 2.15px;
        width: 40%;
    }
`;

export default function Order() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((it) => it.userInfo.userInfo);
    const productInfo = useSelector((it) => it.productInfo.productInfo);

    console.log(productInfo);

    const [rental, setRental] = useState([]);
    const [selected, setSelected] = useState(userInfo.selected || "");
    const [rentalAmount, setRentalAmount] = useState(userInfo.rentalAmount || "");
    const [ordererName, setOrdererName] = useState(userInfo.ordererName || "");
    const [firstDigit, setFirstDigit] = useState("010");
    const [eightDigit, setEightDigit] = useState(userInfo.ordererNum ? userInfo.ordererNum.slice(3, 11) : "");
    const [ordererEmail, setOrdererEmail] = useState(userInfo.ordererEmail || "");
    const [emailPrefix, setEmailPrefix] = useState(userInfo.ordererEmail ? userInfo.ordererEmail.split("@", 1) : "");
    const [backOfEmail, setBackOfEmail] = useState("@naver.com");
    const [place, setPlace] = useState(userInfo.place || "");
    const [recipient, setRecipient] = useState(userInfo.recipient || "");
    const [recipientPhoneNum, setRecipientPhoneNum] = useState(userInfo.recipientPhoneNum || "");
    const [address, setAddress] = useState(userInfo.address || "");
    const [subAddress, setSubAddress] = useState(userInfo.subAddress || "");
    const [zoneCode, setZoneCode] = useState(userInfo.zoneCode || "");
    const [requests, setRequests] = useState(userInfo.requests || "문 앞에 놔주세요");
    const [directInputBackOfEmail, setDirectInputBackOfEmail] = useState(userInfo.directInputBackOfEmail || "");
    const [directInputRequest, setDirectInputRequest] = useState(userInfo.directInputRequest || "");
    const [recipientFirstDigit, setRecipientFirstDigit] = useState("010");
    const [recipientEightDigit, setRecipientEightDigit] = useState(userInfo.recipientPhoneNum ? userInfo.recipientPhoneNum.slice(3, 11) : "");

    // const [selectWrite, setSelectWrite] = useState("");

    const selectMonthEl = useRef();
    const ordererNameEl = useRef();
    const ordererPhoneNumEl = useRef();
    const ordererEmailEl = useRef();
    const placeEl = useRef();
    const recipientEl = useRef();
    const recipientPhoneNumEl = useRef();
    const subAddressEl = useRef();
    const directInputRequestEl = useRef();

    let storeId = "INIpayTest";

    let newDate = new Date();
    let year = String(newDate.getFullYear());
    let month = String(("0" + (newDate.getMonth() + 1)).slice(-2));
    let date = String(("0" + newDate.getDate()).slice(-2));
    let hour = String(("0" + newDate.getHours()).slice(-2));
    let minutes = String(("0" + newDate.getMinutes()).slice(-2));
    let seconds = String(("0" + newDate.getSeconds()).slice(-2));
    let fullTime = year + month + date + hour + minutes + seconds;

    let randomNum = Math.floor(Math.random() * (1000 - 100 + 1) + 100);

    let fullSid = "RENTAL" + storeId + fullTime + randomNum;

    const body = {
        mid: "INIpayTest",
        sid: fullSid,
        amount: productInfo.originalPrice,
    };

    useEffect(() => {
        const getData = async () => {
            const response = await axios.post("/contract/v1/inquiryRentalFee", body);

            return setRental(response.data.rentalInfo);
        };
        getData();
    }, []);

    //렌탈기간,금액 state에 담기
    // const rentalSelect = (e) => {
    //     setSelected(e.target.value);
    // };

    // 배송요청사항
    // const selectRequest = (e) => {
    //     setRequests(e.target.value);
    //     setSelectWrite(e.target.value);
    // };

    // const selectBackOfEmail = (e) => {};

    useEffect(() => {
        rental &&
            rental.forEach((it) => {
                if (it.rentalPeriod == selected) {
                    setRentalAmount(it.monthlyRentalAmount);
                }
            });
    }, [selected]);

    //유효성검사
    const onlyNum = /^[0-9]+$/;
    const onlyKoEn = /^[가-힣a-zA-Z]+$/;
    const regularEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    const onClick = () => {
        if (selected === "" || selected === "selectMonth") {
            selectMonthEl.current.focus();
            return alert("렌탈기간을 선택해주세요");
        } else if (ordererName === "" || !onlyKoEn.test(ordererName) || ordererName.length > 4) {
            ordererNameEl.current.focus();
            return alert("주문자명을 입력해주세요");
        } else if (eightDigit === "" || !onlyNum.test(eightDigit)) {
            ordererPhoneNumEl.current.focus();
            return alert("주문자 핸드폰번호를 입력해주세요");
        }
        // else if (emailPrefix + backOfEmail === "" || !regularEmail.test(emailPrefix + backOfEmail)) {
        //     ordererEmailEl.current.focus();
        //     return alert("주문자 이메일을 입력해주세요");
        // }
        else if (recipient === "" || !onlyKoEn.test(recipient) || recipient.length > 4) {
            recipientEl.current.focus();
            return alert("받는사람 이름을 입력해주세요");
        }
        // else if (recipientPhoneNum === "" || !onlyNum.test(recipientPhoneNum) || recipientPhoneNum.length !== 11) {
        //     recipientPhoneNumEl.current.focus();
        //     return alert("받는 전화번호를 입력해주세요");
        // }
        else if (address === "") {
            return alert("주소를 입력해주세요");
        } else if (subAddress === "") {
            subAddressEl.current.focus();
            return alert("상세주소를 입력해주세요");
        } else if (place === "") {
            placeEl.current.focus();
            return alert("배송지를 입력해주세요");
        } else if (directInputRequest ? directInputRequest === "" : "") {
            directInputRequestEl.current.focus();
            return alert("요청사항을 입력해주세요");
        }

        dispatch(
            addUserInfo({
                ordererName,
                rentalAmount,
                selected,
                ordererNum: firstDigit + eightDigit,
                ordererEmail: emailPrefix + (backOfEmail !== "직접 입력" ? backOfEmail : directInputBackOfEmail),
                recipient,
                recipientPhoneNum: recipientFirstDigit + recipientEightDigit,
                place,
                zoneCode,
                address,
                subAddress,
                requests,
                directInputRequest,
            })
        );
        navigate("/kkuda/order/orderconfirm");
    };

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "1594px",
        left: "400px",
        width: "600px",
        height: "500px",
        padding: "7px",
        zIndex: 1,
        border: "1px solid rgb(210, 213, 219)",
        backgroundColor: "#fff",
    };

    const [view, setView] = useState(false);
    const handleComplete = (data) => {
        if (view) {
            let fullAddr = data.address;
            let extraAddr = "";
            if (data.addressType === "R") {
                if (data.bname !== "") {
                    extraAddr += data.bname;
                }
                if (data.buildingName !== "") {
                    extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
                }
                fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
            }
            setAddress(fullAddr);
            setZoneCode(data.zonecode);
            setView(false);
        }
    };

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
                    <img className="vector" src={process.env.PUBLIC_URL + `/assets/kkuda/Vector.png`} alt="productImg" />
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
                        <div className="rentalMonth">
                            <select className="rentalSelect" defaultValue={userInfo.selected} name="기간을 선택해주세요" onChange={(e) => setSelected(e.target.value)} ref={selectMonthEl}>
                                <option value="selectMonth">기간선택</option>
                                <option value="12">12개월</option>
                                <option value="24">24개월</option>
                                <option value="36">36개월</option>
                                <option value="48">48개월</option>
                                <option value="60">60개월</option>
                            </select>
                        </div>
                        <div className="rentalMoney">
                            {rental && selected
                                ? rental.map((it, idx) => {
                                      if (it.rentalPeriod == selected) {
                                          return (
                                              <span className="rentalMoney" key={idx}>
                                                  월 {it.monthlyRentalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                              </span>
                                          );
                                      }
                                  })
                                : "0"}
                            원
                        </div>
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
                                <input defaultValue={userInfo.ordererName} onChange={(e) => setOrdererName(e.target.value)} ref={ordererNameEl} className="name" />
                            </th>
                        </tr>
                        <tr>
                            <th className="firstCul">휴대폰 번호</th>
                            <th>
                                <div className="phoneNum">
                                    <select
                                        defaultValue={userInfo.ordererNum ? userInfo.ordererNum.slice(0, 3) : firstDigit}
                                        onChange={(e) => setFirstDigit(e.target.value)}
                                        className="PhoneNumSelect"
                                    >
                                        <option key="010" value="010">
                                            010
                                        </option>
                                        <option key="011" value="011">
                                            011
                                        </option>
                                    </select>
                                    <input
                                        defaultValue={userInfo.ordererNum ? userInfo.ordererNum.slice(3, 11) : ""}
                                        onChange={(e) => setEightDigit(String(e.target.value))}
                                        placeholder="숫자만 입력"
                                        className="phoneNumInput"
                                        ref={ordererPhoneNumEl}
                                    />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="emails">이메일</th>
                            <th>
                                <div className="email">
                                    <input
                                        defaultValue={userInfo.ordererEmail ? userInfo.ordererEmail.split("@", 1) : ""}
                                        onChange={(e) => setEmailPrefix(e.target.value)}
                                        className="emailInput"
                                        ref={ordererEmailEl}
                                    />
                                    @
                                    {backOfEmail !== "직접 입력" && !userInfo.directInputBackOfEmail ? (
                                        <select
                                            defaultValue={userInfo.ordererEmail ? userInfo.ordererEmail.substring(userInfo.ordererEmail.indexOf("@"), userInfo.ordererEmail.length) : backOfEmail}
                                            onChange={(e) => setBackOfEmail(e.target.value)}
                                            className="emailSelect"
                                        >
                                            <option value="@naver.com" key="@naver.com">
                                                naver.com
                                            </option>
                                            <option value="@hanmail.net" key="@hanmail.net">
                                                hanmail.net
                                            </option>
                                            <option value="@daum.net" key="@daum.net">
                                                daum.net
                                            </option>
                                            <option value="@gmail.com" key="@gmail.com">
                                                gmail.com
                                            </option>
                                            <option value="@hotmail.com" key="@hotmail.com">
                                                hotmail.com
                                            </option>
                                            <option value="직접 입력">직접 입력</option>
                                        </select>
                                    ) : (
                                        <input onChange={(e) => setDirectInputBackOfEmail("@" + e.target.value)} className="emailDirectInput" />
                                    )}
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </StyledOrdererInfo>
            <StyledShippingInfo>
                <div className="infoTop">
                    <h1>배송 정보</h1>
                    <h2 className="explanation">위와 동일하게 채우기</h2>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th className="widthValue">배송지명</th>
                            <th className="shippingvalue">
                                <input placeholder="ex) 회사" defaultValue={userInfo.place} onChange={(e) => setPlace(e.target.value)} className="shipper" ref={placeEl} />
                            </th>
                        </tr>
                        <tr>
                            <th className="firstCul">받는 사람</th>
                            <th className="shippingvalue">
                                <input defaultValue={userInfo.recipient} onChange={(e) => setRecipient(e.target.value)} className="recipient" ref={recipientEl} />
                            </th>
                        </tr>
                        <tr>
                            <th className="phoneNums">휴대폰 번호</th>
                            <th className="shippingvalue">
                                <div className="phoneNum">
                                    <select
                                        defaultValue={userInfo.recipientPhoneNum ? userInfo.recipientPhoneNum.slice(0, 3) : recipientFirstDigit}
                                        onChange={(e) => setRecipientFirstDigit(e.target.value)}
                                        className="PhoneNumSelect"
                                    >
                                        <option key="010" value="010">
                                            010
                                        </option>
                                        <option key="011" value="011">
                                            011
                                        </option>
                                    </select>
                                    <input
                                        defaultValue={userInfo.recipientPhoneNum ? userInfo.recipientPhoneNum.slice(3, 11) : ""}
                                        onChange={(e) => setRecipientEightDigit(String(e.target.value))}
                                        placeholder="숫자만 입력"
                                        className="phoneNumInput"
                                        ref={recipientPhoneNumEl}
                                    />
                                </div>

                                {/* <input
                                    placeholder="숫자만 입력"
                                    defaultValue={userInfo.recipientPhoneNum}
                                    onChange={(e) => setRecipientPhoneNum(e.target.value)}
                                    className="phoneNum"
                                    ref={recipientPhoneNumEl}
                                /> */}
                            </th>
                        </tr>
                        <tr className="styledAddress">
                            <th className="addresses">주소</th>
                            <th className="shippingvalue">
                                <div className="addFlex">
                                    <StyledFindAddr onClick={() => setView(!view)}>찾기</StyledFindAddr>
                                    {view ? (
                                        <div>
                                            <DaumPostcodeEmbed style={postCodeStyle} onComplete={handleComplete} />
                                        </div>
                                    ) : null}
                                    <input defaultValue={zoneCode} disabled className="address" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th className="shippingvalue">
                                <input value={address} disabled className="subAddress" />
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th className="shippingvalue">
                                <input defaultValue={userInfo.subAddress} onChange={(e) => setSubAddress(e.target.value)} placeholder="상세주소 입력" className="subAddress" ref={subAddressEl} />
                            </th>
                        </tr>
                        <tr>
                            <th className="requestsTag">요청사항</th>
                            <th className="shippingvalue">
                                {requests !== "직접 입력" && !userInfo.directInputRequest ? (
                                    <select defaultValue={userInfo.requests} onChange={(e) => setRequests(e.target.value)} className="requests">
                                        <option value="문 앞에 놔주세요">문 앞에 놔주세요</option>
                                        <option value="배송 전에 미리 연락바랍니다.">배송 전에 미리 연락바랍니다.</option>
                                        <option value="부재시 경비실에 맡겨주세요.">부재시 경비실에 맡겨주세요.</option>
                                        <option value="부재시 전화주시거나 문자 남겨주세요.">부재시 전화주시거나 문자 남겨주세요.</option>
                                        <option value="직접 입력">직접 입력</option>
                                    </select>
                                ) : (
                                    <input defaultValue={userInfo.directInputRequest} onChange={(e) => setDirectInputRequest(e.target.value)} className="requests" ref={directInputRequestEl} />
                                )}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </StyledShippingInfo>
            <SelectPurchaseType />
            <Notice />
            <KkudaBtn onClick={onClick} text={"다음 (1/3)"} />
        </StyledOrder>
    );
}
