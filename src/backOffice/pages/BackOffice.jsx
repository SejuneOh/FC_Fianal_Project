import React from "react";
import MasterOrder from "./MasterOrder";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import { useSelector, useDispatch } from "react-redux";

export default function BackOffice() {
    //로그인 한 user정보 확인
    const loginInfo = useSelector((state) => state.loginInfo);
    const aaa = useSelector((it) => it.partnerInfo.loginUserInfo);
    console.log("backoffice22 loginInfo", loginInfo);

    console.log("aaa", aaa);

    return (
        <>
            <Header menuState={""} />
            <h1>backoffice 메인화면</h1>
            <Link to="/backoffice/masterorder">
                <button>마스터 주문조회</button>
            </Link>
            <Link to="/backoffice/mypage">
                <button>마이페이지</button>
            </Link>
            <Link to="/backoffice/login">
                <button>로그인</button>
            </Link>
            <Link to="/backoffice/productregist">
                <button>상품등록</button>
            </Link>
            <Link to="/backoffice/productinquiry">
                <button>상품조회/수정</button>
            </Link>
            <Link to="/backoffice/productallupload">
                <button>상품일괄등록</button>
            </Link>
            <Link to="/backoffice/deliveryinquiry">
                <button>배송조회</button>
            </Link>
            <Link to="/backoffice/partnerregister">
                <button>파트너등록</button>
            </Link>
            <Link to="/backoffice/partnerinquiry">
                <button>파트너조회/수정</button>
            </Link>
            <Link to="/backoffice/servertest">
                <button>서버테스트</button>
            </Link>
            <Link to="/backoffice/customerinquiry">
                <button>고객조회</button>
            </Link>
            <Link to="/backoffice/productedit">
                <button>상품 수정</button>
            </Link>
            <Link to="/backoffice/main">
                <button>메인</button>
            </Link>
        </>
    );
}
