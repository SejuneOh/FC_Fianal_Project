import React from "react";
import styled from "styled-components";

const StyledBox = styled.tr`
  overflow: hidden;
  text-overflow: ellipsis;
  .status {
    color: red;
  }

  .productName {
    text-align: left;
    padding-left: 5px;
  }

  .price,
  .stock {
    text-align: right;
    padding-right: 5px;
  }
`;
const AllUploadTableBox = ({ item }) => {
  return (
    <>
      <StyledBox>
        <th className="status">성공</th>
        <th className="Reason">-</th>
        <th className="productNum">{item.상품고유번호}</th>
        <th className="salesStatus">{item.상태}</th>
        <th className="category">{item.카테고리}</th>
        <th className="productName">{item.이름}</th>
        <th className="price">{item["정가 (소비자가)"]}</th>
        <th className="stock">{item.eight}</th>
      </StyledBox>
    </>
  );
};

export default AllUploadTableBox;
