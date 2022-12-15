import React, { useState, useEffect } from "react";
import { ProductModifyBtn, ProductCopyBtn, ProductDetailBtn } from "../styles/ButtonsStyle";
import { useNavigate } from "react-router-dom";

/* 상품 조회/수정 페이지 - 결과값 있을 때 tr */
function ProductInquiryTr({ checkAll, data, checked, setChecked, setOpenPopUp }) {
  const navigate = useNavigate();
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList.push(parseInt(event.target.value));
      console.log("add", event.target.value);
    } else {
      updatedList.splice(updatedList.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // 상품 수정 페이지 이동
  const onProductEditClick = () => {
    alert('상품 수정 페이지로 이동');
    navigate(`/backoffice/productedit/${data.productNumber}`)
  }

  return (
    <>
      <tr>
        <td>
          {checkAll ? 
            (<fieldset className="trCheck">
              <input type="checkbox" 
                id={data.productNumber}
                defaultChecked={true}
                disabled={checkAll}
              />
              <label htmlFor={data.productNumber}></label>
            </fieldset>)
            :
            (<fieldset className="trCheck">
              <input type="checkbox"
                key={data.productNumber}
                id={data.productNumber}
                onChange={handleCheck}
                value={data.productNumber}
                defaultChecked={false}
              />
              <label htmlFor={data.productNumber}></label>
            </fieldset>)
          }
        </td>
        <td>
          <ProductModifyBtn onClick={onProductEditClick}>수정</ProductModifyBtn>
        </td>
        <td>
          {data.productNumber}
        </td>
        <td>{data.name}</td>
        <td>{data.rentalMonths.map((i) => "" + `${i} `)}</td>
        <td>{data.originalPrice}</td>
        <td>{data.brandName}</td>
        <td>{data.titleImage}</td>
        <td>{data.prices[0].month > 0 ? "렌탈" : "일시불"} </td>
        <td>
          <ProductDetailBtn
            onClick={(e) => {
              e.preventDefault();
              setOpenPopUp(true);
            }}
          >
            상세설명
          </ProductDetailBtn>
        </td>
      </tr>
    </>
  );
}

/* 상품 조회/수정 페이지 - 결과값 없을 때 tr */
function ProductInquiryTr_noResult() {
  return (
    <tr>
      <td>결과값 없음...</td>
    </tr>
  );
}

export { ProductInquiryTr, ProductInquiryTr_noResult };