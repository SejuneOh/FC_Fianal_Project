import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "../styles/calendar.css"; /*라이브러리 css 변경 */
import { ko } from "date-fns/esm/locale";
import { subYears, subMonths } from "date-fns";

const termValues = [
    { id: 1, value: "1개월" },
    { id: 2, value: "6개월" },
    { id: 3, value: "1년" },
    { id: 4, value: "전체" },
];

function Calendar({ Height, marginTop, startDate, setStartDate, endDate, setEndDate }) {
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());

    const date = new Date();

    const handleClick = (e) => {
        const { value } = e.target;
        console.log("termValue", value);
        if (value === "전체") {
            setStartDate(new Date("2015-01-01"));
            setEndDate(new Date());
        }

        if (value === "1개월") {
            let oneMonthAgo = subMonths(date, 1);
            setStartDate(oneMonthAgo);
            setEndDate(new Date());
        }

        if (value === "6개월") {
            let sixMonthAgo = subMonths(date, 6);
            setStartDate(sixMonthAgo);
            setEndDate(new Date());
        }

        if (value === "1년") {
            let oneYearAgo = subYears(date, 1);
            setStartDate(oneYearAgo);
            setEndDate(new Date());
        }
    };

    return (
        <ContainerDiv marginTop={marginTop}>
            <TermButtonsDiv termHeight={Height}>
                {termValues.map((v) => (
                    <input onClick={handleClick} key={v.id} type="button" value={v.value} />
                ))}
            </TermButtonsDiv>
            <Section>
                <SelectDate
                    calendarSize={Height} /*스타일컴포넌트 prop*/
                    locale={ko}
                    dateFormat="yyyy-MM-dd"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="시작 날짜"
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    showPopperArrow={false}
                    showYearDropdown
                    scrollableYearDropdown
                    showMonthDropdown
                    scrollableMonthDropdown
                />
                <BetweenDate> ~ </BetweenDate>
                <SelectDate
                    calendarSize={Height}
                    locale={ko}
                    dateFormat="yyyy-MM-dd"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    placeholderText="종료 날짜"
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    showPopperArrow={false}
                    showYearDropdown
                    scrollableYearDropdown
                    showMonthDropdown
                    scrollableMonthDropdown
                />
                <div className="calendarLog1"></div>
                <div className="calendarLog2"></div>
            </Section>
        </ContainerDiv>
    );
}
export default Calendar;

export const TermButtonsDiv = styled.div`
    width: 226px;
    height: ${(props) => props.termHeight || "35px"};

    padding: 0px;
    margin: 0px 12px;
    box-sizing: border-box;
    display: flex;
    input {
        padding-top: 0px;
        width: 56.5px;
        height: ${(props) => props.termHeight || "35px"};
        background: #ffffff;
        font-weight: 500;
        font-size: 12px;
        line-height: ${(props) => props.termHeight || "35px"};
        color: #8e9197;
        border: 1px solid #d2d5db;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input:hover {
        color: #4cd9ef;
        border-color: #2cb8e3;
    }
`;

const SelectDate = styled(DatePicker)`
    width: 172px;
    height: ${(props) => props.calendarSize || "35px"};
    padding: 7px 17px;
    box-sizing: border-box;
    font-size: 12px;
    color: #575a62 !important;
    text-align: left;
    border: 1px solid #dadde1;
    outline: none;
    cursor: pointer;
`;

const BetweenDate = styled.span`
    display: block;
    padding: 4px 12px;
    margin-left: 0px !important;
    box-sizing: border-box;
    margin-right: 0px;
    font-size: 14px;
    cursor: pointer;
`;

const Section = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px auto;
    width: 380px;
    height: ${(props) => props.termHeight || "35px"};
    margin-left: 0px;
    margin-top: 0px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    .calendarLog1 {
        background-image: url(/assets/calendarIcon.svg);
        background-repeat: no-repeat;
        background-origin: content-box;
        background-position: center; /*이미지 가운데 정렬 */
        width: 18px;
        height: 17px;
        position: absolute;
        top: 9px;
        left: 143px;
        z-index: 1;
    }
    .calendarLog2 {
        background-image: url(/assets/calendarIcon.svg);
        background-repeat: no-repeat;
        background-origin: content-box;
        background-position: center;
        width: 18px;
        height: 17px;
        position: absolute;
        top: 9px;
        right: 13px;
        z-index: 1;
    }
`;

const ContainerDiv = styled.div`
    display: flex;
    margin-top: ${(props) => props.marginTop || 0};
`;
