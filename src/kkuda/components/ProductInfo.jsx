import axios from "axios";
import React, { useEffect, useState } from "react";

import styled from "styled-components";

const StyledProductInfo = styled.div`
    margin-top: 90px;
    border-bottom: 1px solid #c5c5c5;
    display: flex;

    table {
        width: 100%;
        margin-bottom: 82px;
    }

    .productInfo {
        width: 50%;
        text-align: start;
        font-size: 20px;
        font-weight: 700;
    }

    .productImg {
        width: 150px;
        margin-top: 15px;
    }

    .center,
    .account {
        vertical-align: middle;

        .brand {
            text-align: start;
            font-weight: 700;
            margin-left: 30px;
        }
        .productName {
            text-align: start;
            margin-top: 5px;
            font-weight: 350;
            margin-left: 30px;
        }
    }

    .account {
    }

    select {
        border: none;
    }
`;

const ProductInfo = () => {
    const [rental, setRental] = useState();
    const [selected, setSelected] = useState(0);

    //mid
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

    //sid
    let fullSid = "RENTAL" + storeId + fullTime + randomNum;

    const body = {
        mid: "INIpayTest",
        sid: fullSid,
        amount: "500000",
    };

    useEffect(() => {
        const getData = async () => {
            const response = await axios.post("/contract/v1/inquiryRentalFee", body);
            console.log(response);
            return setRental(response.data.rentalInfo);
        };

        getData();
    }, []);

    const rentalSelect = (e) => {
        setSelected(e.target.value);
    };

    return (
        <StyledProductInfo>
            <table>
                <tbody>
                    <tr className="firstTr">
                        <th colSpan="2" className="productInfo">
                            <h1>상품정보</h1>
                        </th>
                        <th>수량</th>
                        <th>기간</th>
                        <th>월 분납액</th>
                        <th>배송비</th>
                    </tr>
                    <tr>
                        <th>
                            <img className="productImg" src={process.env.PUBLIC_URL + `/assets/kkuda/productImg.png`}></img>
                        </th>
                        <th className="center">
                            <div className="brand">삼성전자</div>
                            <div className="productName">[삼성] 삼성 인버터 1등급 제습기 AY18BG7500GBD</div>
                        </th>
                        <th className="center">
                            <span>1</span>
                        </th>
                        <th className="center">
                            <select name="기간을 선택해주세요" onChange={rentalSelect}>
                                <option value="" defaultValue>
                                    기간선택
                                </option>
                                {rental && rental.map((info) => <option defaultValue value={info.rentalPeriod} key={info.rentalPeriod}>{`${info.rentalPeriod}개월`}</option>)}
                            </select>
                        </th>
                        <th className="account">
                            {rental && selected
                                ? rental.map((it, idx) => {
                                      if (it.rentalPeriod == selected) {
                                          return <span key={idx}>{it.monthlyRentalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>;
                                      }
                                  })
                                : "0"}
                            원
                        </th>
                        <th className="center">무료</th>
                    </tr>
                </tbody>
            </table>
        </StyledProductInfo>
    );
};

export default ProductInfo;
