import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/loginSlice";
import { partnerLogout } from "../reducers/partnerSlice";

//styled-components

//Link 태그 decoration 없애기
const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const HeaderBox = styled.div`
  width: 100%;
  background-color: #202526;
`;

//윗줄
const FirstBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1440px;
  height: 50px;
  margin: auto;
  padding: 13px 22px 13px 21px;
  background-color: #202526;
  border-bottom: 1px solid #202526;
  box-sizing: border-box;
  text-decoration: none;
  text-decoration: none;

  /* 왼쪽 메인메뉴 */
  .leftBox {
    display: flex;
    /* width: 357px; */
  }

  /* 오른쪽 사용자 메뉴 */
  .rightBox {
    display: flex;
    justify-content: flex-end;
    height: 20px;
    color: #fff;
    .user {
      display: flex;
      font-size: 12px;
      line-height: 17px;
      margin-top: 3px;
      .name {
        font-weight: 900;
      }
      .nim {
        margin: 0 7px 0 4px;
        font-weight: 500;
      }
    }
  }
`;

// h1 묶음
const HeaderH1 = styled.div`
  display: flex;
  margin-right: 9px;
`;
//
const Logo = styled.div`
  background: url(/assets/favicon.png) center no-repeat;
  background-size: cover;
  height: 24px;
  width: 24px;
  margin-right: 10px;
  border-radius: 7px;
`;

const H1Text = styled.div`
  background: url(/assets/backOfficetitle.png) center no-repeat;
  background-size: cover;
  width: 115px;
  height: 17px;
  margin: 3px 0;
`;

const Menu = styled.div`
  font-size: 16px;
  color: #8b9092;
  font-weight: 500;
  font-family: "Noto Sans KR";
  line-height: 23px;
  cursor: pointer;
  margin: 0 9px;
  position: relative;
  ::before {
    content: "";
    width: 1px;
    height: 13px;
    background-color: #1b1f22;
    left: -9px;
    margin: 5px 9px 5px 0;
    position: absolute;
  }
`;

const MemberMenu = styled(Menu)`
  font-size: 12px;
  font-weight: 500;
  height: 17px;
  margin: 0 7px 1px 8px;
  color: #fff;
  ::before {
    height: 9px;
    background-color: #4f4f54;
    top: 2px;
    left: -8px;
    margin: 5px 7px 5px 0;
  }
`;
const AdvBtn = styled.div`
  color: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #37404d;
  font-size: 11px;
  width: 61px;
  height: 20px;
  position: relative;
  border: 1px solid #212628;
  box-sizing: border-box;
  border-radius: 3px;
  margin: 1px 8px 3px;
  ::before {
    content: "";
    width: 1px;
    height: 9px;
    background-color: #4f4f54;
    left: -8px;
    margin: 5px 7px 5px 0;
    position: absolute;
  }
  ::after {
    content: "";
    width: 1px;
    height: 9px;
    background-color: #4f4f54;
    right: -16px;
    margin: 5px 7px 5px 0;
    position: absolute;
  }
`;

// 아랫줄
const SecBox = styled.div`
  width: 1440px;
  height: 40px;
  display: flex;
  margin: auto;
  padding: 11px 0 12px 21px;
  background-color: #202526;
  box-sizing: border-box;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #31363a;
  text-decoration: none;
`;
const SubMenu = styled.div`
  font-size: 12px;
  font-weight: 700;
  height: 17px;
  line-height: 17px;
  color: #fff;
  margin-right: 12px;
  position: relative;
  &.selectTextColor {
    color: #4cd9ef;
  }
  &.nonSelectTextColor {
    color: #fff;
  }
`;
const SubBarMenu = styled(SubMenu)`
  font-size: 12px;
  font-weight: 700;
  height: 17px;
  margin: 0 12px;
  line-height: 17px;
  color: #fff;
  position: relative;
  .selectTextColor {
    color: #4cd9ef;
  }
  .nonSelectTextColor {
    color: #fff;
  }
  ::before {
    content: "";
    height: 10px;
    width: 1px;
    position: absolute;
    background-color: #1b1f22;
    top: 3px;
    left: -24px;
    margin: 0 12px;
  }
`;

export default function Header({ menuState }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.loginInfo);
  const loginUserInfo = useSelector((state) => state.partnerInfo.loginUserInfo[0]);

  const [mainMenu, setMainMenu] = useState(menuState);
  const [url, setUrl] = useState("");
  // url을 통한 색상 변화와 표현 변화
  useEffect(() => {
    let urlArr = document.location.pathname.split("/").filter((x) => x !== "");
    setUrl(urlArr[1]);
  }, [url]);

  // 처음 페이지 들어왔을때 서브메뉴바 나타내기
  useEffect(() => {
    if (loginInfo.id === "" || loginInfo.id === undefined) {
      setMainMenu("");
    } else {
      if (!mainMenu) {
        if (loginInfo.authority === "master") {
          setMainMenu("product");
        } else {
          setMainMenu("order");
        }
      }
    }
  }, []);

  return (
    <HeaderBox>
      <FirstBox>
        <div className="leftBox">
          <StyledLink to="/backOffice">
            <HeaderH1>
              <Logo />
              <H1Text />
            </HeaderH1>
          </StyledLink>
          {loginInfo.authority === "master" ? (
            <>
              <Menu onClick={() => setMainMenu("product")}>상품</Menu>
              <Menu onClick={() => setMainMenu("order")}>주문</Menu>
              <Menu onClick={() => setMainMenu("customer")}>고객</Menu>
              <Menu onClick={() => setMainMenu("partner")}>파트너</Menu>
            </>
          ) : loginInfo.authority === "vendor" ? (
            <Menu onClick={() => setMainMenu("order")}>주문</Menu>
          ) : null}
        </div>

        <div className="rightBox">
          {!!!loginInfo.id ? (
            <>
              <StyledLink to="/backoffice/login">
                <MemberMenu>로그인</MemberMenu>
              </StyledLink>
              <StyledLink to="/backoffice/signup">
                <MemberMenu>회원가입</MemberMenu>
              </StyledLink>
            </>
          ) : (
            <>
              <div className="user">
                <div className="name">{loginInfo.authority}</div>
                <div className="nim">님</div>
              </div>
              {loginInfo.authority === "vendor" ? (
                <StyledLink to="/backoffice/mypage">
                  <MemberMenu>마이페이지</MemberMenu>
                </StyledLink>
              ) : null}
              <MemberMenu
                onClick={() => {
                  dispatch(logout());
                  dispatch(partnerLogout(""));
                  navigate("/backoffice/login");
                }}
              >
                로그아웃
              </MemberMenu>
              <MemberMenu>도움말</MemberMenu>
            </>
          )}
          <AdvBtn>상담하기</AdvBtn>
        </div>
      </FirstBox>
      <SecBox>
        {/* 상품 */}
        {mainMenu === "product" || "" ? (
          <>
            <StyledLink to="/backoffice/productinquiry">
              <SubMenu className={url === "productinquiry" ? "selectTextColor" : "nonselectTextColor"}>상품 조회/수정</SubMenu>
            </StyledLink>
            <StyledLink to="/backoffice/productregist">
              <SubBarMenu className={url === "productregist" ? "selectTextColor" : "nonselectTextColor"}>상품 등록</SubBarMenu>
            </StyledLink>
            <StyledLink to="/backoffice/productallupload">
              <SubBarMenu className={url === "productallupload" ? "selectTextColor" : "nonselectTextColor"}>상품 일괄등록</SubBarMenu>
            </StyledLink>
          </>
        ) : null}
        {/*주문*/}
        {mainMenu === "order" ? (
          <>
            <StyledLink to="/backoffice/masterorder">
              <SubMenu className={url === "masterorder" ? "selectTextColor" : "nonselectTextColor"}>주문 조회</SubMenu>
            </StyledLink>
            <StyledLink to="/backoffice/deliveryinquiry">
              <SubBarMenu className={url === "deliveryinquiry" ? "selectTextColor" : "nonselectTextColor"}>배송 조회</SubBarMenu>
            </StyledLink>
          </>
        ) : null}
        {/* 고객 */}
        {mainMenu === "customer" ? (
          <StyledLink to="/backoffice/customerinquiry">
            <SubMenu className={url === "customerinquiry" ? "selectTextColor" : "nonselectTextColor"}>고객 조회</SubMenu>
          </StyledLink>
        ) : null}
        {/* 파트너 */}
        {mainMenu === "partner" ? (
          <>
            <StyledLink to="/backoffice/partnerinquiry">
              <SubMenu className={url === "partnerinquiry" ? "selectTextColor" : "nonselectTextColor"}>파트너 조회/수정</SubMenu>
            </StyledLink>
            <StyledLink to="/backoffice/partnerregister">
              <SubBarMenu className={url === "partnerregister" ? "selectTextColor" : "nonselectTextColor"}>파트너 등록</SubBarMenu>
            </StyledLink>
          </>
        ) : null}
      </SecBox>
    </HeaderBox>
  );
}
