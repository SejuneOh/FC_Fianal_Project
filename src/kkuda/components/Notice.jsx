import React from "react";
import styled from "styled-components";

const StyledNotice = styled.div`
    /* width: 90%; */
    margin: auto;

    font-family: "AppleSDGothicNeoL00", "Noto Sans KR";
    strong {
        font-weight: 500;
    }

    h1 {
        font-weight: 700;
        margin-top: 105px;
        font-size: 21px;
        font-family: "Noto Sans KR";
    }

    img {
        width: 30px;
        margin-right: 13px;
        display: block;
    }

    .mainText {
        /* list-style-image: url(${process.env.PUBLIC_URL + "/assets/kkuda/moneyImg.png"}); */
        /* text-indent: -29px; */
        /* list-style-position: inside; */
        font-size: 23px;
        font-weight: 700;
        line-height: 24px;
    }

    .mainTextBox {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 91px;
        margin-left: 30px;
    }

    .subText {
        list-style-position: inside;
        list-style-type: disc;
        text-indent: -23px;
        padding: 10px;
        line-height: 30px;
        margin-left: 35px;
        font-size: 19px;
        width: 80%;
        margin: auto;
    }

    @media screen and (max-width: 606px) {
        h1 {
            margin-top: 40px;
            font-size: 18px;
        }

        img {
            width: 24px;
        }

        .mainTextBox {
            margin-top: 34px;
            margin-left: 0;
        }

        .mainText {
            font-size: 18px;
        }

        .subTextBox {
            background-color: #f9f9f9;
        }

        .subText {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 482px) {
        .imgMargin {
            margin-bottom: 21px;
        }
    }
`;
const Notice = () => {
    return (
        <>
            <StyledNotice>
                <h1>렌탈 주문시 유의사항</h1>
                <div className="mainTextBox">
                    <img className="imgMargin" src={process.env.PUBLIC_URL + `/assets/kkuda/moneyImg.png`} />
                    <div className="mainText">선택한 약정 기간에 따라 추가 요금이 발생할 수 있어요</div>
                </div>
                <div className="subTextBox">
                    <li className="subText">
                        선택한 약정기간에 따라 <strong>월 렌탈료가 달라집니다.</strong>
                    </li>
                    <li className="subText">
                        렌탈 제품의 약정기간 전에
                        <strong>중도해약 시, 잔여 렌탈료의 30%에 해당하는 위약금 및 면제된 등록비 (15만원)가 발생하며 약정기간 종료 이후에는 제품 소유권이 고객님에게 이전</strong>됩니다.
                    </li>
                </div>
                <div className="mainTextBox">
                    <img src={process.env.PUBLIC_URL + `/assets/kkuda/truckImg.png`} />
                    <span className="mainText">각 제조/유통사별로 배송 규정이 달라요</span>
                </div>
                <li className="subText">
                    제조/유통사 정책에 따라 <strong>일부 상품은 구매자 직접수령(배송/화물), 매장방문수령, 퀵서비스 이용이 불가</strong>할 수 있습니다.
                </li>
                <li className="subText">
                    배송 확정 후 7일 까지는 고객변심으로 인한 취소 시 위약금 발생은 없습니다. 단, 각 판매 상품의 판매 정책이 우선하며 <strong>반품 회수비용이 발생할 수 있습니다.</strong>
                </li>
                <div className="mainTextBox">
                    <img src={process.env.PUBLIC_URL + `/assets/kkuda/dizzyImg.png`} />
                    <span className="mainText">양도나 재판매는 안돼요</span>
                </div>

                <li className="subText">
                    사전 협의 없이 <strong>타인에게 양도/재판매 등 렌탈 계약을 위반하는 경우 법적 조치</strong>를 받을 수 있습니다.
                </li>
            </StyledNotice>
        </>
    );
};

export default Notice;
