import styled from "styled-components";

//로그인 styled-component
const LoginDiv = styled.div`
    min-width:1440px;
    height:100vh;
    background-color: #494949;
    position: relative;
    overflow: hidden;
    .contentSpace{
      width: 100%;
      max-width:1340px;
      height:85.41%;
      min-height:600px;
      max-height:762px;
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      background: #FFFFFF;
      box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.08);
      border-radius: 20px;
    }
    .logoArea{
        width:50%;
        height:75%;
        display: flex;
        align-items: center;
        border-right: 1px solid #D3D3D3;
    }
    .logo{
        width:250px;
        margin: 0 auto;
        img{
            width:100%;
        }
    }
    .formArea{
        width:50%;
        height:75%;
        display: flex;
        align-items: center;
        form{
            width:332px;
            margin: 0 auto;
            font-size: 16px;
            font-weight: 500;
            line-height:1.43;
        }
        fieldset{
            width:100%;
            color:#000;
            margin-bottom:28px;
            input{
                margin-top: 4px;
                width:100%;
                height:44px;
                box-sizing: border-box;
                border: 1px solid #D3D8E1;
                border-radius: 5px; 
                padding:10px;
                :focus{
                    outline:none;
                }
            }
            &.pwField{
                margin-bottom:24px;
            }
            &.chkField{
                position:relative;
                height:20px;
                margin-bottom:20px;
                input[type=checkbox]{
                    width:20px;
                    height:20px;
                    margin:0;
                    display: none;
                }
                label{
                    display: inline-block;
                    font-size:14px;
                    line-height: 1.44;
                    cursor: pointer;
                    i{
                      display: inline-block;
                      width:20px;
                      height:20px;
                      box-sizing: border-box;
                      border: 1px solid #D3D8E1;
                      border-radius: 2px;
                      vertical-align: middle;
                      margin-right: 8px;
                      position:relative;
                      :after{
                        position: absolute;
                        display: block;
                        content: "";
                        width: 10px;
                        height: 10px;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translate(-50%,-50%);
                        -ms-transform: translate(-50%,-50%);
                        transform: translate(-50%,-50%);
                        background: url('../assets/checkWhite.png') no-repeat 0 0 / 100%;
                      }
                    }
                    span{
                      display: inline-block;
                      vertical-align: middle;
                    }
                }
                input[type=checkbox]:checked + label i{
                  background:#4CD9EF;
                }
                a{
                    display: inline-block;
                    position:absolute;
                    right:0;
                    top:0;
                    font-size:14px;
                    line-height: 1.44;
                    vertical-align: top;
                    text-decoration: none;
                    color: #4CD9EF;
                }
            }
        }
        .errorMsg{
            font-weight: 400;
            font-size: 14px;
            line-height:1.42;
            color: #FF0000;
            margin-bottom: 15px;
        }
        button[type=submit]{
            width:100%;
            height:44px;
            background:#4CD9EF;
            border-radius: 2px;
            border:none;
            color:#fff;
            font-weight:700;
            font-size:16px;
            cursor:pointer;
            :focus{
                outline:none;
            }
        }
    }
`

export default LoginDiv;