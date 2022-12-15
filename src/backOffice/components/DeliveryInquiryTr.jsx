import React from "react";
import { useState } from "react";
import { StatusBtn } from "../styles/ButtonsStyle";

/* 배송조회 페이지 - 결과값 있을 때 tr */
function DeliveryInquiryTr({ setChecked, checked, data, checkAll }) {

    const handleCheck = (event) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            //input check박스의 체크드여부 값가져옴
            updatedList.push(parseInt(event.target.value));
            console.log("add", event.target.value);
        } else {
            updatedList.splice(updatedList.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    return (
        <tr>
            <td>
                {checkAll ?
                    (<fieldset className="trCheck">
                        <input type="checkbox" 
                            key={data.orderNum}
                            id={`trCheck${data.orderNum}`}
                            defaultChecked={true}
                            disabled={checkAll}
                        ></input>
                        <label htmlFor={`trCheck${data.orderNum}`}></label>
                    </fieldset>)
                    :
                    (<fieldset className="trCheck">
                        <input onClick={handleCheck} type="checkbox" value={data.orderNum} id={`trCheck${data.orderNum}`}
                        defaultChecked={false}
                        ></input>
                        <label htmlFor={`trCheck${data.orderNum}`}></label>
                    </fieldset>
                    )
                }
            </td>
            <td>{data.orderNum}</td>
            <td>{data.brandName}</td>
            <td>{data.orderProduct}</td>
            <td>{data.productCode}</td>
            <td>
                <select defaultValue={data.courier}>
                    <option value="한진택배">한진택배</option>
                    <option value="대한통운">대한통운</option>
                    <option value="우체국택배">우체국택배</option>
                    <option value="로젠택배">로젠택배</option>
                </select>
            </td>
            <td>
                <input type="text" defaultValue={data.invoiceNumber}></input>
            </td>
            <td>
                <StatusBtn className={data.paymentStatus === "결제완료" ? "payDone" : "payCancel"}>{data.paymentStatus === "결제완료" ? "결제완료" : "결제취소"}</StatusBtn>
            </td>
            <td>
                <StatusBtn className={data.deliveryStatus === "배송준비중" ? "deliverReady" : data.deliveryStatus === "배송중" ? "delivering" : "deliverDone"}>
                    {data.deliveryStatus === "배송준비중" ? "배송준비중" : data.deliveryStatus === "배송중" ? "배송중" : "배송완료"}
                </StatusBtn>
            </td>
            <td>{data.orderDay}</td>
            <td>-</td>
        </tr>
    );
}

/* 배송조회 페이지 - 결과값 없을 때 tr */
function DeliveryInquiryTr_noResult() {
    return (
        <tr className="noResult">
            <td colSpan="11">데이터가 존재하지 않습니다.</td>
        </tr>
    );
}

export { DeliveryInquiryTr, DeliveryInquiryTr_noResult };
