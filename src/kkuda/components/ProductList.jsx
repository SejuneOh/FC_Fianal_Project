import React, { useEffect } from 'react'
import styled from 'styled-components';
import Product from './Product';



const ItemListStyled = styled.div`
  margin: 20px 90px;
  padding: 10px 15px;
  
  
  
  
  .products{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;
    /* 스크롤 숨기기 */
    ::-webkit-scrollbar {
    display: none;
    }
  }
  
  

  >span{
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
  
  }

`;

export default function ProuductList({ tag, prouducts }) {
  return (
    <>
      <ItemListStyled>
        <span>{tag}</span>
        <div className='products'>
          {prouducts.map((el, idx) => {
            return (
              <Product key={idx} product={el} />
            )
          })}
        </div>
      </ItemListStyled>
    </>

  )
}
