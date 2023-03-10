import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const StyledRentalInfo = styled.div`
    margin-top: 97.81px;

    font-family: "AppleSDGothicNeoL00", "Noto Sans KR";

    h1 {
        margin-bottom: 48.92px;
        margin-right: 16px;
        font-size: 21px;
        font-weight: 700;
        font-family: "Noto Sans KR";
    }

    h2 {
        margin-bottom: 27px;
        font-size: 19px;
    }

    h3 {
        margin-top: 30px;
        margin-bottom: 46px;
        color: #707070;
        font-size: 16px;
    }

    h4 {
        color: #707070;
        background-color: #f6f6f6;
        padding: 10px;
        font-size: 14px;
    }
    /* 
    input[type="radio"] {
        display: none;
        background-color: #ffff;
        -webkit-appearance: none;
        -moz-appearance: none;
        margin: 35px auto;
        border: 1px solid rgb(216, 216, 216);
        width: 24px;
        height: 24px;
        border-radius: 100%;
    }
    input[type="radio"]:checked {
        background-color: #4cd9ef;
        -webkit-appearance: none;
        -moz-appearance: none;
        margin: 35px auto;
        border: none;
        width: 24px;
        height: 24px;
        border-radius: 100%;
    } */

    input[type="radio"] {
        accent-color: hsl(189, 100%, 37%);
        margin: 0 auto;
        margin-bottom: 20px;
        margin-top: 40px;
        width: 30px;
        height: 30px;
    }

    strong {
        font-weight: 700;
    }

    .info {
        display: flex;
        align-items: center;
    }

    .signatureColor {
        color: #30cee6;
        font-weight: 700;
    }

    .borderBottom {
        background-color: #f6f6f6;
        font-size: 16px;
        color: #707070;
        padding: 15px 20px;

        line-height: 25px;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-gap: 1rem;
        padding: 0 0 27px 0;
    }
    .box {
        height: auto;
    }
    .checkingBgr {
        width: 32px;
        margin: 35px auto;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .topBox {
        font-size: 22px;
        margin: 0 auto;
        margin-bottom: 19px;
    }

    .boxInfos {
        width: 63%;

        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: "AppleSDGothicNeoL00";
        /* text-align: center; */
        text-indent: -50px;
        font-weight: 400;
        font-size: 21.1227px;
        line-height: 30px;
        .boxInfo {
            margin-bottom: 15px;
        }
    }

    .left {
        margin-left: 115px;
    }

    .right {
        text-indent: 0px;
        text-align: center;
        margin-top: 20px;
    }

    .rental {
        border: 2px solid #4cd9ef;
        height: 281px;
        display: flex;
        flex-direction: column;
    }

    .directPurchase {
        border: 0.825824px solid #b4b4b4;
        height: 281px;
        display: flex;
        flex-direction: column;
    }

    @media only screen and (max-width: 1024px) {
        margin-top: 1px;
        h1 {
            margin-top: 40px;
            font-size: 18px;
        }

        h2 {
            font-size: 15px;
        }
        .borderBottom {
            font-size: 11px;
            line-height: 15px;
            padding: 10px 20px;
        }
        .wrapper {
            width: auto;
            overflow-x: auto;
            scrollbar-color: transparent;
            scrollbar-width: none;
        }
        .wrapper::-webkit-scrollbar {
            background-color: transparent;
            height: 0px;
        }
        .box {
            width: calc(calc(700px - 20px) / 2);
        }

        .boxInfos {
            width: 67%;
            margin: 0 auto;
            margin-left: 75px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: "AppleSDGothicNeoL00";
            text-indent: -35px;
            font-weight: 400;
            font-size: 15.1227px;
            line-height: 25px;
        }

        .mainStrong {
            font-size: 18px;
        }
        input[type="radio"] {
            width: 20px;
            height: 20px;
        }

        .checkingBgr {
            width: 20px;
            margin: 25px auto;
            margin-bottom: 20px;
        }
        .rental {
            border: 1px solid #4cd9ef;
            height: 241px;
            display: flex;
            flex-direction: column;
        }

        .directPurchase {
            border: 0.825824px solid #b4b4b4;
            height: 241px;
            display: flex;
            flex-direction: column;
        }
    }

    @media screen and (max-width: 606px) {
        border-bottom: 0.4px solid #eeeeee;
        .borderBottom {
            margin-bottom: 26px;
        }
    }
`;
const SelectPurchaseType = ({ selected, rentalAmount }) => {
    const productInfo = useSelector((it) => it.productInfo.productInfo);
    return (
        <StyledRentalInfo>
            <div className="info">
                <h1>?????? / ?????? ??????</h1>
                {/* <img className="help" src={process.env.PUBLIC_URL + `/assets/kkuda/help.png`} alt="help" /> */}
            </div>
            <h2>
                ??????????????? ????????? ???????????????
                <span className="signatureColor"> ?????????</span>
                ?????????.
            </h2>
            <h2>
                ??????/?????? ??? ????????? <strong>{productInfo.originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}???</strong>(12?????? ?????? ??????)?????????.
            </h2>
            <h3>(????????? ????????? ????????? ?????? ??? ????????? ????????? ??? ????????????.)</h3>
            <div class="wrapper">
                <div class="box one">
                    <div className="rental">
                        <input checked className="radio" id="radioBtn" name="check" type="radio"></input>
                        <label htmlFor="radioBtn">
                            <span className="circle"></span>
                        </label>
                        {/* <img className="checkingBgr" src={process.env.PUBLIC_URL + `/assets/kkuda/checkingBackground.png`} alt="checkingBgr" /> */}
                        <div className="topBox">
                            <strong className="mainStrong">?????????</strong>
                        </div>
                        <div className="boxInfos left">
                            <li className="boxInfo">
                                &nbsp;&nbsp;&nbsp; <strong>??? ????????? ?????????</strong> ????????? ??????
                            </li>
                            <li className="boxInfo">&nbsp;&nbsp;&nbsp;??????/????????? ?????????, ?????????(?????????), ?????????????????? 30% ??? ???????????? ??????</li>
                        </div>
                    </div>
                </div>
                <div class="box two">
                    <div className="directPurchase">
                        <input className="radio" id="radioBtn" name="check" type="radio"></input>
                        <label htmlFor="radioBtn">
                            <span className="circle"></span>
                        </label>
                        {/* <img className="checkingBgr" src={process.env.PUBLIC_URL + `/assets/kkuda/checkingGray.png`} alt="checkingBgr" /> */}
                        <div className="topBox">
                            <strong className="mainStrong">?????? ??????</strong>
                        </div>
                        <div className="boxInfos right">
                            <div className="boxInfo">
                                <div>?????? ??????????????? ????????? </div>
                                <strong>????????? ??????</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="borderBottom">
                <div>??? A/S ?????? : ????????? ?????? ???????????? ????????? ??????</div>
                <div>??? (?????????, ???????????? ?????? ?????? ???????????? ?????? ?????? ??? ?????? ?????????)</div>
            </div>
        </StyledRentalInfo>
    );
};

export default SelectPurchaseType;
