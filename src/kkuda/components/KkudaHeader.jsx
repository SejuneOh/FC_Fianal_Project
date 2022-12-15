import React from 'react'
import styled from 'styled-components';



const HeaderDiv = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: #fff;

  .wrapper{
    /* border: 1px solid blue; */
    display : flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 90px;
    margin-right: 90px;
    

    img:nth-child(2){
      margin-left: 30px;
    }
  }
  
`

export default function KkudaHeader() {
  return (
    <>
      <HeaderDiv>
        <div className='wrapper'>
          <img src={process.env.PUBLIC_URL + `/assets/kkuda/menu_icon.png`} alt="menu_icon" />
          <img src={process.env.PUBLIC_URL + `/assets/kkuda/kkuda_title.png`} alt="header_title" />
          <img src={process.env.PUBLIC_URL + `/assets/kkuda/header_icon.png`} alt="header_icon" />
        </div>
      </HeaderDiv>
    </>
  )
}