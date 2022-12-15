import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import PartnerDetailInfo from "../components/PartnerDetailInfo";
import { useState } from "react";
import MypageInput from "../components/MypageInput";

const MypageDiv = styled.div`
  background-color: #edf0f5;
  min-width: 1440px;

  .wrapper {
    width: 1400px;
    margin: 0 auto;
  }

  .hey {
    height: 700px;
    display: flex;
  }
  .attachSection {
    width: 1400px;
    height: 400px;
    margin-top: 20px;
    background: #ffffff;
    margin-bottom: 20px;
    padding-top: 40px;
    padding-left: 88.17px;
    box-sizing: border-box;
  }
`;

export default function MypageEdit() {
  return (
    <>
      <Header menuState={"product"} />
      <MypageDiv>
        <PageTitle title={"마이페이지"} buttonBox={false} />
        <MypageInput />
        <Footer />
      </MypageDiv>
    </>
  );
}
