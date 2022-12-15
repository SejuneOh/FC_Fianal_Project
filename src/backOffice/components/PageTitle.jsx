import React from 'react'
import styled from 'styled-components'

const PageTitleDiv = styled.div`
    width:100%;
    height:60px;
    margin: 0 auto 11px;
    background-color: #fff;
    box-sizing:border-box;
    font-size: 20px;
    line-height:1.45;
    color:#000;
    .wrapper{
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1400px;
      margin: 0 auto;
      height:100%;
      padding-left:34px;
      box-sizing: border-box;
    }
    h1{
        font-size:24px;
        font-weight:500;
        line-height:1.45;
    }
`

//마이페이지 버튼
const MypageBtnDiv = styled.div`
    button{
        width:100px;
        height:32px;
        color:#272727;
        border: 2px solid #D3D3D3;
        font-size: 16px;
        font-family: 'Noto Sans KR';
        position: relative;
        padding-right:25px;
        cursor: pointer;
    }
    button::after{
        display: block;
        content: "";
        width:16px;
        height:16px;
        position: absolute;
        right:23px;
        top:50%;
        transform: translateY(-50%);
    }
    .modify{
        background: #FFFFFF;
        margin-right:10px;
    }
    .modify::after{
        background:url('/assets/modifyBtnIcon.png') no-repeat 0 0 ;
    }
    .delete{
        background: #D3D3D3;
    }
    .delete::after{
        background:url('/assets/deleteBtnIcon.png') no-repeat 0 0 ;
    }
`

export {PageTitleDiv, MypageBtnDiv};

export default function PageTitle({title, buttonBox}) {
  return (
    <PageTitleDiv>
      <div className="wrapper">
        <h1>{title}</h1>
          {
            //buttonBox true 일 때 - 수정/삭제 버튼 영역 추가
            buttonBox && 
            <MypageBtnDiv>
              <button className='modify'>수정</button>
              <button className='delete'>삭제</button>
            </MypageBtnDiv>
          }
      </div>
        
    </PageTitleDiv>
  )
}
