import React, {useState} from "react";
import styled from "styled-components";
import { ProductPageBtn } from "../styles/ButtonsStyle";
import { Body, PopUpWrapperBox} from './ProductVeiwPopup';
import { useDispatch } from "react-redux";
import { changeBrand } from "../reducers/productList";

const PopupBtn2 = styled(ProductPageBtn)`
  margin-left: 8px;
  font-size: 16px;
`;

const ProductInfoDiv2 = styled.div`
  height: 145px;
  box-sizing: border-box;
  transition: height 0.5s, opacity 0.4s;

  .infoWrapper {
    width: 912px;
    height: 129px;
    margin: 22px auto;
    border: 1px solid #E3E7ED;

    .info {
      height: 102px;
      display: flex;

      .title {
        display: flex;
        align-items: center;
        width: 177px;
        height: 23px;
        margin-top: 24px;
        margin-left: 29px;
        
        span {
          margin-right: 3px;
        }
      }

      .brandCotents {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .brandNmOption {
          display: flex;
          align-items: center;

          p {
            line-height: 23px;
            height: 23px;
          }
        }

        .brandNm {
          margin-top: 15px;
          margin-bottom: 12px;

          input {
            width: 300px;
            height: 34px;
            box-sizing: border-box;
            background-color: #f8f9fd;
            border: 1px solid #dee0e4;
            outline: none;
          }

          button {
            height: 34px;
            background-color: #7a8093;
            color: #fff;
            border: none;
            font-size: 12px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export const DotDiv2 = styled.div`
  background-color: #ff545c;
  width: 6px;
  height: 6px;
  border-radius: 12px;
  margin-right: 8px;
`;

export default function ProductBrandPopup({setOpenPopUp, checked, setChecked, setSelect}) {
  console.log("brandchecked",checked);
  const brandStyle = {height:"279px"};
  const brandStyle2 = {paddingTop:"0px"};
  const [brand, setBrand] = useState("");
  const [self, onSelf] = useState(false);
  const dispatch = useDispatch();

  const inputChange = (e) => {
    onSelf(prev => !prev)
    if (e.target.checked) {
      setBrand("?????? ?????????");
    } else {
      setBrand(""); 
    }
  }

  const brandBtnClick = (e) => {
    e.preventDefault();
    setBrand("");
  }
  
  const brandInputChanged = (e) => {
    e.preventDefault();
    setBrand(e.target.value);
  }
  console.log("brand",brand);

  const handleBrand = (e) => {
    e.preventDefault();
    setOpenPopUp(false);
    if (checked) {
        for (const data in checked) {
            dispatch(changeBrand({checked: checked[data], brand: brand}));
        }
        setChecked("");
        alert("?????????????????????");
    };
    window.location.replace("/backoffice/productinquiry");
  }

  return (
    <Body>
      <PopUpWrapperBox style={brandStyle}>
        <div className="header">
          <div className="title">???????????? ??????</div>
          <div className="close" onClick={(e)=>{
                e.preventDefault();
                setOpenPopUp(false);
                setBrand("")
                setSelect("????????????");
          }}></div>
        </div>
        <div className="body" style={brandStyle2}>
          <ProductInfoDiv2 className="">
            <div className="infoWrapper">
              <div className="info">
                <div className="title">
                  <span>?????????</span>
                  <DotDiv2 />
                </div>
                <div className="brandCotents">
                  <div className="brandNm">
                    <input type="text" placeholder="???????????? ??????????????????." onChange={brandInputChanged} value={brand}></input>
                    <button onClick={brandBtnClick}>????????????</button>
                  </div>
                  <div className="brandNmOption">
                    <input type="checkbox" onChange={inputChange}></input>
                    <p>???????????? ??????</p>
                  </div>
                </div>
              </div>
            </div>
          </ProductInfoDiv2>
          <div className="btnSeconBox">
            <PopupBtn2 className="skyBlueBtn" 
              onClick={handleBrand}  
            >??????</PopupBtn2>
            <PopupBtn2 className="whiteBtn" onClick={(e)=>{
                e.preventDefault();
                setOpenPopUp(false);
                setBrand("");
                setSelect("????????????");
            }}>??????</PopupBtn2>
          </div>
        </div>
      </PopUpWrapperBox>
    </Body>
  );
}



