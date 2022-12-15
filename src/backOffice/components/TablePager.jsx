import { useState } from "react";
import { useEffect } from "react";

import styled from "styled-components";

/* 테이블 pager 버튼 */
const TablePagerDiv = styled.div`
    margin: 20px 0 26px;
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pagerBtn {
        padding: 8px 13px;
        font-weight: 700;
        font-size: 12px;
        line-height: 1.41;
        color: #363636;
        cursor: pointer;
        border: 1px solid transparent;
        margin: 0 3px;

        //호버시
        &:hover {
            background: #4cd9ef;
            border: 1px solid #4cd9ef;
            color: #ffffff;
        }
        //활성화시
        &:visited {
            background: #4cd9ef;
            border: 1px solid #4cd9ef;
            color: #ffffff;
        }
        //이전, 다음 버튼
        &.pagination {
            color: rgba(0, 0, 0, 0.5);
            position: relative;
            padding: 8px 0;
        }
        //이전, 다음 버튼 옆 화살표
        &.pagination::after {
            display: block;
            width: 8px;
            height: 21px;
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: url(../assets/paginationArrow.png) no-repeat center / 100%;
        }
        &.prevBtn {
            margin-right: 13px;
        }
        &.prevBtn::after {
            left: -10px;
            transform: translateY(-40%) rotate(-180deg);
        }
        &.nextBtn {
            margin-left: 13px;
        }
        &.nextBtn::after {
            right: -10px;
        }
        //이전, 다음 버튼 호버시
        &.pagination:hover {
            background: transparent;
            border: 1px solid transparent;
        }
    }
    .activeBtn {
        background: #4cd9ef;
        border: 1px solid #4cd9ef;
        color: #ffffff;
    }
`;

export default function TablePager({ pageNum, setPage, page }) {
    const [pageArr, setPageArr] = useState();

    const arr = [];

    useEffect(() => {
        for (let i = 1; i <= pageNum; i++) {
            arr.push(i);
        }
        setPageArr(arr);
    }, [pageNum]);

    const selectPage = (page) => {
        setPage(page);
    };

    return (
        <TablePagerDiv className="tablePager">
            <ul>
                <li className="pagerBtn pagination prevBtn" onClick={() => page > 1 && setPage(page - 1)}>
                    이전
                </li>
                {pageArr
                    ? pageArr.map((page) => (
                          <button onClick={() => selectPage(page)} key={page} className="pagerBtn">
                              {page}
                          </button>
                      ))
                    : ""}
                <li className="pagerBtn pagination nextBtn" onClick={() => pageArr.length > page && setPage(page + 1)}>
                    다음
                </li>
            </ul>
        </TablePagerDiv>
    );
}
