import React from "react";
import styled from "styled-components";

const StyledOrderStep = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 50px;

        margin-right: 19.69px;
    }

    span {
        font-size: 0.9em;
        margin-right: 5px;
    }

    .arrow {
        width: 30px;
        margin-right: 22.63px;
    }
`;

const Step = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const OrderStep = () => {
    return (
        <StyledOrderStep>
            {/* <h1>주문 / 결제</h1> */}
            <Step>
                <img src={process.env.PUBLIC_URL + `/assets/kkuda/step1.png`} alt="step1" />
                <span>주문정보 입력</span>
                <img className="arrow" src={process.env.PUBLIC_URL + `/assets/kkuda/arrow.png`} alt="arrow" />
                <img src={process.env.PUBLIC_URL + `/assets/kkuda/grayStep2.png`} alt="grayStep2" />
                <span>주문정보 확인</span>
                <img className="arrow" src={process.env.PUBLIC_URL + `/assets/kkuda/arrow.png`} alt="arrow" />
                <img src={process.env.PUBLIC_URL + `/assets/kkuda/grayStep3.png`} alt="grayStep3" />
                <span>결제정보 입력</span>
                <img className="arrow" src={process.env.PUBLIC_URL + `/assets/kkuda/arrow.png`} alt="arrow" />
                <img src={process.env.PUBLIC_URL + `/assets/kkuda/grayStep4.png`} alt="grayStep4" />
                <span>주문 완료</span>
            </Step>
        </StyledOrderStep>
    );
};

export default OrderStep;
