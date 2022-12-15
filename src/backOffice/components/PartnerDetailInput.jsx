import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { changePartnerInfo } from "../reducers/partnerSlice";
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
    height: 280px;
    padding: 60px 100px;
    justify-content: flex-start;
    position: relative;

    .img {
        width: 160px;
        height: 160px;
        /* background: url(/assets/partnerLogo.png) center no-repeat; */
        background-size: cover;
        margin: 13px 42px 0 0;
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
        input {
            width: 200px;
            height: 28px;
            border: 1px solid #d2d5db;
            &.mainName {
                width: 200px;
                height: 32px;
                display: block;
                font-size: 20px;
                margin-bottom: 16px;
                font-weight: 700;
            }
            &.address {
                width: 500px;
                height: 28px;
            }
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
        margin-left: 10px;
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
                justify-content: end;
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

export default function PartnerDetailInfo() {
    const detailData = useSelector((it) => it.partnerInfo.partnerDetail);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [brandName, setBrandName] = useState();
    const [address, setAddress] = useState();
    const [companyName, setCompanyName] = useState();
    const [businessNum, setBusinessNum] = useState();
    const [representativeName, setRepresentativeName] = useState();
    const [representativeEmail, setRepresentativeEmail] = useState();
    const [businessmanName, setBusinessmanName] = useState();
    const [sellerName, setSellerName] = useState();
    const [managerName, setManagerName] = useState();
    const [managerContact, setManagerContact] = useState();
    const [managerEmail, setManagerEmail] = useState();
    const [taxBillEmail, setTaxBillEmail] = useState();

    const [todayPw, setTodayPw] = useState();
    const [newPw, setNewPw] = useState();
    const [confirmNewPw, setConfirmNewPw] = useState();

    console.log(detailData);

    console.log("todayPw", todayPw);

    const completed = () => {
        if (todayPw !== undefined) {
            if (Number(todayPw) !== detailData.password) {
                return alert("현재 비밀번호가 일치하지 않습니다.");
            }
        }

        if (newPw !== confirmNewPw) {
            return alert("새로운 비밀번호가 일치하지 않습니다.");
        }

        dispatch(
            changePartnerInfo({
                brandImg: detailData.brandImg,
                address: address ? address : detailData.address,
                companyName: companyName ? companyName : detailData.companyName,
                representativeName: representativeName ? representativeName : detailData.representativeName,
                representativeEmail: representativeEmail ? representativeEmail : detailData.representativeEmail,
                businessNum: businessNum ? businessNum : detailData.businessNum,
                businessmanName: businessmanName ? businessmanName : detailData.businessmanName,
                sellerName: sellerName ? sellerName : detailData.managerContact,
                managerName: managerName ? managerName : detailData.managerName,
                managerContact: managerContact ? managerContact : detailData.managerContact,
                managerEmail: managerEmail ? managerEmail : detailData.managerEmail,
                taxBillEmail: taxBillEmail ? taxBillEmail : detailData.taxBillEmail,
                password: newPw ? newPw : detailData.password,
            })
        );
        navigate(`/backoffice/partnerinquiry/partnerinfo/${detailData.brandName}`);
        // navigate(-1)
    };

    return (
        <>
            <PartnerDiv>
                <img className="img partnerinput" src={detailData.brandImg}></img>
                <div className="partnerInfo">
                    <input type="text" onChange={(e) => setBrandName(e.target.value)} value={detailData.brandName} className="mainName" />
                    <input type="text" onChange={(e) => setAddress(e.target.value)} defaultValue={detailData.address} className="address" />

                    <div className="owner">
                        <div className="box1">업체명</div>
                        <input type="text" onChange={(e) => setCompanyName(e.target.value)} defaultValue={detailData.companyName}></input>
                    </div>
                    <div className="owner">
                        <div className="box1">대표자명</div>
                        <input type="text" onChange={(e) => setRepresentativeName(e.target.value)} defaultValue={detailData.representativeName}></input>
                    </div>
                    <div className="owner">
                        <div className="box1">대표자 이메일</div>
                        <input type="text" onChange={(e) => setRepresentativeEmail(e.target.value)} defaultValue={detailData.representativeEmail}></input>
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
                            <input type="text" onChange={(e) => setBusinessmanName(e.target.value)} defaultValue={detailData.businessmanName}></input>
                        </div>
                        <div>
                            <div className="detailLabel">사업자 번호</div>
                            <input type="text" onChange={(e) => setBusinessNum(e.target.value)} defaultValue={detailData.businessNum}></input>
                        </div>
                        <div>
                            <div className="detailLabel">담당자명</div>
                            <input type="text" onChange={(e) => setManagerName(e.target.value)} defaultValue={detailData.managerName}></input>
                        </div>
                        <div>
                            <div className="detailLabel">담당자 연락처</div>
                            <input type="text" onChange={(e) => setManagerContact(e.target.value)} defaultValue={detailData.managerContact}></input>
                        </div>
                        <div>
                            <div className="detailLabel">담당자 이메일</div>
                            <input type="text" onChange={(e) => setManagerEmail(e.target.value)} defaultValue={detailData.managerEmail}></input>
                        </div>
                        <div>
                            <div className="detailLabel">세금계산서 이메일</div>
                            <input type="text" onChange={(e) => setTaxBillEmail(e.target.value)} defaultValue={detailData.taxBillEmail}></input>
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
                            <input type="text" value={detailData.id}></input>
                        </div>
                        <div>
                            <div className="detailLabel">현재 비밀번호</div>
                            <input onChange={(e) => setTodayPw(e.target.value)} type="password"></input>
                        </div>
                        <div>
                            <div className="detailLabel">새 비밀번호</div>
                            <input onChange={(e) => setNewPw(e.target.value)} type="password"></input>
                        </div>
                        <div>
                            <div className="detailLabel">새 비밀번호 확인</div>
                            <input onChange={(e) => setConfirmNewPw(e.target.value)} type="password"></input>
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

                            <img className="attachImg" src={detailData.businessNumImg}></img>
                            <input type="file" name="" id="businessNum" />
                        </div>
                        <div className="bar"></div>
                        <div className="attachBox">
                            <div className="text">통장 사본</div>
                            <img className="attachImg" src={detailData.bankbookImg}></img>
                            <input type="file" name="" id="bank" />
                        </div>
                    </div>
                </AttachFileDiv>
                <BtnBox>
                    <ProductPageBtn onClick={completed} className="skyBlueBtn">
                        수정완료
                    </ProductPageBtn>
                    <CancelBtn>취소</CancelBtn>
                </BtnBox>
            </PartnerDetailDiv>
        </>
    );
}
