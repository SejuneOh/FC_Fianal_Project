import React, { useState } from "react";
import styled from "styled-components";
import { ProductPageBtn } from "../styles/ButtonsStyle";

// 공통
const PageBoxDiv = styled.div`
  font-family: "Noto Sans KR";
  width: 1400px;
  margin: 0 auto 20px;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 29px;
  color: #000;
  display: flex;
  border: 1px solid #e3e7ed;
`;

const PartnerDiv = styled(PageBoxDiv)`
  font-family: "Noto Sans KR";
  width: 1400px;
  margin: 0 auto 20px;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 29px;
  color: #000;
  display: flex;
  border: 1px solid #e3e7ed;
  height: 320px;
  padding: 60px 118px;
  justify-content: flex-start;
  position: relative;

  .img {
    width: 160px;
    height: 160px;
    background: url(/assets/partnerLogo.png) center no-repeat;
    background-size: cover;
    margin: 20px 42px 0 0;
  }
  .partnerInfo {
    font-size: 16px;
    font-weight: 500;
    /* line-height: 23px; */

    .address {
      margin-bottom: 8px;
    }
    .owner {
      display: flex;

      .box1 {
        color: #949494;
        width: 100px;
        margin-bottom: 8px;
      }
    }
    .mainName {
      width: 200px;
      height: 32px;
      display: block;
      font-size: 20px;
      margin-bottom: 16px;
      font-weight: 700;
    }

    .address {
      width: 500px;
      height: 28px;
    }
  }
`;
const PartnerDetailDiv = styled(PageBoxDiv)`
  padding: 40px 100px;
  justify-content: flex-start;
  display: block;
  input {
    border: 1px solid #d2d5db;
    width: 200px;
    height: 28px;
  }
`;

const PartnerDetailInfoDiv = styled.div`
  box-sizing: border-box;
  padding: 40px 0 80px;
  border-bottom: 1px solid #d4d5da;
  .title {
    display: flex;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 31px;
    .img {
      width: 16px;
      height: 13px;
      background: url(/assets/check.png) center no-repeat;
      background-size: cover;
      margin: 9px 15px 0 8px;
    }
  }
  .text {
    div {
      height: 23px;
      display: flex;
      font-size: 16px;
      line-height: 23px;
      margin-bottom: 20px;
      .detailLabel {
        font-weight: 500;
        color: #949494;
        width: 122px;
        height: 23px;
        margin: 0 32px 0 0;
      }
      .detailImfo {
      }
    }
  }
`;

const AttachFileDiv = styled.div`
  width: 900px;
  height: 220px;
  padding: 40px 0 80px;
  .title {
    display: flex;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 31px;
    .img {
      width: 16px;
      height: 13px;
      background: url(/assets/check.png) center no-repeat;
      background-size: cover;
      margin: 9px 15px 0 8px;
    }
  }
  .box {
    display: flex;
    .attachBox {
      display: flex;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      color: #949494;

      .text {
        margin: 14px 28px 0 52px;
      }
      .attachImg {
        width: 160px;
        height: 160px;
        background: url(/assets/imgAdd.png) center no-repeat;
        background-size: cover;
        margin: 0 117px 0 0;
        cursor: pointer;
      }
    }
    .bar {
      width: 1px;
      height: 160px;
      border-right: 2px dashed #d3d3d3;
    }
  }
  input[type="file"] {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const BtnBox = styled.div`
  text-align: center;
  width: 1400px;
  height: 120px;
  border-top: 1px solid #e3e7ed;
  margin-left: -100px;
`;

const CancelBtn = styled(ProductPageBtn)`
  width: 80px;
  background: #dfe3ea;
  border: 1px solid #acafb6;
  color: #7c7f86;
  margin: 40px 0 0 8px;
`;

export default function MypageInput() {
  const [partnerInfo, setPartnerInfo] = useState({
    id: "coway123",
    name: "Coway",
    onwer: "이해선",
    businessName: "이지수",
    saler: "장희연",
    chargename: "장희연",
    phoneNum: "010-2411-3418",
    mail: "leesun99@gmail.com",
    address: "서울특별시 구로구 디지털로26길 38, G-TOWER 코웨이 15층~20층",
  });

  return (
    <>
      <PartnerDiv>
        <div className="img"></div>
        <div className="partnerInfo">
          <div className="mainName">{partnerInfo.name}</div>
          <div className="address">{partnerInfo.address}</div>

          <div className="owner">
            <div className="box1">업체명</div>
            <div>{partnerInfo.name}</div>
          </div>
          <div className="owner">
            <div className="box1">대표자명</div>
            <div>{partnerInfo.onwer}</div>
          </div>
          <div className="owner">
            <div className="box1">대표자 이메일</div>
            <div>{partnerInfo.mail}</div>
          </div>
        </div>
      </PartnerDiv>
      <PartnerDetailDiv>
        <PartnerDetailInfoDiv>
          <div className="title">
            <div className="img"></div>
            <div>세부정보</div>
          </div>
          <div className="text">
            <div>
              <div className="detailLabel">사업자명</div>
              <input type="text" value={partnerInfo.businessName}></input>
            </div>
            <div>
              <div className="detailLabel">판매자명</div>
              <input type="text" value={partnerInfo.saler}></input>
            </div>
            <div>
              <div className="detailLabel">담당자명</div>
              <input type="text" value={partnerInfo.chargename}></input>
            </div>
            <div>
              <div className="detailLabel">전화번호</div>
              <input type="text" value={partnerInfo.phoneNum}></input>
            </div>
            <div>
              <div className="detailLabel">이메일</div>
              <input type="text" value={partnerInfo.mail}></input>
            </div>
          </div>
        </PartnerDetailInfoDiv>
        <PartnerDetailInfoDiv>
          <div className="title">
            <div className="img"></div>
            <div>계정 정보</div>
          </div>
          <div className="text">
            <div>
              <div className="detailLabel">아이디</div>
              <input type="text" value={partnerInfo.id}></input>
            </div>
            <div>
              <div className="detailLabel">현재 비밀번호</div>
              <input type="password"></input>
            </div>
            <div>
              <div className="detailLabel">새 비밀번호</div>
              <input type="password"></input>
            </div>
            <div>
              <div className="detailLabel">새 비밀번호 확인</div>
              <input type="password"></input>
            </div>
          </div>
        </PartnerDetailInfoDiv>
        <AttachFileDiv>
          <div className="title">
            <div className="img"></div>
            <div>첨부파일</div>
          </div>
          <div className="box">
            <div className="attachBox">
              <div className="text">사업자 등록 번호</div>
              <label for="businessNum" className="attachImg"></label>
              <input type="file" name="" id="businessNum" />
            </div>
            <div className="bar"></div>
            <div className="attachBox">
              <div className="text">통장 사본</div>
              <label for="bank" className="attachImg"></label>
              <input type="file" name="" id="bank" />
            </div>
          </div>
        </AttachFileDiv>
        <BtnBox>
          <ProductPageBtn className="skyBlueBtn">수정완료</ProductPageBtn>
          <CancelBtn>취소</CancelBtn>
        </BtnBox>
      </PartnerDetailDiv>
    </>
  );
}
