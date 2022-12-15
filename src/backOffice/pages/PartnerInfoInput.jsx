import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import PartnerDetailInput from "../components/PartnerDetailInput";

const PartnerInfoDiv = styled.div`
  background-color: #edf0f5;
`;

export default function PartnerInfoInput() {
  // const [editBool, setEditBool] = useState(false);
  return (
    <>
      <Header menuState={"partner"} />
      <PartnerInfoDiv>
        <PageTitle title={"파트너 상세정보"} buttonBox={false} />
        <PartnerDetailInput />
        <Footer />
      </PartnerInfoDiv>
    </>
  );
}
