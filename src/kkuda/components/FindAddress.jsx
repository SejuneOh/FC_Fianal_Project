import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import styled from "styled-components";

const StyledFindAddr = styled.div`
    background-color: white;
    border: 1px solid #30cee6;
    color: #30cee6;
    height: 55px;
    width: 14%;
    border-radius: 6px;
    margin-right: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #30cee6;
        color: white;
    }
`;

const FindAddress = () => {
    const [view, setView] = useState(false);
    const [address, setAddress] = useState("");

    const [zoneCode, setZoneCode] = useState("");

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        width: "4150px",
        border: "2px solid black",
        // marginTop: "50px",
        backgroundColor: "white",
    };

    const handleComplete = (data) => {
        if (view) {
            let fullAddr = data.address;
            let extraAddr = "";

            console.log(data);

            if (data.addressType === "R") {
                if (data.bname !== "") {
                    extraAddr += data.bname;
                }
                if (data.buildingName !== "") {
                    extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
                }
                fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
            }
            setAddress(fullAddr);
            setZoneCode(data.zonecode);
            setView(false);
        }
    };

    return (
        <>
            <StyledFindAddr onClick={() => setView(!view)}>주소찾기</StyledFindAddr>

            {view ? (
                <>
                    <DaumPostcodeEmbed onComplete={handleComplete} style={postCodeStyle} />
                </>
            ) : null}
        </>
    );
};

export default FindAddress;
