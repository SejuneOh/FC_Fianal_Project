import React, { useState } from "react";
import styled from "styled-components";
import { ConditionBarDiv, FormSelect } from "./Filter";
import { SearchBarDiv } from "./Filter";

const FilterPartnerDiv = styled.div`
    padding-top: 12px;
    box-sizing: border-box;
    width: 1400px; 
    height: 130px;
    margin: 0 auto;
    margin-top: 20px;
    background: #f8f9fd;
    font-size: 15px;
    line-height: 19px;
    .condition {
        margin-left: 132px;
        width: 140px;
        height: 32px;
    }
`;

const WrapperDiv = styled.div`
    display: flex;
    margin-left: 183px;
    margin-top: 10px;
    .formSelect {
        width: 120px;
        height: 32px;
    }
    .input {
        width: 160px;
        height: 32px;
        margin-left: 12px;
        background: #fff;
        border: 1px solid #e0e4e8;
        box-sizing: border-box;
    }

`;

function FilterPartner({ dummyData, setFilterData }) {
    const [mainSelect, setMainSelect] = useState("");
    const [mainInput, setMainInput] = useState("");
    const [subSelect, setSubSelect] = useState("");
    const [subInput, setSubInput] = useState("");

    const handleSearch = () => {
        const filterData = dummyData.reduce((acc, data) => {
            const mainSelectData = mainSelect && mainSelect === "브랜드명" ? data.brandName === mainInput : mainSelect === "업체명" ? data.companyName === mainInput : true;
            const subSelectData = subSelect && subSelect === "사업자명" ? data.businessmanName === subInput : mainSelect === "담당자명" ? data.managerName === subInput : true;

            if (mainSelectData && subSelectData) {
                acc.push(data);
            }

            return acc;
        }, []);
        setFilterData(filterData);
    };

    return (
        <>
            <FilterPartnerDiv>
                <ConditionBarDiv>
                    <div className="selecOption">
                        <span>상세조건</span>
                        <FormSelect className="condition">
                            <select onChange={(e) => setMainSelect(e.target.value)} name="brandCompany" id="brandCompany">
                                <option>전체</option>
                                <option value="브랜드명">브랜드명</option>
                                <option value="업체명">업체명</option>
                            </select>
                        </FormSelect>
                        <input onChange={(e) => setMainInput(e.target.value)} />
                    </div>
                    <WrapperDiv>
                        <FormSelect className="formSelect">                        
                            <select onChange={(e) => setSubSelect(e.target.value)} name="businessManager" id="businessManager">
                                <option>전체</option>
                                <option value="사업자명">사업자명</option>
                                <option value="담당자명">담당자명</option>
                            </select>
                        </FormSelect>
                        <input className="input" onChange={(e) => setSubInput(e.target.value)} />
                    </WrapperDiv>
                </ConditionBarDiv>
            </FilterPartnerDiv>
            <SearchBarDiv style={{marginBottom:"20px"}}>
                <button onClick={handleSearch}>검색</button>
            </SearchBarDiv>
        </>
    );
}

export default FilterPartner;
