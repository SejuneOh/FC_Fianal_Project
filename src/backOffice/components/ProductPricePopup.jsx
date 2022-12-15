import React, { useState } from "react";
import styled from "styled-components";
import { ProductPageBtn } from "../styles/ButtonsStyle";
import { Body, PopUpWrapperBox} from './ProductVeiwPopup';
import { useDispatch } from "react-redux";
import { changePrice } from "../reducers/productList";

export default function ProductPricePopup({setOpenPopUp, checked, setChecked, setSelect}) {
  const brandStyle = {height:"279px"};
  const brandStyle2 = {paddingTop:"0px"};
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handlePrice = (e) => {
    e.preventDefault();
    setOpenPopUp(false);
    if (checked) {
        for (const data in checked) {
            dispatch(changePrice({checked: checked[data], price: price}));
        }
        setChecked("");
        alert("변경되었습니다");
    };
    window.location.replace("/backoffice/productinquiry");
  }

  return (
    <Body>
      <PopUpWrapperBox style={brandStyle}>
        <div className="header">
          <div className="title">판매가 변경</div>
          <div className="close" onClick={(e) => {
                e.preventDefault();
                setOpenPopUp(false);
                setPrice("");
                setSelect("일괄변경");
          }}></div>
        </div>
        <div className="body" style={brandStyle2}>
          <PriceInfoDiv2 className="">
            <div className="priceWrapper">
              <div className="price">
                <div className="title">
                  <span>판매가</span>
                  <DotDiv2 />
                </div>
                <div className="inputWrapper">
                  <input type="text" onChange={(e) => setPrice(e.target.value)} value={price}/>
                  <div className="cancelImage">
                    <img
                      src={process.env.PUBLIC_URL + `/assets/cancelLight.png`}
                      onClick={() => setPrice("")}
                    />
                  </div>
                </div>
                <p className="won">원</p>
                <p>{price}원</p>
              </div>
            </div>
          </PriceInfoDiv2>
          <div className="btnSeconBox">
            <PopupBtn2 className="skyBlueBtn" 
              onClick={handlePrice}
            >변경</PopupBtn2>
            <PopupBtn2 className="whiteBtn" onClick={(e)=>{
                e.preventDefault();
                setOpenPopUp(false);
                setPrice("");
                setSelect("일괄변경");
            }}>닫기</PopupBtn2>
          </div>
        </div>
      </PopUpWrapperBox>
    </Body>
  );
}

const PriceInfoDiv2 = styled.div`
  height: 145px;
.priceWrapper{
  
  width: 911px;
  height: 110px;
  margin: 22px auto;
  

  .price{
    display:  flex;
    align-items: center;
    height: 110px;
    border: 1px solid #EAECEE;

    .title {
        display: flex;
        align-items: center;
        width: 177px;
        height: 23px;
        margin-left: 29px;
        
        span {
          margin-right: 3px;
        }
      }

    .inputWrapper{
      display: flex;
      align-items: center;
      border: 1px solid #4CD9EF;
      
      
      >input{
        height: 34px;
        width: 152px;
        border: none;

        :focus{
          outline: none;
        }
      }
      .cancelImage{
        width: 18px;
        height: 18px;
        background-color: #D3D5DB;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 32px;
        margin: 8px;
        
        >img{
          width: 9.43px;
          height: 9.43px;
        }
      }
    }

    .won{
      height: 35px;
      width: 34px;
      line-height: 32px;
      text-align: center;
      background-color: #f8f9fd;
      border: 1px solid #eaecee;
      margin-right: 10px;
    }
  }
}
`;

export const PopupBtn2 = styled(ProductPageBtn)`
  margin-left: 8px;
  font-size: 16px;
`;

export const DotDiv2 = styled.div`
  background-color: #ff545c;
  width: 6px;
  height: 6px;
  border-radius: 12px;
  margin-right: 8px;
`;


