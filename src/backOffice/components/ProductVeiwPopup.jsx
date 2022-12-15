import React from "react";
import styled from "styled-components";
import DetailExplain from "./DetailExplain";
import { ProductPageBtn } from "../styles/ButtonsStyle";

export const Body = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  /* display: ; */
  position: fixed;
  z-index:1;
  top: 0;
  left: 0;
`;

export const PopUpWrapperBox = styled.div`
  width: 950px;
  height: 746px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -373px;
  margin-left: -475px;
  background-color: #fff;

  .header {
    box-sizing: border-box;
    background-color: #4cd9ef;
    width: 950px;
    height: 53px;
    font-size: 18px;
    font-weight: 350;
    color: #fff;
    padding: 19px;
    display: flex;
    justify-content: space-between;
    .close {
      width: 16px;
      height: 16px;
      opacity: 0.8;
      cursor: pointer;
      :before,
      :after {
        content: "";
        height: 20px;
        width: 2px;
        position: absolute;
        right: 22px;
        background-color: #fff;
      }
      :before {
        transform: rotate(45deg);
      }
      :after {
        transform: rotate(-45deg);
      }
    }
  }
  .body {
    padding: 19px;
    height: 693px;
    box-sizing: border-box;
    .btnSeconBox {
      width: 272px;
      margin: auto;
    }
  }
`;
const PopupBtn = styled(ProductPageBtn)`
  margin-left: 8px;
  font-size: 16px;
`;

export default function ProductVeiwPopup({setOpenPopUp}) {
  return (
    <Body>
      <PopUpWrapperBox>
        <div className="header">
          <div className="title">상세설명 변경</div>
          <div className="close" onClick={(e)=>{
                e.preventDefault();
                setOpenPopUp(false);
          }}></div>
        </div>
        <div className="body">
          <DetailExplain btnBoxBoolean={true} titleBoolean={true} />
          <div className="btnSeconBox">
            <PopupBtn className="skyBlueBtn" onClick={(e)=>{
              e.preventDefault();
              setOpenPopUp(false);
              alert("변경되었습니다");
            }}>변경</PopupBtn>
            <PopupBtn className="whiteBtn" onClick={(e)=>{
                e.preventDefault();
                setOpenPopUp(false);
            }}>닫기</PopupBtn>
          </div>
        </div>
      </PopUpWrapperBox>
    </Body>
  );
}
