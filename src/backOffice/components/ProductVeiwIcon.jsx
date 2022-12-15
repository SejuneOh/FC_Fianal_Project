import React from "react";
import styled from "styled-components";

const WrapperBox = styled.div`
  /* width: 1390px; */
  width: 1400px;
  height: 114px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #fff;
  margin: 0 auto 12px;
  .contentBox {
    margin: 30px 0 0 268px;
    position: relative;
    .middleBox {
      display: flex;

      .iconBox {
        display: flex;
        margin: 0 60px 26px 0;
        img {
          width: 52px;
          height: 52px;
          margin: 0 17px 0 0;
        }
        .textBox {
          width: 55px;
          font-size: 15px;
          font-weight: 400;
          color: #4d5159;
          .label {
            font-weight: 400;
            height: 23px;
            line-height: 23px;
            letter-spacing: -0.25px;
          }
          .num {
            font-size: 26px;
            font-weight: 400;
            margin-right: 5px;
          }
        }
      }
    }
  }
`;

export default function ProductVeiwIcon({data}) {
  return (
    <WrapperBox>
      <div className="contentBox">
        <div className="middleBox">
          <div className="iconBox">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Blue1.png`}
              alt="전체"
            />
            <div className="textBox">
              <div className="label">전체</div>
              <span className="num">{data.length}</span>
              <span>건</span>
            </div>
          </div>
          <div className="iconBox">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Blue2.png`}
              alt="판매대기"
            />
            <div className="textBox">
              <div className="label">판매대기</div>
              <span className="num">0</span>
              <span>건</span>
            </div>
          </div>
          <div className="iconBox">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Blue3.png`}
              alt="판매중"
            />
            <div className="textBox">
              <div className="label">판매중</div>
              <span className="num">{data.length}</span>
              <span>건</span>
            </div>
          </div>
          <div className="iconBox">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Blue4.png`}
              alt="품절"
            />
            <div className="textBox">
              <div className="label">품절</div>
              <span className="num">0</span>
              <span>건</span>
            </div>
          </div>
          <div className="iconBox">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Blue7.png`}
              alt="판매종료"
            />
            <div className="textBox">
              <div className="label">판매종료</div>
              <span className="num">0</span>
              <span>건</span>
            </div>
          </div>
        </div>
      </div>
    </WrapperBox>
  );
}
