import React from "react";
import styled from "styled-components";
import AllUploadBox from "../components/AllUploadBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

const StyledProductAllUpload = styled.div`
    background-color: #edf0f5;
    color: #555555;
`;

const ProductAllUpload = () => {
    return (
        <>
            <Header menuState={"product"} />
            <StyledProductAllUpload>
                <PageTitle title={"상품 일괄등록"} />
                <AllUploadBox />

                <Footer />
            </StyledProductAllUpload>
        </>
    );
};

export default ProductAllUpload;
