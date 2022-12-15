import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DetailExplain from "../components/DetailExplain";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { useSelector, useDispatch } from 'react-redux';
import { setName, setBrandName, setOrigialPrice, setRentalMonth, setTitleImage, setImages, reset } from '../reducers/productRegistReducer';
import { addProduct } from "../reducers/productList";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ProductEditDiv, ProductInfoStyle,
  ProductPageBtn, TitleDivStyle, DotDiv, ProductNmStyle, HellperIcon,
  ProductBrandDiv, PriceInfoDiv, ProductAddImgDiv, DescriptionDiv, AddImgBoxStyle
} from '../styles/ProductEditStyle'



let cnt = 1;

// AddImgBox component
const AddImgBox = ({ labelName, onClick, onCancleClick, img, isMain = false, id = 0 }) => {

  const cancleBtnClick = (e) => {
    if (isMain) {
      onCancleClick(e);
      return;
    } else {
      onCancleClick(id);
    }
  }

  return (
    <AddImgBoxStyle>
      <div className="imgWrapper">
        <label className={!img.length ? "addFile" : "addFile off"} htmlFor={labelName}></label>
        <input type='file' id={labelName} style={{ display: "none" }} onChange={onClick}></input>
        <div className={img.length ? "imgBox" : "imgBox off"}>
          <div className="productImg">
            {img.length && <img className="thumbnailImg" src={img} alt="ThumbnailImage" />}
          </div>
          <div className="productOption">
            <div className="search"></div>
            <div className="write"></div>
            <div className="cancle" onClick={cancleBtnClick}></div>
          </div>
        </div>
      </div>
    </AddImgBoxStyle >
  );
};

// ProductInfo component
const ProductInfo = ({ status }) => {
  const [isOpen, setIsOpen] = useState(true);

  const [nameOpen, setNameOpen] = useState(true);
  const [infoOpen, setInfoOpen] = useState(true);
  const [imgeOpen, setImageOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [descriptionOpen, setDescriptionOpen] = useState(true);

  const DetailInfo = {
    PRODUCTNAME: {
      title: "상품명",
      essential: true,
      helper: true,
      isUse: true,
      body: <ProductNameBody isOpen={nameOpen} />,
    },
    PRODUCTINFO: {
      title: "상품 주요정보",
      essential: true,
      helper: false,
      isUse: true,
      body: <ProductBrandBody isOpen={infoOpen} />,
    },
    PRICEINFO: {
      title: "판매가",
      essential: true,
      helper: false,
      isUse: true,
      body: <PriceInfoBody isOpen={priceOpen} />,
    },
    PRODUCTIMAGE: {
      title: "상품이미지",
      essential: true,
      helper: false,
      isUse: true,
      body: <ProductAddImgBody isOpen={imgeOpen} />,
    },
    DESCRIPTION: {
      title: "상세설명",
      essential: true,
      helper: true,
      isUse: true,
      body: <DescriptionBody isOpen={descriptionOpen} />,
    },
  };

  const openCloseBtnClick = (isClick) => {
    switch (status) {
      case "PRODUCTNAME":
        setNameOpen(!isClick);
        break;
      case "PRODUCTINFO":
        setInfoOpen(!isClick);
        break;
      case "PRODUCTIMAGE":
        setImageOpen(!isClick);
        break;
      case "DESCRIPTION":
        setDescriptionOpen(!isClick);
        break;
      case "PRICEINFO":
        setPriceOpen(!isClick)
        break;
    }
  };

  return (
    <>
      <ProductInfoStyle>
        <ProductTitleDiv
          title={DetailInfo[status].title}
          essential={DetailInfo[status].essential}
          helper={DetailInfo[status].helper}
          isUse={DetailInfo[status].isUse}
          isClickHandle={openCloseBtnClick}
        />
        {DetailInfo[status].isUse && DetailInfo[status].body}
      </ProductInfoStyle>
    </>
  );
};
//ProductTitleDiv stlye

//ProductTitleDiv component
const ProductTitleDiv = ({
  title,
  essential,
  helper,
  isUse,
  isClickHandle,
}) => {
  const [isInfoUse, setInfoUse] = useState(isUse);

  const btnClick = () => {
    if (isUse) {
      setInfoUse((prev) => !prev);
      isClickHandle(isInfoUse);
    }
  };

  return (
    <>
      <TitleDivStyle>
        <div className="container">
          <div className="iconWrapper">
            <h2>{title}</h2>
            {essential && <DotDiv />}
            {helper && <HellperIcon />}
          </div>
          <div className="openbtn">
            {!isUse && <p>설정하지 않음</p>}
            <div className="arrowbtn" onClick={btnClick}>
              <div className={isInfoUse ? "upIcon" : "downIcon"}></div>
            </div>
          </div>
        </div>
      </TitleDivStyle>
    </>
  );
};


// ProductNameBody body
const ProductNameBody = ({ isOpen }) => {
  const [letterCnt, setLetterCnt] = useState(0);
  const [productName, setProductName] = useState("");
  const dispatch = useDispatch();

  const nameOnChange = (e) => {
    setLetterCnt(e.target.value.length);
    setProductName(e.target.value);
    dispatch(setName(e.target.value));
  }

  //  최초 로컬 스토리지에 임시저장 파일이 있으면, 불러온다.
  useEffect(() => {
    let data = localStorage.getItem('productTmpInfo');

    if (data != null) {
      data = JSON.parse(data);
      setProductName(data.name);
      dispatch(setName(data.name));
    }

  }, [])

  return (
    <>
      <ProductNmStyle className={isOpen ? "" : "close"}>
        <div className="productNmWrapper">
          <div className="inputDiv">
            <input
              type="text"
              onChange={nameOnChange}
              value={productName}
            />
            <p>
              <span>{letterCnt}</span>/100
            </p>
          </div>
          <p className="description">
            판매 상품과 직접 관련이 없는 다른 상품명, 스팸성 키워드 입력 시
            관리자에 의해 판매 금지될 수 있습니다.
          </p>
        </div>
      </ProductNmStyle>
    </>
  );
};

// ProductbrandBody component
const ProductBrandBody = ({ isOpen }) => {

  const [isCheck, setIsCheck] = useState(true);
  const [brand, setBrand] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();

  const inputChange = (e) => {
    setIsCheck(prev => !prev)
    if (isCheck) {
      setBrand("개인 브랜드");
      dispatch(setBrandName("개인브랜드"));
    } else {
      setBrand("");
      dispatch(setBrandName(""));
    }
  }

  const brandBtnClick = (e) => {
    e.preventDefault();

    if (isCheck) {
      setBrand("");
      dispatch(setBrandName(""));
    }
  }

  const brandInputChanged = (e) => {
    setBrand(e.target.value);
    dispatch(setBrandName(e.target.value));
  }

  //  최초 로컬 스토리지에 임시저장 파일이 있으면, 불러온다.
  useEffect(() => {
    let data = localStorage.getItem('productTmpInfo');

    if (data != null) {
      data = JSON.parse(data);
      setBrand(data.brandName);
      dispatch(setBrandName(data.brandName));
      if (data.brandName === '개인브랜드') {
        inputRef.current.checked = true;
        setIsCheck(false);
      }
    }

  }, [])


  return (
    <ProductBrandDiv className={isOpen ? "" : "close"}>
      <div className="infoWrapper">
        <div className="info">
          <div className="title">
            <span>브랜드</span>
            <DotDiv />
          </div>
          <div className="brandCotents">
            <div className="brandNm">
              <input type="text" placeholder="브랜드를 입력해주세요." onChange={brandInputChanged} value={brand} readOnly={!isCheck}></input>
              <button onClick={brandBtnClick}>설정안함</button>
            </div>
            <div className="brandNmOption">
              <input type="checkbox" onChange={inputChange} ref={inputRef}></input>
              <p>자체제작 상품</p>
            </div>
          </div>
        </div>
      </div>
    </ProductBrandDiv>
  );
};

// ProductAddImgBody component
const ProductAddImgBody = ({ isOpen }) => {
  // useSelector
  const images = useSelector(state => state.productRegist.images);
  const [compImages, setCompImages] = useState([{ id: 0, img: "" }]);

  const titileImg = useSelector(state => state.productRegist.titleImage);
  const [compTitleImg, setCompTittleImg] = useState("");

  // dispatch
  const dispatch = useDispatch();

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })

  // 메인 이미지 box onClick
  const onAddBoxClick = (e) => {
    const file = e.target.files[0];
    const getBase64File = async () => { return await toBase64(file); }
    (async () => {
      const base64Img = await getBase64File();
      dispatch(setTitleImage(base64Img));
      setCompTittleImg(base64Img);
    })();
  }

  // 메인 이미지 박스 취소 버튼
  const onCancleClick = (e) => {
    dispatch(setTitleImage(''));
    setCompTittleImg('');
  }

  const subAddbtnClick = (e) => {
    const file = e.target.files[0];
    const getBase64File = async () => { return await toBase64(file); }
    (async () => {
      const base64Img = await getBase64File();
      const data = { id: cnt, img: base64Img };
      dispatch(setImages([data, ...images]))
      setCompImages(prev => [data, ...prev]);
      cnt++;
    })();
  }

  const subCancleClick = (id) => {
    dispatch(setImages(images.filter(el => el.id !== id)));
    setCompImages(prev => prev.filter(el => el.id !== id));
  }

  useEffect(() => {
    let data = localStorage.getItem('productTmpInfo');

    if (data != null) {
      data = JSON.parse(data);
      dispatch(setTitleImage(data.titleImage));
      setCompTittleImg(data.titleImage)
      dispatch(setImages(data.images));
      setCompImages(data.images)
    }
  }, [])

  return (
    <ProductAddImgDiv className={isOpen ? "" : "close"}>
      <div className="mainImg">
        <div className="addImgTitle">
          <span>대표이미지</span>
          <DotDiv />
        </div>
        <div className="addImg">
          <div className="mainAddImg">
            <AddImgBox labelName="main" onClick={onAddBoxClick} onCancleClick={onCancleClick} img={compTitleImg} />
          </div>
          <p className="description">
            권장 크기 : 1000 x 1000 (윈도대상 750 x 1000)
            <br />
            최대 20MB까지 첨부 가능합니다.
          </p>
        </div>
      </div>
      <div className="subImg">
        <div className="addImgTitle">
          추가이미지
          <span>
            (<span>{images.length - 1}</span>/9)
          </span>
        </div>
        <div className="addImg">
          <div className="subAddImg">
            {compImages.map((el, idx) => {
              return (<AddImgBox labelName={`sub_${idx}`} key={idx} onClick={subAddbtnClick} onCancleClick={subCancleClick} img={el.img} id={el.id} />)
            })}
          </div>
          <button className="changeBtn">순서 변경</button>
          <p className="description">
            권장 크기 : 1000 x 1000 (윈도대상 750 x 1000)
            <br />
            추가이미지는 최대 9개까지 설정할 수 있습니다.
            <br />
            jpg,jpeg,gif,png,bmp 형식의 정지 이미지만 등록됩니다.(움직이는
            이미지의 경우 첫 번째 컷이 등록)
          </p>
        </div>
      </div>
    </ProductAddImgDiv>
  );
};

const DescriptionBody = ({ isOpen }) => {

  return (
    <DescriptionDiv className={isOpen ? "" : "close"}>
      <DetailExplain isProductRegist={true} />
    </DescriptionDiv>
  )
};

const rentalMonthSet = new Set();
const PriceInfoBody = ({ isOpen }) => {

  const [rentalOption1, setRentalOption1] = useState(true);
  const [rentalOption2, setRentalOption2] = useState(true);
  const [rentalOption3, setRentalOption3] = useState(true);
  const [rentalOption4, setRentalOption4] = useState(true);
  const [rentalOption5, setRentalOption5] = useState(true);
  const [money, setMoney] = useState(0);
  const [letterMoney, setLetterMoney] = useState("");
  const dispatch = useDispatch();



  const cancelClick = () => {
    setMoney(0);
    setLetterMoney("");
    dispatch(setOrigialPrice(0));
  };

  const inputChange = (e) => {
    let inputMoney = e.target.value.replace(/[^0-9]/g, "").replace(/(^0+)/, "");
    setMoney(inputMoney);
    setLetterMoney(_fmtNumberKor(inputMoney));

    dispatch(setOrigialPrice(inputMoney));
  };

  function _fmtNumberKor(val) {
    var numKor = new Array(
      "",
      "일",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "칠",
      "팔",
      "구",
      "십"
    ); // 숫자 문자
    var danKor = new Array(
      "",
      "십",
      "백",
      "천",
      "",
      "십",
      "백",
      "천",
      "",
      "십",
      "백",
      "천",
      "",
      "십",
      "백",
      "천"
    ); // 만위 문자열
    var result = "";

    if (val && !isNaN(val)) {
      for (let i = 0; i < val.length; i++) {
        var str = "";
        var num = numKor[val.charAt(val.length - (i + 1))];
        if (num != "") str += num + danKor[i]; // 숫자가 0인 경우 텍스트를 표현하지 않음
        switch (i) {
          case 4:
            str += "만";
            break;
          case 8:
            str += "억";
            break;
          case 12:
            str += "조";
            break;
        }
        result = str + result;
      }
    }

    return result;
  }

  const onChangeRentalMonth = (e) => {
    switch (e.target.id) {
      case "12":
        setRentalOption1(prev => !prev)
        if (rentalOption1) {
          rentalMonthSet.add(e.target.id)
        } else {
          rentalMonthSet.delete(e.target.id)
        }
        break;
      case "24":
        setRentalOption2(prev => !prev)
        if (rentalOption2) {
          rentalMonthSet.add(e.target.id)
        } else {
          rentalMonthSet.delete(e.target.id)
        }
        break;
      case "36":
        setRentalOption3(prev => !prev)
        if (rentalOption3) {
          rentalMonthSet.add(e.target.id)
        } else {
          rentalMonthSet.delete(e.target.id)
        }
        break;
      case "48":
        setRentalOption4(prev => !prev)
        if (rentalOption4) {
          rentalMonthSet.add(e.target.id)
        } else {
          rentalMonthSet.delete(e.target.id)
        }
        break;
      case "60":
        setRentalOption5(prev => !prev)
        if (rentalOption5) {
          rentalMonthSet.add(e.target.id)
        } else {
          rentalMonthSet.delete(e.target.id)
        }
        break;
      default:
        break;
    }
    dispatch(setRentalMonth([...rentalMonthSet]))
  }

  useEffect(() => {
    let data = localStorage.getItem('productTmpInfo');

    if (data != null) {
      data = JSON.parse(data);
      // 가격 다시 등록
      setMoney(data.originalPrice)
      dispatch(setOrigialPrice(data.originalPrice));

      if (data.rentalMonth.length > 0) {
        data.rentalMonth.forEach(element => {
          switch (element) {
            case "12":
              setRentalOption1(prev => !prev)
              rentalMonthSet.add(element);
              break;
            case "24":
              setRentalOption2(prev => !prev)
              rentalMonthSet.add(element);
              break;
            case "36":
              setRentalOption3(prev => !prev)
              rentalMonthSet.add(element);
              break;
            case "48":
              setRentalOption4(prev => !prev)
              rentalMonthSet.add(element);
              break;
            case "60":
              setRentalOption5(prev => !prev)
              rentalMonthSet.add(element);
              break;
            default:
              break;
          }
        });
        dispatch(setRentalMonth(data.rentalMonth))
      }
    }
  }, [])

  return (
    <PriceInfoDiv className={isOpen ? "" : "close"}>
      <div className="priceWrapper">
        <div className="price">
          <div className="title">
            <span>판매가</span>
            <DotDiv />
          </div>
          <div className="inputWrapper">
            <input type="text" onChange={inputChange} value={money} />
            <div className="cancelImage">
              <img
                src={process.env.PUBLIC_URL + `/assets/cancelLight.png`}
                onClick={cancelClick}
              />
            </div>
          </div>
          <p className="won">원</p>
          <p>{letterMoney}  원</p>
        </div>
        <div className="rentalMonth">
          <div className="title">
            <span>랜탈 개월수</span>
            <DotDiv />
          </div>
          <ul>
            <li id="12" className={rentalOption1 ? "" : "clicked"} onClick={onChangeRentalMonth}>12개월</li>
            <li id="24" className={rentalOption2 ? "" : "clicked"} onClick={onChangeRentalMonth}>24개월</li>
            <li id="36" className={rentalOption3 ? "" : "clicked"} onClick={onChangeRentalMonth}>36개월</li>
            <li id="48" className={rentalOption4 ? "" : "clicked"} onClick={onChangeRentalMonth}>48개월</li>
            <li id="60" className={rentalOption5 ? "" : "clicked"} onClick={onChangeRentalMonth}>60개월</li>
          </ul>
        </div>
      </div>
    </PriceInfoDiv>
  )
};

export default function ProductRegist() {
  const dispatch = useDispatch();
  const sendData = useSelector(state => state.productRegist);
  const navigate = useNavigate();
  // const selector = useSelector(state => state.productList);


  const sendDatatoServer = () => {
    const url = '/api/master/products';
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const formData = new FormData();
    const body = {
      name: sendData.name,
      brandName: sendData.brandName,
      originalPrice: sendData.originalPrice,
      rentalMonths: sendData.rentalMonth,
      titleImage: "",
      modelName: "",
      vendorName: sendData.vendorName,
      images: [],
      prices: [],
      description: sendData.description,
      categoryId: 102,
    }
    // 이미지 전처리 필요
    const titleImg = dataURLtoFile(sendData.titleImage, 'titileImage.png');

    if (sendData.images.length > 0) {
      sendData.images.forEach((element, idx) => {
        const subImgFile = dataURLtoFile(element, `subImg_${idx}.png`);
        formData.append('subImages', subImgFile)
      });
    }

    formData.append('titleImage', titleImg);
    formData.append('product', JSON.stringify(body));

    const addProduct = async () => {
      try {
        const result = await axios.post(url, formData, config)
          .then((res) => { return res });
        return result;
      } catch (err) {
        console.log("err:", err)
      }

    }

    (async () => {
      const result = await addProduct();
      if (result.status === 200) {
        alert('상품 등록 완료했습니다.');
        // 상품등록 완료 후, 초기화
        dispatch(reset());
        // 로컬 초기화
        localStorage.clear();
        navigate(-1);
      } else if (result.status === 401) {
        alert('상품 등록 중 실패하였습니다. 다시 시도 부탁드립니다.');
        navigate('/backoffice/productregist');
      }
    })();
  }

  // middlware로 등록하기
  const onClickSaveBtn = (e) => {
    if (sendData.name === ""
      || sendData.brandName === ""
      || sendData.titleImage === ""
      || sendData.originalPrice === 0
      || sendData.description === "") {
      alert("필수 데이터가 없습니다.")
      return;
    } else {

      const date = new Date();
      const year = date.getFullYear();
      const month = ("0" + (1 + date.getMonth())).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const body = {
        id: 1,
        name: sendData.name,
        productNumber: setProductNumer(6),
        modelName: sendData.brandName,
        brandName: sendData.brandName,
        vendorName: sendData.brandName,
        categoryId: 1,
        titleImage: "Y",
        rentalMonths: [sendData.rentalMonth[0]],
        originalPrice: sendData.originalPrice,
        images: [],
        prices: [
          {
            month: parseInt(sendData.rentalMonth[0]),
            price: sendData.originalPrice
          }
        ],
        description: sendData.description,
        createdAt: year + "-" + month + "-" + day,
      }

      dispatch(addProduct(body));
      localStorage.clear();
      alert("상품등록 완료 !!");
      navigate('/backoffice/productinquiry');
    }
  }

  const onCancleBtnClick = () => {
    navigate(-1);
  }

  const onTemporaryBtnClick = () => {
    localStorage.setItem('productTmpInfo', JSON.stringify(sendData));
    alert("임시 저장 완료");
  }



  useEffect(() => {
    let data = localStorage.getItem('productTmpInfo');

    if (data != null) {
      return;
    } else {
      if (!sendData.isSave) dispatch(reset());
    }
  }, [])

  return (
    <>
      <Header menuState={"product"} />
      <ProductEditDiv>
        <PageTitle title="상품등록" buttonBox={false} />
        <div className="productAddWrapper">
          <ProductInfo status={"PRODUCTNAME"} />
          <ProductInfo status={"PRODUCTINFO"} />
          <ProductInfo status={"PRICEINFO"} />
          <ProductInfo status={"PRODUCTIMAGE"} />
          <ProductInfo status={"DESCRIPTION"} />
        </div>
        <div className="buttons">
          <ProductPageBtn onClick={onTemporaryBtnClick}>임시저장</ProductPageBtn>
          <ProductPageBtn className="skyBlueBtn" onClick={onClickSaveBtn}>저장하기</ProductPageBtn>
          <ProductPageBtn className="whiteBtn" onClick={onCancleBtnClick}>취소하기</ProductPageBtn>
        </div>
        <Footer />
      </ProductEditDiv>
    </>
  );
}


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


const setProductNumer = (n) => {
  let str = ''
  for (let i = 0; i < n; i++) {
    str += Math.floor(Math.random() * 10)
  }

  return str;
}