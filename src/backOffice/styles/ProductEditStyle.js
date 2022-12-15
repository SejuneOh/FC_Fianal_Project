import styled from "styled-components";



export const ProductEditDiv = styled.div`
background-color: #edf0f5;
min-width: 1440px;
font-size: 14px;
font-weight: 400;
color: #363636;

.productAddWrapper {
  width: 1393px;
  margin: 11px auto;

  .description {
    font-size: 12px;
    font-weight: 500;
    color: #4cd9ef;
  }

  .title{
    display: flex;
    align-items: center;
    width: 177px;

    span {
      margin-right: 3px;
    }
  }
}
.buttons {
  margin-top: 21.5px;
  margin-bottom: 53px;
  display: flex;
  justify-content: center;

  > button {
    margin-right: 7px;
  }
}
`;

// ProductInfo style
export const ProductInfoStyle = styled.div`
  border: 1px solid #eaecee;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 11px;
`;

//ProductTitleDiv stlye
export const TitleDivStyle = styled.div`
  border-bottom: 1px solid #eaecee;

  .container {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 11px auto;

    .iconWrapper {
      display: flex;
      align-items: center;

      h2 {
        margin-right: 8px;
        font-size: 15px;
        font-weight: 500;
      }
    }

    .openbtn {
      display: flex;
      align-items: center;

      .arrowbtn {
        width: 33px;
        height: 33px;
        border: 1px solid #9199ab;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .upIcon {
          background: url(/assets/upperArrow.png) center no-repeat;
          background-size: cover;
          width: 22px;
          height: 10.95px;
        }

        .downIcon {
          background: url(/assets/downArrow.png) center no-repeat;
          background-size: cover;
          width: 22px;
          height: 10.95px;
        }
      }
      p {
        color: #8a8e96;
        margin-right: 10px;
      }
    }
  }
`;

// 상품 이름 
export const ProductNmStyle = styled.div`
  height: 110px;
  /* height가있어야 에니메이션이 적용된다. */
  transition: height 0.5s, opacity 0.2s;

  &.close {
    height: 0px;
    overflow: hidden;
    opacity: 0;
  }

  .productNmWrapper {
    width: 1327px;
    margin: 40px auto;

    .inputDiv {
      display: flex;
      margin-bottom: 10px;
      text-align: center;
      align-items: center;
      border: 1px solid #dee0e4;

      > input {
        width: 100%;
        height: 33px;
        background-color: #f8f9fd;
        border-top: none;
        border-left: none;
        border-bottom: none;
        border-right: 1px solid #dee0e4;
        box-sizing: border-box;
      }

      > p {
        display: block;
        line-height: 32px;
        height: 33px;
        padding: 0 9px;
        background-color: #f8f9fd;

        > span {
          color: #4cd9ef;
        }
      }
    }
  }
`;

// 상품 브랜드
export const ProductBrandDiv = styled.div`
  height: 140px;
  box-sizing: border-box;
  transition: height 0.5s, opacity 0.4s;

  &.close {
    height: 0;
    overflow: hidden;
    opacity: 0;
  }
  .infoWrapper {
    width: 1324px;
    margin: 22px auto;

    .info {
      height: 102px;
      display: flex;

      .title {
        display: flex;
        align-items: center;
        width: 177px;

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

// 상품 가격
export const PriceInfoDiv = styled.div`
  height: 184px;
  transition: height 0.5s, opacity 0.2s;

  &.close {
    height: 0;
    opacity: 0;
    overflow: hidden;
  }

  .priceWrapper{
    
    width: 1324px;
    height: 140px;
    margin: 22px auto;
    

    .price{
      display:  flex;
      align-items: center;
      height: 70px;
      border-bottom: 1px solid #EAECEE;

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

    .rentalMonth{
      display:  flex;
      align-items: center;
      height: 70px;

      >ul{
        display: flex;

        >li{
          width: 75px;
          height: 37px;
          border: 1px solid #DADDE1;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #575A62;
          cursor: pointer;
          /* 드래그 방지 */
          -ms-user-select: none; 
          -moz-user-select: -moz-none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          user-select: none;

          &.clicked{
            background-color: #4CD9EF;
            color: #fff;
            border: 1px solid #2CB8E3;
          }
        }
      }
    }

    

    
  }
`;

//  상품  이미지 
export const ProductAddImgDiv = styled.div`
  width: 1324px;
  height: 483px;
  margin: 22px auto;
  transition: height 0.5s, opacity 0.4s;

  &.close {
    margin: 0 auto;
    height: 0px;
    overflow: hidden;
    opacity: 0;
  }

  .mainImg {
    height: 212px;
    display: flex;
    border-bottom: 1px solid #eaecee;

    .mainAddImg {
      margin: 18px 0 10px 0;
    }
  }

  .subImg {
    height: 271px;
    display: flex;

    .subAddImg {
      margin: 18px 0 10px 0;
      display: flex;
      overflow: auto ;
      > div {
        margin-right: 10px;
      }
    }

    .changeBtn {
      width: 85px;
      height: 32px;
      background-color: #fff;
      color: black;
      border: 1px solid #dadde1;
      margin-bottom: 10px;
    }
  }

  .addImgTitle {
    width: 177px;
    height: 100%;
    display: flex;
    align-items: center;

    > span {
      :first-child {
        margin-right: 6px;
      }

      :last-child {
        font-size: 10px;
        > span {
          color: #4cd9ef;
        }
      }
    }
  }
`;

// 상품 상세 설명
export const DescriptionDiv = styled.div`
  height: 482px;
  transition: height 0.5s, opacity 0.3s;

  &.close{
    overflow: hidden;
    height: 0;
    opacity: 0;
  }
`

//상품 조회/수정/등록 페이지 버튼
export const ProductPageBtn = styled.button`
    width: 128px;
    height: 40px;
    color: #fff;
    border: 1px solid #747B8E;
    background-color: #8A91A1;
    cursor: pointer;

    &.skyBlueBtn{
      color: #fff;
      background-color: #4CD9EF;
      border: 1px solid #2CB8E3;
    }

    &.whiteBtn{
      color: #676767;
      background: #FFFFFF;
      border: 1px solid #DADDE1;
    }
`

//  필수항목 스타일 div
export const DotDiv = styled.div`
  background-color: #ff545c;
  width: 6px;
  height: 6px;
  border-radius: 12px;
  margin-right: 8px;
`

//  도움말 표시 icon
export const HellperIcon = styled.div`
  background: url(/assets/helper.png) center no-repeat;
  background-size: cover;
  width: 14.25px;
  height: 14.25px;
`;

// 상품 이미지 박스 컴포넌트
export const AddImgBoxStyle = styled.div`
  position:  relative;

  .imgWrapper{
    position:  relative;

    .addFile{
    display: inline-block;
    width: 132px;
    height: 132px;
    border: 1px dotted #E3E7ED;
    background: url(/assets/plus.png) center no-repeat;
    cursor: pointer;
    position: relative;
    
      
      &.off{
        opacity: 0;
      }
    }

    .imgBox{
      border: 1px solid #E3E7ED;
      width: 132px;
      height: 132px;
      position: absolute;
      top: 0;
      left: 0;

      &.off{
        display: none;
      }

      .productImg{
        box-sizing: border-box;
        height: 132px;
        width: 132px;
        text-align: center;
        
        .thumbnailImg{
          width: 100%;
          height: 100%;
        }
      }

      .productOption{
        height: 43px;
        width: 132px;
        top: 89px;  
        background-color:  #000;
        opacity:  .3;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        >div{
          width: 14.37px;
          height: 14.37px;
          cursor: pointer;
        }

        .search{
          background: url(/assets/search.png) center no-repeat;
          background-size: cover;
        }
        .write{
          background: url(/assets/write.png) center no-repeat;
          background-size: cover;
        }
        .cancle{
          background: url(/assets/cancel.png) center no-repeat;
          background-size: cover;
        }
      }
    }

  }
`;


