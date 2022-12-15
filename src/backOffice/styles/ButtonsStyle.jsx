import styled from "styled-components"

/* 마스터 주문조회 페이지 - 결제/배송상태 뱃지 */
const StatusBtn = styled.button`
    padding:5px 12px;
    color:#8E9197;
    font-size: 12px;
    //결제취소
    &.payCancel{ 
        background: #D2D5DB;
        border: 1px solid #8E9197;
        color:#8E9197;
    }
    //결제완료
    &.payDone{
        background: #4DB341;
        border: 1px solid #339528;
        color:#fff;
    }
    //배송준비
    &.deliverReady{ 
        background: #FFFFFF;
        border: 1px solid #D2D5DB;
        color:#8E9197;
    } 
    //베송중
    &.delivering{
        background: #FFFFFF;
        border: 1px solid #2CB8E3;
        color:#2CB8E3;
    }
    //배송완료
    &.deliverDone{
        background: #2CB8E3;
        border: 1px solid #2F84C2;
        color:#fff;
    }
`

/* 상품 조회/수정 페이지 -  상품목록 table 버튼 */
//수정
const ProductModifyBtn = styled.button`
    padding:0 8.5px;
    height:31px;
    background: #4CD9EF;
    border: 1px solid #2CB8E3;
    color:#fff;
    font-weight: 500;
    font-size: 16px;
    cursor:pointer;
`
//복사
const ProductCopyBtn = styled(ProductModifyBtn)``
//설명
const ProductDetailBtn = styled(ProductModifyBtn)`
    padding: 0 12px;
`

//상품 조회/수정/등록 페이지 버튼
const ProductPageBtn = styled.button`
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

export { StatusBtn, ProductModifyBtn, ProductCopyBtn, ProductDetailBtn, ProductPageBtn };