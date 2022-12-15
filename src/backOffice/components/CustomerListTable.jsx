import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductDetailBtn } from "../styles/ButtonsStyle";
import CustomerCase from "./CustomerCase";

const CustomerListTable = ({ data, num }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/backoffice/masterorder/masterdetailorder/${data.orderNum}`);
    };
    return (
        <tbody>
            <tr>
                <td>{num}</td>
                <td>{data.ordererName}</td>
                <td>{data.ordererPhoneNum}</td>
                <td>{data.ordererEmail}</td>
                <td>{data.orderDay}</td>
                <td>{data.orderProduct}</td>
                <td>{data.orderNum}</td>
                <td>
                    <CustomerCase type={data.orderCase} />
                </td>
                <td>
                    <ProductDetailBtn onClick={handleClick}>자세히</ProductDetailBtn>
                </td>
            </tr>
        </tbody>
    );
};

export default CustomerListTable;
