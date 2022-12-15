import styled from "styled-components";

const RegisterDiv = styled.div`
    /* 파트너 등록 페이지 */
    &.partnerRegister{
        max-width:1440px;
        padding-bottom: 56px;
        form{
            width:1140px;
            margin: 20px auto 0;
            padding:1px 0;
        }
    }
    max-width: 1140px;
    margin: 0 auto;
    background:#fff;
    h2{
       font-size:20px;
       font-weight:500;
       line-height : 1.298;
       color:#000;
       padding-bottom: 4px;
       border-bottom: 1px solid #2CB8E3;
       margin: 56px 0 40px;
    }
    fieldset{
        margin-bottom: 24px;
    }
    h3{
        display: inline-block;
        vertical-align: top;
        color: #949494;
        width:134px;
        height:40px;
        line-height:40px;
        text-align: right;
        margin-right:60px;
    }
    input,select{
        display: inline-block;
        vertical-align: top;
        width:300px;
        height:40px;
        padding:0 7px;
        box-sizing: border-box;
        border:1px solid #D2D5DB;
        color:#B1B4B8;
        font-size: 16px;
        ::placeholder{
            color:#B1B4B8;
            font-size: 16px;
        }
        :focus{
            outline:none;
        }
    }
    input[type=button]{
        width:auto;
        padding:0 10px;
        margin-left:20px;
        background: #4CD9EF;
        border: 1px solid #2CB8E3;  
        color:#fff;
        font-size: 16px;
        cursor: pointer;
    }
    select{
        width:144px;
        cursor: pointer;
    }
    em{
        line-height: 40px;
        color:#949494;
        padding: 0 5px;
        font-size:16px;
    }
    //비밀번호 확인 에러 문구
    .errorMsg{
        padding-left: 194px;
        font-weight: 500;
        font-size: 12px;
        line-height: 1.41;
        margin-top: 4px;
    }
    // 업체명, 브랜드명
    .companyNameField input,.brandField input{
        width:200px;
    }
    //사업장 주소
    .addressField>div{
        position:relative;
        display: inline-block;
        & input[type=text]{width:280px;}
        & input.lastInput{
           display : block;
           margin-top: 12px;
           width:200px;
        }
    }
    //사업자 등록번호 
    .businessNumField input{
        width:280px;
    }
    //대표자명
    .representativeNameField input, 
    .businessmanNameField input,
    .sellerNameField input,
    .managerNameField input{
        width: 200px;
    }
    //이메일
    .emailField{
        &.taxBillEmailField{
            margin-top: 56px;
        }
        position:relative;
        span{
            position:absolute;
            top:-21px;
            font-size: 12px;
            color: #2CB8E3;
            font-weight: 500;
            strong{
                font-weight: 700;
            }
        }
        input{
            width:180px;
        }
    }
    //담당자 이메일
    .managerEmailField input{
        width:180px;
    }
    //첨부파일 fieldset
    .fileField{
        margin-bottom: 40px;
    }
    //fileBox영역
    .fileBox{
        display: inline-block;
        width: 160px;
        height:160px;
        position: relative;
        border:1px solid #D2D5DB;
        overflow: hidden;
        input,label{
            position: absolute;
            width:100%;
            height:100%;
            cursor: pointer;
            &::file-selector-button{
                display: none;
            }
        }
        label::after{
            position:absolute;
            display: block;
            content: '';
            width: 21px;
            height:16.5px;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            background: url('../assets/fileUploadIcon.png') 0 0 / cover;
        }
        input[type=file]{
            display:none;
        }
        img{
            width: 95%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            /* z-index: 1; */
        }
    }
    //회원가입) 회원가입 / 취소 버튼 영역
    .singinBtnsArea{
        margin-top:84px;
        text-align:center;
        //회원가입 버튼
        .submitBtn{
            display: inline-block;
            height:40px;
            padding: 0 38px 0 23px;
            background: #4CD9EF;
            border: 1px solid #2CB8E3;
            color:#fff;
            font-size:16px;
            margin-right:8px;
            position:relative;
            cursor:pointer;
            ::after{
                position:absolute;
                content: "";
                display: block;
                width: 12px;
                height: 12px;
                top:50%;
                right:14px;
                transform:translateY(-50%);
                background:url('../assets/checkWhite.png') 0 0 / cover;
            }
        }
        //취소 버튼
        .cancelBtn{
            display: inline-block;
            width:80px;
            height:40px;
            background: #DFE3EA;
            border: 1px solid #ACAFB6;
            color:#7C7F86;
            font-size:16px;
            cursor:pointer;
        }
    }
`

export default RegisterDiv;