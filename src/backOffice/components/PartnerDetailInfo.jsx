import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { partnerDetail, deletePartnerInfo } from "../reducers/partnerSlice";

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

        background-size: cover;
        margin: 13px 42px 0 0;
    }
    .partnerInfo {
        font-size: 16px;
        font-weight: 500;
        /* line-height: 23px; */
        .name {
            font-size: 20px;
            margin-bottom: 16px;
            font-weight: 700;
            /* line-height: 29px; */
        }
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
    }
`;
const PartnerDetailDiv = styled(PageBoxDiv)`
    padding: 40px 100px;
    justify-content: flex-start;
    display: block;
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

//수정/삭제 버튼
const MypageBtnDiv = styled.div`
    position: absolute;
    top: 24px;
    right: 32px;
    button {
        width: 100px;
        height: 32px;
        color: #272727;
        border: 2px solid #d3d3d3;
        font-size: 16px;
        font-family: "Noto Sans KR";
        position: relative;
        padding-right: 25px;
        cursor: pointer;
    }
    button::after {
        display: block;
        content: "";
        width: 16px;
        height: 16px;
        position: absolute;
        right: 23px;
        top: 50%;
        transform: translateY(-50%);
    }
    .modify {
        background: #ffffff;
        margin-right: 10px;
    }
    .modify::after {
        background: url("/assets/modifyBtnIcon.png") no-repeat 0 0;
    }
    .delete {
        background: #d3d3d3;
    }
    .delete::after {
        background: url("/assets/deleteBtnIcon.png") no-repeat 0 0;
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
            }
        }
        .bar {
            width: 1px;
            height: 160px;
            border-right: 2px dashed #d3d3d3;
        }
    }
`;

export default function PartnerDetailInfo(props) {
    const { brandName } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dummyData = useSelector((it) => it.partnerInfo.partnerList);

    const detailData = dummyData.filter((it) => it.brandName == brandName)[0];

    //파트너 정보 수정
    const changeInfo = () => {
        navigate("/backoffice/partnerinquiry/partnerinput/");
        dispatch(partnerDetail(detailData));
    };

    //파트너 삭제
    const deletePartner = () => {
        const confirm = window.confirm("정말 삭제하시겠습니까?");

        if (confirm) {
            dispatch(deletePartnerInfo(detailData));
            navigate("/backoffice/partnerinquiry");
        } else {
            return;
        }
    };

    return (
        <>
            <PartnerDiv>
                <img className="img" src={detailData.brandImg}></img>
                <div className="partnerInfo">
                    <div className="name">{detailData.brandName}</div>
                    <div className="address">{detailData.address}</div>
                    <div className="owner">
                        <div className="box1">업체명</div>
                        <div>{detailData.companyName}</div>
                    </div>
                    <div className="owner">
                        <div className="box1">대표자명</div>
                        <div>{detailData.representativeName}</div>
                    </div>
                    <div className="owner">
                        <div className="box1">대표자 이메일</div>
                        <div>{detailData.representativeEmail}</div>
                    </div>
                </div>
                <MypageBtnDiv>
                    <button className="modify" onClick={changeInfo}>
                        수정
                    </button>
                    <button className="delete" onClick={deletePartner}>
                        삭제
                    </button>
                </MypageBtnDiv>
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
                            <div className="detailImfo">{detailData.businessmanName}</div>
                        </div>
                        <div>
                            <div className="detailLabel">사업자 번호</div>
                            <div className="detailImfo">{detailData.businessNum}</div>
                        </div>

                        <div>
                            <div className="detailLabel">담당자명</div>
                            <div className="detailImfo">{detailData.managerName}</div>
                        </div>
                        <div>
                            <div className="detailLabel">담당자 연락처</div>
                            <div className="detailImfo">{detailData.managerContact}</div>
                        </div>
                        <div>
                            <div className="detailLabel">담당자 이메일</div>
                            <div className="detailImfo">{detailData.managerEmail}</div>
                        </div>

                        <div>
                            <div className="detailLabel">세금계산서 이메일</div>
                            <div className="detailImfo">{detailData.representativeEmail}</div>
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
                            <div className="detailImfo">{detailData.id}</div>
                        </div>
                        <div>
                            <div className="detailLabel">비밀번호</div>
                            <div className="detailImfo">********</div>
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
                        </div>
                        <div className="bar"></div>
                        <div className="attachBox">
                            <div className="text">통장 사본</div>

                            <img className="attachImg" src={detailData.bankbookImg}></img>
                        </div>
                    </div>
                </AttachFileDiv>
            </PartnerDetailDiv>
        </>
    );
}
