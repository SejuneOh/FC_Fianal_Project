import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { partnerDetail } from "../reducers/partnerSlice";

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
                margin-right: 20px;
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

export default function MyPageDetail(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeInfo = () => {
        navigate("/backoffice/partnerinquiry/partnerinput/");
    };

    return (
        <>
            <PartnerDiv>
                <img
                    src="https://w.namu.la/s/ccf3f3e9f6a4313a2d77f273226030278db77dce8207454d9ceaf1f3d6f30325053683faf24a8876c080b3072e8fec93760f2ecc0d8449fdc0a8f32b76efa7d1135fa3f5e4c9c5e3364d944de694fc5085a93ebea80cdb7e23f8caa381b49e59"
                    className="img"
                ></img>
                <div className="partnerInfo">
                    <div className="name">쿠쿠</div>
                    <div className="address">서울특별시 구로그 디지털로26길 38, G-TOWER 쿠쿠 15층 - 20층</div>
                    <div className="owner">
                        <div className="box1">업체명</div>
                        <div>쿠쿠</div>
                    </div>
                    <div className="owner">
                        <div className="box1">대표자명</div>
                        <div>최덕호</div>
                    </div>
                    <div className="owner">
                        <div className="box1">대표자 이메일</div>
                        <div>jo_ami@naver.com </div>
                    </div>
                </div>
                <MypageBtnDiv>
                    <button className="modify" onClick={changeInfo}>
                        수정
                    </button>
                    <button className="delete">삭제</button>
                </MypageBtnDiv>
            </PartnerDiv>
            <PartnerDetailDiv>
                <PartnerDetailInfoDiv>
                    <div className="title">
                        <div src="" className="img"></div>
                        <div>세부정보</div>
                    </div>
                    <div className="text">
                        <div>
                            <div className="detailLabel">사업자명</div>
                            <div className="detailImfo">(주) 쿠쿠</div>
                        </div>
                        <div>
                            <div className="detailLabel">사업자 번호</div>
                            <div className="detailImfo">243-23-123492</div>
                        </div>

                        <div>
                            <div className="detailLabel">담당자명</div>
                            <div className="detailImfo">정상재</div>
                        </div>
                        <div>
                            <div className="detailLabel">담당자 연락처</div>
                            <div className="detailImfo">010-4935-4935</div>
                        </div>
                        <div>
                            <div className="detailLabel">담당자 이메일</div>
                            <div className="detailImfo">junje@naver.com</div>
                        </div>

                        <div>
                            <div className="detailLabel">세금계산서 이메일</div>
                            <div className="detailImfo">juunje@naver.com</div>
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
                            <div className="detailImfo">cucu1234</div>
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

                            <img src="https://www.happynarae.com/happy2/images/common/bg/hangbuck_busi_man_num_20.jpg" className="attachImg"></img>
                        </div>
                        <div className="bar"></div>
                        <div className="attachBox">
                            <div className="text">통장 사본</div>

                            <img src="https://help.toon.at/hc/article_attachments/360027249854/____.jpg" className="attachImg"></img>
                        </div>
                    </div>
                </AttachFileDiv>
            </PartnerDetailDiv>
        </>
    );
}
