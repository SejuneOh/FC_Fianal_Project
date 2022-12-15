import styled from "styled-components";

/* 마스터 주문조회 페이지 - MasterOrder */
const MasterOrderListDiv = styled.div`
    width: 1400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 0 20px 32px;
    box-sizing: border-box;
    //리스트 헤더
    .listHeader {
        width: 1360px;
        height: 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            font-size: 16px;
            line-height: 1.43;
            color: #000;
            #listSumNum {
                color: #4cd9ef;
            }
        }
        .selectForm {
            select {
                padding: 0 90px 0 6px;
                height: 38px;
                color: #4d5159;
                font-size: 14px;
                line-height: 38px;
                padding-left: 11px;
                box-sizing: border-box;
                border: 1px solid #d2d5db;
                cursor: pointer;
            }
            select:focus {
                outline: none;
            }
        }
    }
    //리스트 테이블
    .listTable {
        display: block;
        min-height: 363px;
        border: 1px solid #d3d8e1;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        table-layout: fixed;
        thead {
            box-sizing: border-box;
            background-color: #f8f9fd;
            border-bottom: 1px solid #d3d8e1;
            height: 48px;
            th {
                width: 123.63px;
                line-height: 47px;
                font-size: 14px;
                border-right: 1px solid #d3d8e1;
            }
            th:last-of-type {
                border-right: none;
            }
        }
        tbody {
            overflow: hidden;
            table-layout: fixed;
            tr {
                height: 48px;
                line-height: 47px;
                border-bottom: 1px solid #e0e4e8;
                text-align: center;
            }
            td {
                height: 100%;
                width: 9.09%;
                min-width: 9.09%;
                max-width: 9.09%;
                font-size: 14px;
                border-right: 1px solid #e8ebf0;
                color: #8c8c8f;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                table-layout: fixed;
            }
            td:nth-of-type(2) {
                padding: 0 10px;
                box-sizing: border-box;
            }
            td:last-of-type {
                border-right: none;
            }
            tr.noResult {
                height: 315px;
                line-height: 315px;
            }
            tr.noResult td {
                color: #ccc;
            }
            .brandName {
                color: #000;
            }
            .itemName,
            .itemcode,
            .orderDate {
                color: #545454;
            }
            .orderDate {
                font-size: 14px;
            }
        }
    }
    //테이블 pager
    .tablePager {
        margin: 20px 0 0;
    }
`;
/* 상품조회/수정 페이지 - ProductInquiry */
const ProductInquiryListDiv = styled(MasterOrderListDiv)`
    padding: 0 0 32px;
    width: 1400px;
    text-align: center;
    //리스트 헤더
    .listHeader {
        width: 100%;
        box-sizing: border-box;
        height: 80px;
        border-bottom: 1px solid #dadde1;
        padding: 0 40px;
    }
    .listHeader .selectForm {
        height: 35px;
        select,
        button {
            height: 100%;
            display: inline-block;
            vertical-align: top;
            position: relative;
            color: #575a62;
            font-size: 15px;
            line-height: 1.13;
            box-sizing: border-box;
            border: 1px solid #e0e4e8;
            letter-spacing: -1px;
            font-weight: 400;
            background-color: #fff;
            text-align: left;
            font-weight: 400;
            cursor: pointer;
        }
        select:nth-of-type(1) {
            padding: 0 43px 0 6px;
        }
        select:nth-of-type(2) {
            padding: 0 17px 0 6px;
            margin: 0 8px 0 16px;
        }
        select:focus {
            outline: none;
        }
        button {
            padding: 0 11px 0 31px;
        }
        button.downloadExcel::after {
            position: absolute;
            display: block;
            width: 11px;
            height: 11px;
            content: "";
            top: 11px;
            left: 11px;
            background: url("../assets/excelIcon.png") 0 0 / cover;
        }
    }
    //리스트 필터
    .listFilter {
        padding: 22px 40px 0;
        text-align: left;
        .alertMsg {
            font-weight: 500;
            font-size: 16px;
            line-height: 1.43;
            color: #ff9934;
            margin: 10px 0;
        }
    }
    .listFilter .selectForm {
        width: 100%;
        height: 35px;
        position: relative;
        box-sizing: border-box;
        select,
        button {
            height: 100%;
            display: inline-block;
            vertical-align: top;
            position: relative;
            color: #575a62;
            font-size: 15px;
            line-height: 1.13;
            box-sizing: border-box;
            border: 1px solid #e0e4e8;
            letter-spacing: -1px;
            font-weight: 400;
            background-color: #fff;
            text-align: left;
            font-weight: 400;
            cursor: pointer;
        }
        select {
            padding: 0 15px 0 11px;
            margin-right: 5px;
            border-radius: none;
        }
        select:last-of-type {
            padding: 0 63px 0 11px;
            margin-right: 0;
        }
        select:focus {
            outline: none;
        }
        section option {
            border-radius: none;
            height: 36px;
        }
        button {
            padding: 0 11px;
        }
        .submitBtn {
            position: absolute;
            top: 0;
            right: 0;
            margin-right: 0;
            background: #4cd9ef;
            border: 1px solid #2cb8e3;
            font-weight: 500;
            font-size: 14px;
            line-height: 1.42;
            color: #ffffff;
        }
        .vertical {
            display: inline-block;
            width: 1px;
            width: 1px;
            height: 17.5px;
            background: #dadde1;
            margin: 9px 16px 0 16px;
        }
    }
    //리스트 테이블
    .listTable {
        padding: 0 40px;
        border: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .listTable table {
        border: 1px solid #d3d8e1;
        display: block;
        table-layout: fixed;
        min-height: 364px;
        font-size: 14px;
    }
    .listTable table input[type="checkbox"] {
        display: none;
        table-layout: fixed;
    }
    input[type="checkbox"] + label {
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #e0e4e8;
        background: #fff;
        box-sizing: border-box;
        cursor: pointer;
    }
    input[type="checkbox"]:checked + label {
        background: #4cd9ef;
        position: relative;
        ::after {
            position: absolute;
            display: block;
            content: "";
            width: 14px;
            height: 14px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url("../assets/checkWhite.png") no-repeat 0 0;
        }
    }
    .listTable table thead {
        width: 100%;
        height: 44px;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.25px;
        color: #555;
        th {
            line-height: 44px;
            font-size: 14px;
        }
        th:nth-of-type(1) {
            width: 38px;
            position: relative;
            .allCheck {
                width: 22px;
                height: 22px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        th:nth-of-type(2) {
            width: 68px;
        }
        th:nth-of-type(3) {
            width: 110px;
        }
        th:nth-of-type(4) {
            width: 179px;
        }
        th:nth-of-type(5) {
            width: 213px;
        }
        th:nth-of-type(6) {
            width: 117px;
        }
        th:nth-of-type(7) {
            width: 141px;
        }
        th:nth-of-type(8) {
            width: 167px;
        }
        th:nth-of-type(9) {
            width: 105px;
        }
        th:nth-of-type(10) {
            width: 151px;
        }
    }
    .listTable table tbody {
        width: 100%;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.25px;
        color: #555;
        overflow: hidden;
        table-layout: fixed;
        tr {
            height: 44px;
            line-height: 44px;
            table-layout: fixed;
            cursor: pointer;
            :hover {
                background-color: #f0fcfd;
            }
        }
        td {
            height: 100%;
            line-height: 44px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            table-layout: fixed;
            font-size: 14px;
            color: #555555;
        }
        td:nth-of-type(1) {
            width: 38px;
            position: relative;
            .trCheck {
                width: 22px;
                height: 22px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        td:nth-of-type(2) {
            width: 68px;
        }
        td:nth-of-type(3) {
            width: 110px;
        }
        td:nth-of-type(4) {
            width: 179px;
            min-width: 179px;
            max-width: 179px;
            a {
                color: #2cb8e3;
            }
            padding: 0 10px;
            box-sizing: border-box;
        }
        td:nth-of-type(5) {
            width: 213px;
            min-width: 213px;
            max-width: 213px;
            padding: 0 10px;
        }
        td:nth-of-type(6) {
            width: 117px;
        }
        td:nth-of-type(7) {
            width: 141px;
        }
        td:nth-of-type(8) {
            width: 167px;
        }
        td:nth-of-type(9) {
            width: 105px;
        }
        td:nth-of-type(10) {
            width: 151px;
        }
    }
    .tablePager {
        margin: 20px 0 26px;
    }
    .skyBlueBtn {
        margin: 0 auto;
    }
    //noResult
    .listTable table tbody tr.noResult {
        border-bottom: none;
        :hover {
            background: none;
        }
    }
    .listTable table tbody tr.noResult td:nth-of-type(1) {
        line-height: 315px;
    }
`;
/* 고객조회 페이지 -  CustomerInquiry */
const CustomerInquiryListDiv = styled(MasterOrderListDiv)`
    padding: 0 0 32px;
    width: 1400px;
    text-align: center;
    //리스트 헤더
    .listHeader {
        width: 100%;
        box-sizing: border-box;
        height: 80px;
        border-bottom: 1px solid #dadde1;
        padding: 0 40px;
        margin-bottom: 22px;

        .title {
            margin-left: 8px;
        }

        .productInquiry {
            margin-right: 8px;
        }
    }
    .listHeader .selectForm {
        height: 35px;
        select,
        button {
            height: 100%;
            display: inline-block;
            vertical-align: top;
            position: relative;
            color: #575a62;
            font-size: 15px;
            line-height: 1.13;
            box-sizing: border-box;
            border: 1px solid #e0e4e8;
            letter-spacing: -1px;
            font-weight: 400;
            background-color: #fff;
            text-align: left;
            font-weight: 400;
            cursor: pointer;
        }
        select:nth-of-type(1) {
            padding: 0 43px 0 6px;
        }
        select:nth-of-type(2) {
            padding: 0 17px 0 6px;
            margin: 0 8px 0 16px;
        }
        select:focus {
            outline: none;
        }
        button {
            padding: 0 11px 0 31px;
        }

        .downloadExcel {
            margin-left: 8px;
        }

        button.downloadExcel::after {
            position: absolute;
            display: block;
            width: 11px;
            height: 11px;
            content: "";
            top: 11px;
            left: 11px;
            background: url("../assets/excelIcon.png") 0 0 / cover;
        }
    }
    //리스트 필터
    .listFilter {
        width: 106px;
        padding: 22px 40px 0;
        text-align: left;
        .alertMsg {
            font-weight: 500;
            font-size: 16px;
            line-height: 1.43;
            color: #ff9934;
            margin: 10px 0;
        }
    }
    .listFilter .selectForm {
        width: 100%;
        height: 35px;
        position: relative;
        box-sizing: border-box;
        select,
        button {
            height: 100%;
            display: inline-block;
            vertical-align: top;
            position: relative;
            color: #575a62;
            font-size: 15px;
            line-height: 1.13;
            box-sizing: border-box;
            border: 1px solid #e0e4e8;
            letter-spacing: -1px;
            font-weight: 400;
            background-color: #fff;
            text-align: left;
            font-weight: 400;
            cursor: pointer;
        }
        select {
            padding: 0 15px 0 11px;
            margin-right: 5px;
            border-radius: none;
        }
        select:last-of-type {
            padding: 0 63px 0 11px;
            margin-right: 0;
        }
        select:focus {
            outline: none;
        }
        section option {
            border-radius: none;
            height: 36px;
        }
        button {
            padding: 0 11px;
        }
        .submitBtn {
            position: absolute;
            top: 0;
            right: 0;
            margin-right: 0;
            background: #4cd9ef;
            border: 1px solid #2cb8e3;
            font-weight: 500;
            font-size: 14px;
            line-height: 1.42;
            color: #ffffff;
        }
        .vertical {
            display: inline-block;
            width: 1px;
            width: 1px;
            height: 17.5px;
            background: #dadde1;
            margin: 9px 16px 0 16px;
        }
    }
    //리스트 테이블
    .listTable {
        padding: 0 40px;
        width: 1306px;
        margin: auto;
        border: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .listTable table {
        border: 1px solid #d3d8e1;
        display: block;
        table-layout: fixed;
        min-height: 364px;
        font-size: 14px;
    }
    .listTable table input[type="checkbox"] {
        display: none;
        table-layout: fixed;
    }
    input[type="checkbox"] + label {
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #e0e4e8;
        background: #fff;
        box-sizing: border-box;
        cursor: pointer;
    }
    input[type="checkbox"]:checked + label {
        background: #4cd9ef;
        position: relative;
        ::after {
            position: absolute;
            display: block;
            content: "";
            width: 14px;
            height: 14px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url("../assets/checkWhite.png") no-repeat 0 0;
        }
    }
    .listTable table thead {
        width: 100%;
        height: 44px;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.25px;
        color: #555;
        th {
            line-height: 44px;
            font-size: 14px;
        }
        th:nth-of-type(1) {
            width: 38px;
        }
        th:nth-of-type(2) {
            width: 115px;
        }
        th:nth-of-type(3) {
            width: 140px;
        }
        th:nth-of-type(4) {
            width: 190px;
        }
        th:nth-of-type(5) {
            width: 110px;
        }
        th:nth-of-type(6) {
            width: 343px;
        }
        th:nth-of-type(7) {
            width: 160px;
        }
        th:nth-of-type(8) {
            width: 100px;
        }
        th:nth-of-type(9) {
            width: 110px;
        }
    }
    .listTable table tbody {
        width: 100%;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.25px;
        color: #555;
        overflow: hidden;
        table-layout: fixed;
        tr {
            height: 44px;
            line-height: 44px;
            table-layout: fixed;
            cursor: pointer;
            :hover {
                background-color: #f0fcfd;
            }
        }
        td {
            height: 100%;
            line-height: 44px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            table-layout: fixed;
            font-size: 14px;
            color: #555555;
        }
        td:nth-of-type(1) {
            width: 38px;
            position: relative;
            .trCheck {
                width: 22px;
                height: 22px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        td:nth-of-type(2) {
            width: 115px;
        }
        td:nth-of-type(3) {
            width: 140px;
        }
        td:nth-of-type(4) {
            width: 190px;

            a {
                color: #2cb8e3;
            }
        }
        td:nth-of-type(5) {
            width: 110px;

            padding: 0 10px;
        }
        td:nth-of-type(6) {
            width: 343px;
        }
        td:nth-of-type(7) {
            width: 160px;
        }
        td:nth-of-type(8) {
            width: 167px;
        }
        td:nth-of-type(9) {
            width: 105px;
        }
    }
    .tablePager {
        margin: 20px 0 26px;
    }
    .skyBlueBtn {
        margin: 0 auto;
    }
    //noResult
    .listTable table tbody tr.noResult {
        border-bottom: none;
        :hover {
            background: none;
        }
    }
    .listTable table tbody tr.noResult td:nth-of-type(1) {
        line-height: 315px;
    }
`;

/* 배송조회 페이지 - DeliveryInquiry */
const DeliveryInquiryListDiv = styled(ProductInquiryListDiv)`
    padding: 0 0 14px;
    //리스트헤더
    .listHeader {
        border: none;
        .selectForm select:nth-of-type(1) {
            padding: 0 118px 0 6px;
        }
        .selectForm .deliveryBtn {
            padding: 5px 14px;
            background: #4cd9ef;
            border: 1px solid #2cb8e3;
            font-weight: 500;
            font-size: 12px;
            line-height: 1.41;
            color: #ffffff;
            letter-spacing: 0;
            margin-left: 12px;
        }
    }
    //리스트테이블
    .listTable {
        table thead {
            th:nth-of-type(1) {
                width: 38px;
                min-width: 38px;
                max-width: 64px;
                position: relative;
                .allCheck {
                    width: 22px;
                    height: 22px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            th:nth-of-type(2) {
                width: 133px;
                min-width: 133px;
                max-width: 133px;
            }
            th:nth-of-type(3) {
                width: 133px;
                min-width: 133px;
                max-width: 133px;
            }
            th:nth-of-type(4) {
                width: 133px;
                min-width: 133px;
                max-width: 133px;
            }
            th:nth-of-type(5) {
                width: 122px;
                min-width: 122px;
                max-width: 122px;
            }
            th:nth-of-type(6) {
                width: 126px;
                min-width: 126px;
                max-width: 126px;
            }
            th:nth-of-type(7) {
                width: 137px;
                min-width: 137px;
                max-width: 137px;
            }
            th:nth-of-type(8) {
                width: 121px;
                min-width: 121px;
                max-width: 121px;
            }
            th:nth-of-type(9) {
                width: 121px;
                min-width: 121px;
                max-width: 121px;
            }
            th:nth-of-type(10) {
                width: 122px;
                min-width: 122px;
                max-width: 122px;
            }
            th:nth-of-type(11) {
                width: 122px;
                min-width: 122px;
                max-width: 122px;
                border-right: none;
            }
        }
        table tbody {
            tr.noResult td {
                color: #cccccc;
            }
            td {
                box-sizing: border-box;
            }
            td:nth-of-type(1) {
                width: 38px;
                min-width: 38px;
                max-width: 38px;
                padding: 0 10px;
                position: relative;
                .trCheck {
                    width: 22px;
                    height: 22px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            td:nth-of-type(2) {
                width: 133px;
                min-width: 133px;
                max-width: 133px;
                padding: 0 10px;
                color: #8c8c8f;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 10px;
            }
            td:nth-of-type(3) {
                width: 133px;
                min-width: 133px;
                max-width: 133px;
                color: #000000;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 10px;
            }
            td:nth-of-type(4) {
                width: 133px;
                min-width: 133px;
                max-width: 133px;
                color: #545454;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 10px;
            }
            td:nth-of-type(5) {
                width: 122px;
                min-width: 122px;
                max-width: 122px;
                padding: 0 10px;
                color: #545454;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 10px;
            }
            td:nth-of-type(6) {
                width: 126px;
                min-width: 126px;
                max-width: 126px;
                padding: 0 5px;
                select {
                    width: 100%;
                    height: 28px;
                    line-height: 28px;
                    box-sizing: border-box;
                    border: 1px solid #d2d5db;
                    color: #4d5159;
                    font-size: 12px;
                    :focus {
                        outline: none;
                    }
                }
            }
            td:nth-of-type(7) {
                width: 137px;
                min-width: 137px;
                max-width: 137px;
                padding: 0 5px;
                input {
                    width: 100%;
                    height: 28px;
                    line-height: 28px;
                    box-sizing: border-box;
                    border: 1px solid #d2d5db;
                    color: #4d5159;
                    font-size: 12px;
                    padding: 0 5px;
                    :focus {
                        outline: none;
                    }
                }
            }
            td:nth-of-type(8) {
                width: 121px;
                min-width: 121px;
                max-width: 121px;
            }
            td:nth-of-type(9) {
                width: 121px;
                min-width: 121px;
                max-width: 121px;
            }
            td:nth-of-type(10) {
                width: 122px;
                min-width: 122px;
                max-width: 122px;
            }
            td:nth-of-type(11) {
                width: 122px;
                min-width: 122px;
                max-width: 122px;
                border-right: none;
            }
        }
    }
`;
/* 파트너조회/수정 페이지 - PartnerInquiry*/
const PartnerInquiryListDiv = styled(DeliveryInquiryListDiv)`
    //리스트테이블
    .listTable {
        table thead {
            th:nth-of-type(1) {
                width: 147px;
                min-width: 147px;
                max-width: 147px;
            }
            th:nth-of-type(2) {
                width: 164px;
                min-width: 164px;
                max-width: 164px;
            }
            th:nth-of-type(3) {
                width: 197px;
                min-width: 197px;
                max-width: 197px;
            }
            th:nth-of-type(4) {
                width: 151px;
                min-width: 151px;
                max-width: 151px;
            }
            th:nth-of-type(5) {
                width: 155px;
                min-width: 155px;
                max-width: 155px;
            }
            th:nth-of-type(6) {
                width: 152px;
                min-width: 152px;
                max-width: 152px;
            }
            th:nth-of-type(7) {
                width: 346px;
                min-width: 346px;
                max-width: 346px;
            }
        }
        table tbody {
            td {
                box-sizing: border-box;
                font-size: 14px;
                color: #545454;
            }
            td:nth-of-type(1) {
                width: 147px;
                min-width: 147px;
                max-width: 147px;
                padding: 0 10px;
                color: #000;
            }
            td:nth-of-type(2) {
                width: 164px;
                min-width: 164px;
                max-width: 164px;
                padding: 0 10px;
                color: #8c8c8f;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 10px;
            }
            td:nth-of-type(3) {
                width: 197px;
                min-width: 197px;
                max-width: 197px;
                color: #000000;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 10px;
                color: #8c8c8f;
            }
            td:nth-of-type(4) {
                width: 151px;
                min-width: 151px;
                max-width: 151px;
                color: #545454;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 10px;
            }
            td:nth-of-type(5) {
                width: 155px;
                min-width: 155px;
                max-width: 155px;
                padding: 0 10px;
                color: #545454;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 10px;
            }
            td:nth-of-type(6) {
                width: 152px;
                min-width: 152px;
                max-width: 152px;
                padding: 0 5px;
                select {
                    width: 100%;
                    height: 28px;
                    line-height: 28px;
                    box-sizing: border-box;
                    border: 1px solid #d2d5db;
                    color: #4d5159;
                    font-size: 12px;
                    :focus {
                        outline: none;
                    }
                }
            }
            td:nth-of-type(7) {
                width: 346px;
                min-width: 346px;
                max-width: 346px;
                padding: 0 5px;
                input {
                    width: 100%;
                    height: 28px;
                    line-height: 28px;
                    box-sizing: border-box;
                    border: 1px solid #d2d5db;
                    color: #4d5159;
                    font-size: 12px;
                    padding: 0 5px;
                    :focus {
                        outline: none;
                    }
                }
            }
        }
    }
`;
export { MasterOrderListDiv, ProductInquiryListDiv, DeliveryInquiryListDiv, PartnerInquiryListDiv, CustomerInquiryListDiv };
