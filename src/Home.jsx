import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const HomeDiv = styled.div``;

const Logo = () => {
  const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebebeb;

    img {
      display: inline-block;
      width: 80px;
      margin: 10px 0 15px 40px;
    }
  `;

  return (
    <LogoDiv>
      <img src={process.env.PUBLIC_URL + `/assets/kkuda/logo.png`} alt="logo" />
    </LogoDiv>
  );
};

const Main = () => {
  const loginInfo = useSelector((state) => state.loginInfo);

  const MainDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .wrapper {
      width: 700px;
      height: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      margin: 10px 0;

      h1 {
        top: -90px;
        left: -25px;
        position: relative;
        box-sizing: border-box;
        text-align: center;
        font-size: 50px;
        font-weight: 500;
        padding: 10px auto;
        margin-bottom: 15px;
      }

      .movePage {
        padding: 10px 0;

        button {
          margin: 0 20px;
          color: white;
          background-color: #30cee6;
          width: 300px;
          height: 200px;
          border-radius: 5px;
          font-size: 35px;
          font-weight: 700;
        }

        button:hover {
          cursor: pointer;
        }
      }
    }
  `;

  return (
    <MainDiv>
      <div className="wrapper">
        <h1> 셰어라운드 X 빌려조</h1>
        <div className="movePage">
          <Link to="/kkuda">
            <button>꾸다</button>
          </Link>
          {loginInfo.authority === "master" || loginInfo.authority === "vendor" ? (
            <Link to="/backoffice">
              <button>백오피스</button>
            </Link>
          ) : (
            <Link to="/backoffice/login">
              <button>백오피스</button>
            </Link>
          )}
        </div>
      </div>
    </MainDiv>
  );
};

export default function Home() {
  return (
    <>
      <HomeDiv>
        <Logo />
        <Main />
      </HomeDiv>
    </>
  );
}
