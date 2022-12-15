import React, { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DaumPostcodeEmbed from "react-daum-postcode";
import PageTitle from "../components/PageTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import RegisterDiv from '../styles/RegisterStyle'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const PartnerRegisterDiv = styled.div`
  background-color: #edf0f5;
  min-width: 1440px;
`;
//다음 주소 api 창 styled
const postCodeStyle = {
  display: "block",
  position: "absolute",
  top: "44px",
  left: "0",
  width: "600px",
  height: "500px",
  padding: "7px",
  zIndex: 1,
  border:"1px solid rgb(210, 213, 219)",
  backgroundColor:'#fff'
};

export default function PartnerRegister(){
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const partnerInfo = useSelector(state => state.partnerInfo);
  
  const [email, setEmail] = useState('');
  const [isIdError, setIsIdError] = useState('');
  const [idChecked, setIdChecked] = useState(false);
  const [idErrorMsg, setIdErrorMsg] = useState('');
  const [idErrorColor, setIdErrorColor] = useState('');
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [isPwError, setIsPwError] = useState(false);
  const [pwErrorMsg, setPwErrorMsg] = useState('');
  const [pwErrorColor, setPwErrorColor] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [representativeName, setRepresentativeName] = useState('');
  let representativeEmail; //대표자 이메일
  const [frontRepresentativeEmail, setFrontRepresentativeMail] = useState('');
  const [backRepresentativeEmail, setBackRepresentativeMail] = useState('@naver.com');
  const [representativeDomain,setRepresentativeDomain]= useState('');
  const [businessmanName, setBusinessmanName] = useState('');
  const [businessNum, setBusinessNum] = useState('');
  const [isBsError, setIsBsError] = useState(false);
  const [bsErrorMsg, setBsErrorMsg] = useState('');
  const [bsErrorColor, setBsErrorColor] = useState('');
  let taxBillEmail; //세금계산서 이메일
  const [frontTaxBillEmail, setFrontTaxBillEMail] = useState('');
  const [backTaxBillEmail, setBackTaxBillMail] = useState('@naver.com');
  const [taxBillDomain,setTaxBillDomain]= useState('');
  const [managerName, setManagerName] = useState('');
  const [managerContact, setManagerContact] = useState('');
  const [isMgError, setIsMgError] = useState(false);
  const [mgErrorMsg, setMgErrorMsg] = useState('');
  const [mgErrorColor, setMgErrorColor] = useState('');
  let managerEmail; //담당자 이메일
  const [frontManagerEmail, setFrontManagerEMail] = useState('');
  const [backManagerEmail, setBackManagerMail] = useState('@naver.com');
  const [managerDomain,setManagerlDomain]= useState('');
  const [brandImg, setBrandImg] = useState('');
  const [businessNumImg, setBusinessNumImg] = useState('');
  const [bankbookImg, setBankbookImg] = useState('');
  const formData = new FormData();
  const url = '/api/vendor/auth/register';
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  //회원가입 작성 폼
  let body;

  //아이디 중복 확인
  useEffect(()=>{
    //공백시 통과
    if(!email) return 
   
    if(idChecked){
      setIsIdError(true);
      setIdErrorMsg('사용가능한 아이디 입니다.')
      setIdErrorColor('#2CB8E3');
    }else{
      setIsIdError(true);
      setIdErrorMsg('중복확인을 해주세요.')
      setIdErrorColor('#E41313');
    }  
  },[email,isIdError,idErrorMsg,idErrorColor,idChecked])

  //비밀번호 - 비밀번호 일치 확인
  useEffect(()=>{
    //공백시 통과
    if(!password && !passwordConfirm) return 
  
    if(password !== passwordConfirm){
      setIsPwError(true);
      setPwErrorMsg('동일한 비밀번호를 입력해주세요.')
      setPwErrorColor('#E41313');
    }else{
      setIsPwError(true);
      setPwErrorMsg('동일한 비밀번호입니다.')
      setPwErrorColor('#2CB8E3');
    }  
  },[password,passwordConfirm,isPwError,pwErrorColor])

  //사업자등록번호 정규식 (10자 이하, 3-2-5)
  useEffect(()=>{
    const regExp = /^([0-9]{3})\-([0-9]{2})\-([0-9]{5})$/;

    //공백시 통과
    if(!businessNum) return 
    if(!regExp.test(businessNum)){
      setIsBsError(true);
      setBsErrorMsg("'-'를 포함해 올바른 사업자등록번호를 입력해주세요.")
      setBsErrorColor('#E41313');
    }else{
      setIsBsError(false);
    }  
  },[businessNum,isBsError,bsErrorMsg,bsErrorColor])

  //담당자 전화번호 정규식 (11자 이하, 3-4-4)
  useEffect(()=>{
    const regExp = /^(0[2-8][0-5]?|01[01346-9])-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/;

    //공백시 통과
    if(!managerContact) return

    if(!regExp.test(managerContact)){
      setIsMgError(true);
      setMgErrorMsg("'-'를 포함해 올바른 연락처를 입력해주세요.")
      setMgErrorColor('#E41313');
    }else{
      setIsMgError(false);
    }  
  },[managerContact,isMgError,mgErrorMsg,mgErrorColor])

  //다음 주소 API 출력 
  const [postView, setPostView] = useState(false);
  const onCompletePost = (data) => {
    console.log(data.address)
    setAddress(data.address)
    setAddressDetail(data.buildingName)
  };
  
  //첨부파일 이미지 미리보기
  const previewFunc = (fileBlob, field) => {   
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        switch (field) {
          case "BRAND":
            setBrandImg(reader.result);
            break;
          case "BUSINESS":
            setBusinessNumImg(reader.result);
            break;
          case "BANKBOOK":
            setBankbookImg(reader.result);
            break;
        }
        resolve();
      };
    });
  };
  
  //이미지 파일화
  const makingImage=()=>{
    // 이미지 전처리 함수
    const dataURLtoFile = (dataurl, fileName) => {
        var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], fileName, { type: mime });
    }
    const brand = dataURLtoFile(brandImg,'brandImg.png');
    const businessN = dataURLtoFile(businessNumImg, 'businessNumImg.png');
    const bankbook = dataURLtoFile(bankbookImg, 'bankbookImg.png');

    formData.append('brandImage', brand);
    formData.append('businessImage', businessN);
    formData.append('passbookImage', bankbook);
    formData.append('vendor', JSON.stringify(body));
  };

  //회원가입 입력값 API post 전송
  const registVendor = async () => {
    try{
      const result = await axios.post(url, formData, config);
      console.log(result)
      if(result.status==200){
        navigate("/backoffice/login")
      }else{
        alert('잠시 후 다시 시도해주세요.')
      }
    }catch(err){
      console.log("회원가입 error : ",err);
    }
  }  

  //회원가입 클릭 함수
  const signupFunc = (e)=>{

    e.preventDefault();
    
    //이메일 설정
    representativeEmail=frontRepresentativeEmail+(backRepresentativeEmail!=='@직접입력'?backRepresentativeEmail:representativeDomain);
    taxBillEmail=frontTaxBillEmail+(backTaxBillEmail!=='@직접입력'?backTaxBillEmail:taxBillDomain);
    managerEmail=frontManagerEmail+(backManagerEmail!=='@직접입력'?backManagerEmail:managerDomain);

    body={
      email,  
      authority:'vendor', 
      password,
      companyName, 
      brandName, 
      address,
      representativeName, 
      representativeEmail,  
      businessmanName, 
      businessNum, 
      taxBillEmail,  
      managerName,
      managerContact, 
      managerEmail 
    }
    console.log(body)

    //공백, 유효성 검사 후 post
    if(!email||
      !password|| 
      !passwordConfirm|| 
      !companyName|| 
      !brandName|| 
      !address|| 
      !representativeName|| 
      !representativeEmail|| 
      !businessmanName|| 
      !businessNum|| 
      !taxBillEmail|| 
      !managerName|| 
      !managerContact|| 
      !managerEmail|| 
      !brandImg|| 
      !businessNumImg|| 
      !bankbookImg
      ){
        alert('모든 내용을 기재해주세요.')
      }else if(!idChecked){
        alert('아이디 중복확인을 해주세요.')
      }else if(pwErrorColor=='#E41313'){
        alert('비밀번호를 확인해주세요.')
      }else if( isBsError==true){
        alert('사업자등록번호를 확인해주세요.')
      }else if(isMgError==true){
        alert('담당자 연락처를 확인해주세요.')
      }else{
        makingImage();
        registVendor();
      }
  };



    return(
        <>
            <Header menuState={"partner"} />
            <PartnerRegisterDiv>
                <PageTitle title={"새 파트너 추가"} />
                <RegisterDiv className="partnerRegister">
                <form onSubmit={(e)=>{signupFunc(e)}}>
                {/* 기본 정보 영역 */}
                <div className="basicArea">
                  <h2>기본 정보</h2>
                  <fieldset className="companyNameField">
                <h3>업체명</h3>
                <input type="text" value={companyName} onChange={e=>setCompanyName(e.target.value.trim())}/>
              </fieldset>
              <fieldset className="brandField">
                <h3>브랜드명</h3>
                <input type="text" value={brandName} onChange={e=>setBrandName(e.target.value.trim())}/>
              </fieldset>
              <fieldset className="addressField">
                <h3>사업장 주소</h3>
                <div>
                  <input type="text" placeholder="주소를 입력해주세요." value={address} onChange={e=>setAddress(e.target.value.trim())} onClick={() => setPostView(!postView)} />
                  <input type="button" value="주소 검색" onClick={() => setPostView(!postView)}/>
                  <input type="text" value={addressDetail} className='lastInput' placeholder="상세 주소"/>
                  {
                    postView &&  <DaumPostcodeEmbed style={postCodeStyle} onComplete={onCompletePost}/>
                  }
                </div>
              </fieldset>
                  <fieldset className="idField">
                    <h3>파트너 아이디</h3>
                    <input type="text" value={email} onChange={e=>{
                  setEmail(e.target.value.trim())
                  setIdChecked(false)
                  console.log(idChecked)
                }} placeholder="아이디를 입력해주세요." />
                <input type="button" value="중복 확인" onClick={()=>{
                  setIdChecked(true)
                  console.log(idChecked)
                }}/>
                {
                  isIdError && <p className="errorMsg idErrorMsg" style={{color:idErrorColor}}>{idErrorMsg}</p>
                }
                  </fieldset>
                  <fieldset className="pwField">
                <h3>비밀번호</h3>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value.trim())} placeholder="비밀번호를 입력해주세요." />
              </fieldset>
              <fieldset className="pwConfirmField">
                <h3>비밀번호 확인</h3>
                <input type="password" value={passwordConfirm} onChange={e=>setPasswordConfirm(e.target.value.trim())} placeholder="비밀번호를 한번 더 입력해주세요." />
                {
                  isPwError && <p className="errorMsg pwErrorMsg" style={{color:pwErrorColor}}>{pwErrorMsg}</p>
                }
              </fieldset>
                </div>
                 {/* 사업자 정보 영역 */}
            <div className="businessArea">
              <h2>사업자 정보</h2>
              <fieldset className="representativeNameField">
                <h3>대표자명</h3>
                <input type="text" value={representativeName} onChange={e=>setRepresentativeName(e.target.value.trim())}></input>
              </fieldset>
              <fieldset className="emailField representativeEmailField">
                <h3>대표자 이메일</h3>
                <input type="text" onChange={e=>{
                  setFrontRepresentativeMail(e.target.value.trim())
                }}/>
                <em>@</em>
                {
                  backRepresentativeEmail !== '@직접입력'
                  ? (
                    <select onChange={e=>{
                      setBackRepresentativeMail('@' + e.target.value)
                    }}>
                      <option value="naver.com">
                          naver.com
                      </option>
                      <option value="hanmail.net">
                          hanmail.net
                      </option>
                      <option value="daum.net">
                          daum.net
                      </option>
                      <option value="gmail.com">
                          gmail.com
                      </option>
                      <option value="hotmail.com">
                          hotmail.com
                      </option>
                      <option value="직접입력">직접 입력</option>
                    </select>
                  )
                  : (
                    <input type="text" onChange={e=>{
                      setRepresentativeDomain('@' + e.target.value)
                    }}></input>
                  )
                }
              </fieldset>
              <fieldset className="businessmanNameField">
                <h3>사업자명</h3>
                <input type="text" value={businessmanName} onChange={e=>setBusinessmanName(e.target.value.trim())} />
              </fieldset>
              <fieldset className="businessNumField">
                <h3>사업자 등록번호</h3>
                <input type="text" value={businessNum} placeholder=" '-'을 포함해 입력해주세요." maxLength='12' onChange={e=>setBusinessNum(e.target.value.trim())}></input>
                {
                  isBsError && <p className="errorMsg bsErrorMsg" style={{color:bsErrorColor}}>{bsErrorMsg}</p>
                }
              </fieldset>
            </div>
                  {/* 상세 정보 영역 */}
            <div className="datailArea">
              <h2>상세 정보</h2>
              <fieldset className="emailField taxBillEmailField">
                <h3>세금계산서 이메일</h3>
                <span>* 입력하신 이메일로 <strong>세금계산서</strong>가 발행됩니다.</span>
                <input type="text" onChange={e=>{
                  setFrontTaxBillEMail(e.target.value.trim())
                }}/>
                <em>@</em>
                {
                  backTaxBillEmail !== '@직접입력'
                  ? (
                    <select onChange={e=>{
                      setBackTaxBillMail('@' + e.target.value)
                    }}>
                      <option value="naver.com">
                          naver.com
                      </option>
                      <option value="hanmail.net">
                          hanmail.net
                      </option>
                      <option value="daum.net">
                          daum.net
                      </option>
                      <option value="gmail.com">
                          gmail.com
                      </option>
                      <option value="hotmail.com">
                          hotmail.com
                      </option>
                      <option value="직접입력">직접 입력</option>
                    </select>
                  )
                  : (
                    <input type="text" onChange={e=>{ setTaxBillDomain('@' + e.target.value)}}></input>
                  )
                }
              </fieldset>
              <fieldset className="managerNameField">
                <h3>담당자명</h3>
                <input type="text" value={managerName} onChange={e=>setManagerName(e.target.value.trim())}/>
              </fieldset>
              <fieldset className="managerContactField">
                <h3>담당자 전화번호</h3>
                <input type="text" value={managerContact} maxLength="13" onChange={e=>setManagerContact(e.target.value.trim())} placeholder="'-'을 포함해 입력해주세요."></input>
                {
                  isMgError && <p className="errorMsg mgErrorMsg" style={{color:mgErrorColor}}>{mgErrorMsg}</p>
                }
              </fieldset>
              <fieldset className="emailField managerEmailField">
                <h3>담당자 이메일</h3>
                <input type="text" onChange={e=>{
                  setFrontManagerEMail(e.target.value.trim())
                }}/>
                <em>@</em>
                {
                  backManagerEmail !== '@직접입력'
                  ? (
                    <select onChange={e=>{
                      setBackManagerMail('@' + e.target.value)
                    }}>
                      <option value="naver.com">
                          naver.com
                      </option>
                      <option value="hanmail.net">
                          hanmail.net
                      </option>
                      <option value="daum.net">
                          daum.net
                      </option>
                      <option value="gmail.com">
                          gmail.com
                      </option>
                      <option value="hotmail.com">
                          hotmail.com
                      </option>
                      <option value="직접입력">직접 입력</option>
                    </select>
                  )
                  : (
                    <input type="text" onChange={e=>{
                      setManagerlDomain('@' + e.target.value)
                    }}></input>
                  )
                }
              </fieldset>
            </div>
             {/* 첨부 파일 영역 */}
             <div className="fileUploadArea">
              <h2>첨부 파일</h2>
              <fieldset className="brandImgField fileField">
                <h3>브랜드 이미지</h3>
                <div className="fileBox">
                  <img className="brandImg" src={brandImg}/>
                  <input type="file" id="brandFile" accept="image/png, image/jpeg" onChange={(e) => {previewFunc(e.target.files[0], "BRAND");}} />
                  <label htmlFor="brandFile" />
                </div>
              </fieldset>
              <fieldset className="businessNumFileField fileField">
                <h3>사업자 등록번호</h3>
                <div className="fileBox">
                  <img className="businessNumImg" src={businessNumImg}/>
                  <input type="file" id="businessNumFile" accept="image/png, image/jpeg" onChange={(e) => {previewFunc(e.target.files[0], "BUSINESS");}}/>
                  <label htmlFor="businessNumFile" />
                </div>
              </fieldset>
              <fieldset className="bankbookFileField fileField">
                <h3>통장 사본</h3>
                <div className="fileBox">
                  <img className="bankbookImg" src={bankbookImg}/>
                  <input type="file" id="bankbookFile" accept="image/png, image/jpeg" onChange={(e) => {previewFunc(e.target.files[0], "BANKBOOK");}}/>
                  <label htmlFor="bankbookFile" />
                </div>
              </fieldset>
            </div>
              {/* 등록완료 버튼 영역 */}
              <div className="singinBtnsArea">
                <button type="submit" className="submitBtn">등록완료</button>
              </div>
            </form>
                </RegisterDiv>
            </PartnerRegisterDiv>
            <Footer/>
        </>    
    )
}