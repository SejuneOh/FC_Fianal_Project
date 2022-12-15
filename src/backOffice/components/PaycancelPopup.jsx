import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeDeliveryCompleted, changeShipping, payCancel, payCompleted } from "../../kkuda/reducers/publicData";

const Dimmed = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
`;
const PopupBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 440px;
    height: 320px;
    background: #ffffff;
    .topArea {
        width: 100%;
        height: 48px;
        background: #edf0f5;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 21px 0 16px;
        h3 {
            font-weight: 400;
            font-size: 20px;
            color: #000000;
        }
        .closeBtn {
            width: 14px;
            height: 14px;
            border: none;
            cursor: pointer;
            background: url("../assets/closeIcon.png") center / cover;
        }
    }
    .contentArea {
        .totalBox {
            display: block;
            margin: 40px auto 32px;
            text-align: center;
            font-weight: 500;
            font-size: 24px;
            color: #000;
            span {
                color: #4cd9ef;
            }
        }
        .radioBox {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 58px;
            fieldset:first-of-type {
                margin-right: 40px;
            }
            input {
                display: none;
            }
            input:checked + label i {
                border: 7px solid #4cd9ef;
            }
            label i {
                display: inline-block;
                vertical-align: top;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: #ffffff;
                border: 1px solid #e3e7ea;
                box-sizing: border-box;
                margin-right: 8px;
                cursor: pointer;
            }
            label span {
                display: inline-block;
                vertical-align: top;
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                cursor: pointer;
            }
        }
        .buttonBox {
            display: flex;
            align-items: center;
            justify-content: center;
            button {
                padding: 6px 25px;
                border: none;
                box-sizing: border-box;
                font-size: 16px;
                cursor: pointer;
            }
            .okayBtn {
                background: #4cd9ef;
                border: 1px solid #2cb8e3;
                color: #fff;
                padding: 6px 44px 6px 25px;
                margin-right: 12px;
                position: relative;
                :after {
                    position: absolute;
                    content: "";
                    display: block;
                    width: 14px;
                    height: 14px;
                    top: 50%;
                    right: 26px;
                    transform: translateY(-50%);
                    background: url("../assets/checkWhite.png") no-repeat center / cover;
                }
            }
            .cancelBtn {
                background: #dfe3ea;
                border: 1px solid #acafb6;
                color: #7c7f86;
            }
        }
    }
`;

export default function PaycancelPopup({ setPopUp, checked, setChecked }) {
    const dispatch = useDispatch();
    const [deliveryStatus, setDeliveryStatus] = useState();
    const dummyData = useSelector((it) => it.publicData.dataList);

    console.log(checked);

    const handleStatus = (e) => {
        const confirm = window.confirm("정말 수정하시겠습니까?");
        e.preventDefault();

        setPopUp(false);
        if (confirm) {
            if (deliveryStatus === "결제완료") {
                for (const data in checked) {
                    dispatch(payCompleted(checked[data]));
                }
                setChecked("");
            } else if (deliveryStatus === "결제취소") {
                for (const data in checked) {
                    dispatch(payCancel(checked[data]));
                }
                setChecked("");
            }
            window.location.replace("/backoffice/deliveryInquiry");
        } else {
            window.location.replace("/backoffice/deliveryInquiry");
            return;
        }
    };

    const closed = (e) => {
        e.preventDefault();
        window.location.replace("/backoffice/deliveryInquiry");
        setPopUp(false);
    };

    return (
        <>
            <Dimmed>
                <PopupBox>
                    <div className="topArea">
                        <h3>결제처리</h3>
                        <button
                            className="closeBtn"
                            onClick={(e) => {
                                e.preventDefault();
                                setPopUp(false);
                            }}
                        ></button>
                    </div>
                    <div className="contentArea">
                        <strong className="totalBox">
                            총 <span>{checked.length}</span> 건
                        </strong>
                        <div className="radioBox">
                            <fieldset>
                                <input onChange={(e) => setDeliveryStatus(e.target.value)} value="결제완료" type="radio" id="ing" name="deliverRadio"></input>
                                <label htmlFor="ing">
                                    {" "}
                                    <i></i> <span>결제완료</span>{" "}
                                </label>
                            </fieldset>
                            <fieldset>
                                <input onChange={(e) => setDeliveryStatus(e.target.value)} value="결제취소" type="radio" id="done" name="deliverRadio"></input>
                                <label htmlFor="done">
                                    {" "}
                                    <i></i> <span>결제취소</span>{" "}
                                </label>
                            </fieldset>
                        </div>
                        <div className="buttonBox">
                            <button
                                className="okayBtn"
                                onClick={(e) => {
                                    handleStatus(e);
                                }}
                            >
                                완료
                            </button>
                            <button className="cancelBtn" onClick={(e) => closed(e)}>
                                취소
                            </button>
                        </div>
                    </div>
                </PopupBox>
            </Dimmed>
        </>
    );
}
