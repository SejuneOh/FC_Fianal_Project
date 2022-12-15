import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginDiv from "../styles/LoginStyle";
import { useSelector, useDispatch } from "react-redux";
import { setLoginInfo } from "../reducers/loginSlice";
import { login } from "../reducers/partnerSlice";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginUserInfo = useSelector((state) => state.partnerInfo.loginUserInfo[0]);
    console.log(loginUserInfo);

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isRemember, setIsRemember] = useState(false);
    let authority;

    //자동 로그인 설정 함수
    const setStorage = () => {
        localStorage.setItem("loginRemember", JSON.stringify({ id: id, password: password }));
        const res = localStorage.getItem("loginRemember");
        const objRes = JSON.parse(res);
        console.log("로그인 한 뒤 objRes", objRes);
    };
    //자동 로그인 해제 함수
    const removeStorage = () => {
        localStorage.removeItem("loginRemember");
    };

    //판매자 로그인 함수
    const vendorLoginFunc = async () => {
        const body = {
            email: id,
            password: password,
            remember: true,
        };
        try {
            const res = await axios.post("/api/vendor/auth", body);
            if (res.status == 200) {
                setErrorMsg("");
                authority = "vendor";
                dispatch(setLoginInfo({ id, password, remember, authority, brandName: res.data.result.brandName }));
                navigate("/backoffice");
                //자동로그인
                isRemember ? setStorage() : removeStorage();
            } else {
                setErrorMsg(`아이디 또는 비밀번호를 잘못 입력했습니다. `);
            }
        } catch {
            console.log("vendor error");
        }
    };

    //마스터 로그인 함수
    const adminLoginFunc = async () => {
        const body = {
            name: id,
            password: password,
            remember: true,
        };
        try {
            const res = await axios.post("/api/master/auth", body);
            console.log("admin res : ", res);
            if (res.status == 200) {
                setErrorMsg("");
                authority = "master";
                dispatch(setLoginInfo({ id, password, remember, authority }));
                navigate("/backoffice");
                //자동로그인
                isRemember ? setStorage() : removeStorage();
            } else {
                setErrorMsg("admin 비밀번호를 확인해주세요.");
            }
        } catch {
            console.log("admin error");
        }
    };

    //로그인 버튼 클릭 함수
    const loginFunc = async (e) => {
        // dispatch(setLoginInfo(id));
        // e.preventDefault();
        const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        //공백검사
        if (!id || !password) {
            setErrorMsg("아이디와 비밀번호를 모두 작성해주세요.");
        } else {
            //id 값에 따른 판매자/마스터 함수 분기
            if (id.match(emailRegExp)) {
                vendorLoginFunc();
            } else if (id == "admin") {
                adminLoginFunc();
            } else {
                setErrorMsg(" 아이디 또는 비밀번호를 잘못 입력했습니다.");
            }
        }
    };
    const storageLogin = () => {
        const res = localStorage.getItem("loginRemember");
        const objRes = JSON.parse(res);
        const inserId = objRes.id;
        setId(inserId);
        console.log("inserId", inserId);
    };
    useEffect(() => {
        const res = localStorage.getItem("loginRemember");
        const objRes = JSON.parse(res);
        console.log("objRes", objRes);
        if (!objRes) {
            localStorage.setItem("loginRemember", JSON.stringify({ id: "", password: "" }));
        } else {
            loginFunc();
            storageLogin();
        }
    }, []);

    return (
        <LoginDiv>
            <section className="contentSpace">
                <div className="logoArea">
                    <h1 className="logo">
                        <img src={`${process.env.PUBLIC_URL}/assets/loginCi.png`} alt="꾸다관리시스템" />
                    </h1>
                </div>
                <div className="formArea">
                    <form>
                        <fieldset className="idField">
                            <p>아이디</p>
                            <input type="text" value={id} onChange={(e) => setId(e.target.value.trim())} />
                        </fieldset>
                        <fieldset className="pwField">
                            <p>비밀번호</p>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value.trim())} />
                        </fieldset>
                        <fieldset className="chkField">
                            <input
                                type="checkbox"
                                id="loginHolding"
                                onClick={(e) => {
                                    setIsRemember(!isRemember);
                                    console.log("remember", isRemember);
                                }}
                            ></input>
                            <label htmlFor="loginHolding">
                                <i></i> <span>아이디 저장</span>
                            </label>
                            <Link to="/backoffice/signup">회원가입하기</Link>
                        </fieldset>
                        <p className="errorMsg">{errorMsg}</p>
                        <button type="submit" onClick={(e) => {
                            e.preventDefault();
                            loginFunc();
                        }}>
                            로그인
                        </button>
                    </form>
                </div>
            </section>
        </LoginDiv>
    );
}
