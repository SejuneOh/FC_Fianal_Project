import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductStyled = styled.div`
.product{
  margin-top: 10px;
  cursor: pointer;  
  margin-right: 15px;

  .product_image{
    text-align: center;

    img{
        width: 378px;
    }
  }

  .product_image:hover{
    opacity: 0.8;
  }
  .product_title{
        margin: 5px 4px;
        font-size: 19px;
        color: #222;
      }
      
      .product_rental_price{
        margin: 10px 4px;
        font-size: 19px;
        color: #787878;
        font-weight: 700;
      }

      .product_total_price{
        margin: 20px 4px 0 4px;
        font-size: 19px;
        color: #787878;
        font-weight: 500;
      }

}

`

export default function Product({ product }) {
  return (
    <>
      <ProductStyled>
        {/* Link Id로  Product Id를 전달한다. */}
        <Link style={{ textDecoration: "none" }} to={`/productdetail/${product.id}`}>
          <div className='product'>
            <div className='product_image'>
              <img src={product.titleImage} alt="titleImg" />
            </div>
            <div className='product_title'>
              <span>{product.name}</span>
            </div>
            <div className='product_rental_price'>
              <span>{product.description}</span>
            </div>
            <div className='product_total_price'>
              <span>{product.originalPrice}</span>
            </div>
          </div>
        </Link>
      </ProductStyled>
    </>

  )
}
