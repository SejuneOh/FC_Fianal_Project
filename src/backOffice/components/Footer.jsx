import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
    width:100%;
    height:60px;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EDF0F5;
    padding-top: 20px;
    p{
      font-size: 13px;
      font-weight: 700;
      line-height: 1.46;
      color:#8B9092;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
      width:100px;
      margin:0 4px;
      }
    }
    
`

export default function Footer() {
  return (
    <FooterDiv>
      <p>&copy;<img src={`${process.env.PUBLIC_URL}/assets/ci.png`} alt="SHAREROUND" />All rights reserved.</p>
    </FooterDiv>
  )
}
