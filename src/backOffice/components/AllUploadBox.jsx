import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import AllUploadTableBox from "./AllUploadTableBox";
import axios from "axios";
import { Link } from "react-router-dom";
// import readXlsxFile from "read-excel-file";
import * as xlsx from "xlsx";
import { useState } from "react";
import TablePager from "./TablePager";
import { useDispatch, useSelector } from "react-redux";
import { allUpload } from "../reducers/productList";

const StyledUploadBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    border: 1px solid #d8dce5;
    width: 1391px;
    margin: auto;
    margin-bottom: 11px;
    background-color: white;

    overflow: hidden;
    text-overflow: ellipsis;
`;

const TableBoxTop = styled.div`
    margin-bottom: 16px;
    width: 1324px;
    display: flex;
    justify-content: space-between;
    margin-top: 19px;
    font-size: 15px;

    button {
        cursor: pointer;
        color: #575a62;
        background-color: white;
        border: 1px solid #e0e4e8;
        padding: 7px 11px 7px 11px;
        /* font-size: 13px; */
    }

    .failText {
        color: red;
    }

    .rightBtn {
        margin-left: 3px;
    }

    .totalNum {
        font-weight: 400;
        color: #000;
        margin-right: 16px;
        line-height: 37px;
    }
    .customFileUpload {
        width: 100px;
        height: 35px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        display: inline-block;
        cursor: pointer;
        color: #575a62;
        border: 1px solid #e0e4e8;
        padding: 7px 11px 7px 11px;
        font-size: 13px;
        margin-left: 3px;
        text-align: center;
        position: relative;
        top: -1px;
        line-height: 17px;
    }
    input[type="file"] {
        opacity: 0;
        height: 0;
        width: 0;
    }
`;

const TableContent = styled.div`
    width: 1324px;
    min-height: 571px;
    height: 100%;
    font-size: 14px;
    /* background-color: red; */
    position: relative;
    border: 1px solid #d8dce5;

    table,
    tr,
    th {
        border: 1px solid #d8dce5;
        text-align: center;
        vertical-align: middle;
    }
    tr,
    th {
        height: 39px;
    }
    .tableItem {
        background-color: #ebedf2;
    }
    .one {
        width: 113px;
    }
    .two {
        width: 220px;
    }
    .three {
        width: 109px;
    }
    .four {
        width: 109px;
    }
    .five {
        width: 109px;
    }
    .six {
        width: 443px;
    }
    .seven {
        width: 110px;
    }
    .eight {
        width: 110px;
    }
`;

const TableBottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 12px 0 61px 0;
    width: 1324px;
    line-height: 110%;

    button {
        cursor: pointer;
        color: #575a62;
        padding: 7px 11px 7px 11px;
        background-color: white;
        border: 1px solid #e0e4e8;
    }

    .explanation {
        font-size: 12px;
        color: #4cd9ef;
    }
`;

const EmptyfileBox = styled.div`
    /* width: 1324px; */
    height: 176px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -88px 0 0 -126px;
    .ph {
        width: 65px;
        height: 65px;
        margin: 0 auto 15px;
        background: url(/assets/ph-icon.png) center no-repeat;
        background-size: cover;
    }
    .text {
        width: 159px;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        margin: 0 auto 25px;
    }
    .blueBtn {
        padding: 9px 18px 9px 18px;
        background-color: #4cd9ef;
        border: 1px solid #d8dce5;
        width: 181px;
        box-sizing: border-box;
        color: #fff;
        display: flex;
        line-height: 19px;
        margin: auto;
        cursor: pointer;
        font-size: 17px;
        .uploadImg {
            width: 19px;
            height: 19px;
            background: url(/assets/whiteupload.png) center no-repeat;
            background-size: cover;
            margin: 0 10px 0 0;
        }
        .txt {
            /* width: 107px; */
        }
    }
    input[type="file"] {
        opacity: 0;
        height: 0;
    }
`;

const AllUploadBox = () => {
    const [dummy, setDummy] = useState([]);
    const dispatch = useDispatch();
    const list = useSelector((it) => it.productList.productInfo);

    console.log("list", list);

    let dummyData = [];

    // ?????? ???????????? ??????
    function fileDown() {
        axios({
            url: "http://localhost:3000/exProduct.xlsx", // ?????? ???????????? ?????? URL
            method: "GET", // ?????? 'POST'
            responseType: "blob", // ?????? ????????? ?????? ??????
        }).then((response) => {
            console.log(response);
            console.log(response.data);
            // ????????????(???????????? ?????? ?????? ?????????) ?????? ???????????? ???????????? blob?????? ??????
            const blob = new Blob([response.data]);

            // blob??? ????????? ?????? URL??? ???????????????.
            const fileObjectUrl = window.URL.createObjectURL(blob);

            // blob ?????? URL??? ????????? ????????? ????????????.
            const link = document.createElement("a");
            link.href = fileObjectUrl;
            link.style.display = "none";

            // ???????????? ????????? ????????? ?????? ??????
            link.download = "????????????.xlsx";

            document.body.appendChild(link);
            link.click();
            link.remove();
        });
    }

    // ???????????? ?????????
    const excelUpload = (e) => {
        console.log("?????????");
        let input = e.target;
        let reader = new FileReader();
        reader.onload = function () {
            let data = reader.result;
            let workBook = xlsx.read(data, { type: "binary" });
            console.log("workBook", workBook);
            workBook.SheetNames.forEach(function (sheetName) {
                let rows = xlsx.utils.sheet_to_json(workBook.Sheets[sheetName]);

                rows.map((item) => dummyData.push(item));
                setDummy([...rows]);
                console.log(rows);
                rows.map((it) => {
                    return dispatch(allUpload(it));
                });
            });
        };
        reader.readAsBinaryString(input.files[0]);
    };

    console.log();

    //????????? ??? ????????? ???
    const [limit, setLimit] = useState(14);

    //?????? ????????? ??????
    const [page, setPage] = useState(1);

    //??? ???????????? ??????
    const offset = (page - 1) * limit;

    const pageNum = Math.ceil(dummy.length / limit);

    return (
        <StyledUploadBox>
            <TableBoxTop>
                {/* <div> */}
                <span className="totalNum">
                    ??? {dummy.length}??? &#40;??????: {dummy.length} / <span className="failText">??????: 0</span>&#41;
                </span>
                {/* <button>????????????????????????</button> */}
                {/* </div> */}
                <div>
                    {/* <button className="rightBtn">??????????????????</button> */}
                    <button className="rightBtn" onClick={fileDown}>
                        ?????? ????????????
                    </button>
                    <label for="fileUpload" className="customFileUpload">
                        {/* <button className="rightBtn"> */}
                        ?????? ?????????
                        {/* </button> */}
                    </label>
                    <input type="file" name="" id="fileUpload" onChange={excelUpload} accept=".xls,.xlsx" />
                </div>
            </TableBoxTop>
            <TableContent>
                <table>
                    <tbody>
                        <tr>
                            <th className="tableItem one">????????????</th>
                            <th className="tableItem two">????????????</th>
                            <th className="tableItem three">????????????</th>
                            <th className="tableItem four">????????????</th>
                            <th className="tableItem five">????????????</th>
                            <th className="tableItem six">?????????</th>
                            <th className="tableItem seven">?????????</th>
                            <th className="tableItem eight">??????</th>
                        </tr>
                        {dummy.length === 0 ? (
                            <EmptyfileBox>
                                <div className="ph" />
                                <div className="text">
                                    ???????????? ???????????? ????????????.
                                    <br />
                                    ?????? ????????? ????????? ????????????.
                                </div>
                                <label className="blueBtn" for="fileUpload">
                                    <div className="uploadImg" />
                                    <div className="txt">???????????? ?????????</div>
                                </label>
                                <input type="file" id="fileUpload" onChange={excelUpload} accept=".xls,.xlsx" />
                            </EmptyfileBox>
                        ) : (
                            console.log(dummyData)
                        )}

                        {dummy
                            .map((item, idx) => {
                                return <AllUploadTableBox key={idx} item={item} />;
                            })
                            .slice(offset, offset + limit)}
                    </tbody>
                </table>
            </TableContent>
            <TableBottom>
                <div className="explanation">?????? ???????????? ????????? ?????? 500????????? ????????? ?????? ??? ????????????.</div>
                <div>
                    <Link to="/backoffice/productinquiry">
                        <button>??????????????????/??????</button>
                    </Link>
                </div>
            </TableBottom>
            <TablePager setPage={setPage} page={page} pageNum={pageNum} />
        </StyledUploadBox>
    );
};

export default AllUploadBox;
