import React from 'react'
import styled from 'styled-components'



export default function Button({ bgColor = "#30CEE6", size = "large", text = "" }) {

  let width = size === "large" ? 218 : 103;
  let height = size === "large" ? 81 : 93;


  const ButtonStyled = styled.a`
  text-decoration: none;
  display: inline-block;
  background-color: ${bgColor};
  width: ${size === "large" ? "218px" : "103px"};
  height: ${size === "large" ? "81px" : "39px"};
  border-radius: 100px;
  color: #fff;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${size === "large" ? "22px" : "16px"};;
`

  return (
    <ButtonStyled>
      {text}
    </ButtonStyled>
  )
}
