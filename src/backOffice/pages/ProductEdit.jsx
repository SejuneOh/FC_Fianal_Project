import React, { useEffect, useRef, useState } from "react";
import DetailExplain from '../components/DetailExplain';
import Header from '../components/Header'
import PageTitle from '../components/PageTitle'
import {
  ProductEditDiv, ProductInfoStyle,
  ProductPageBtn, TitleDivStyle, DotDiv, ProductNmStyle, HellperIcon,
  ProductBrandDiv, PriceInfoDiv, ProductAddImgDiv, DescriptionDiv, AddImgBoxStyle
} from '../styles/ProductEditStyle'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import { amendProduct } from "../reducers/productList";



let cnt = 1;


// 조건부 상품  컴포넌트  렌더링하는 부분
const ProductInfo = ({ status, productData, onChange }) => {
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
      body: <ProductNameBody isOpen={nameOpen} data={productData} onChange={onChange} />,
    },
    PRODUCTINFO: {
      title: "상품 주요정보",
      essential: true,
      helper: false,
      isUse: true,
      body: <ProductBrandBody isOpen={infoOpen} data={productData} onChange={onChange} />,
    },
    PRICEINFO: {
      title: "판매가",
      essential: true,
      helper: false,
      isUse: true,
      body: <PriceInfoBody isOpen={priceOpen} data={productData} onChange={onChange} />,
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
      body: <DescriptionBody isOpen={descriptionOpen} data={productData} onChange={onChange} />,
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

// 페이지 타이틀
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

// 상품 이름
const ProductNameBody = ({ isOpen, data = "", onChange }) => {
  const [letterCnt, setLetterCnt] = useState(0);
  const [productName, setProductName] = useState("");


  const nameOnChange = (e) => {
    setLetterCnt(e.target.value.length);
    setProductName(e.target.value);

    onChange(e.target.value);
  }

  //  최초 로컬 스토리지에 임시저장 파일이 있으면, 불러온다.
  useEffect(() => {
    setProductName(data);
    setLetterCnt(data.length);

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

//상품 브랜드
const ProductBrandBody = ({ isOpen, data = "", onChange }) => {

  const [isCheck, setIsCheck] = useState(true);
  const [brand, setBrand] = useState("");
  const inputRef = useRef();

  const inputChange = (e) => {
    setIsCheck(prev => !prev)
    if (isCheck) {
      setBrand("개인 브랜드");
      onChange("개인 브랜드");
    } else {
      setBrand("");
      onChange("");
    }
  }

  const brandBtnClick = (e) => {
    e.preventDefault();

    if (isCheck) {
      setBrand("");
      onChange("");
    }
  }

  const brandInputChanged = (e) => {
    setBrand(e.target.value);
    onChange(e.target.value);
  }

  //  최초 로컬 스토리지에 임시저장 파일이 있으면, 불러온다.
  useEffect(() => {
    setBrand(data)
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

// 상품 각격
const rentalMonthSet = new Set();
const PriceInfoBody = ({ isOpen, data = {}, onChange }) => {

  const [rentalOption1, setRentalOption1] = useState(true);
  const [rentalOption2, setRentalOption2] = useState(true);
  const [rentalOption3, setRentalOption3] = useState(true);
  const [rentalOption4, setRentalOption4] = useState(true);
  const [rentalOption5, setRentalOption5] = useState(true);
  const [money, setMoney] = useState(0);
  const [letterMoney, setLetterMoney] = useState("");





  const cancelClick = () => {
    setMoney(0);
    setLetterMoney("");
    data.originalPrice = 0;
    onChange(data);
  };

  const inputChange = (e) => {
    let inputMoney = e.target.value.replace(/[^0-9]/g, "").replace(/(^0+)/, "");
    setMoney(inputMoney);
    setLetterMoney(_fmtNumberKor(inputMoney));

    // 수정 데이터 전달
    data.originalPrice = inputMoney;
    onChange(data);
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
        data.rentalMonth = [...rentalMonthSet];
        onChange(data);
        break;
      case "24":
        setRentalOption2(prev => !prev)
        if (rentalOption2) {
          rentalMonthSet.add(e.target.id)
        } else {
          rentalMonthSet.delete(e.target.id)
        }
        data.rentalMonth = [...rentalMonthSet];
        onChange(data);
        break;
      case "36":
        setRentalOption3(prev => !prev)
        if (rentalOption3) {
          rentalMonthSet.add(e.target.id)
        } else {
          rentalMonthSet.delete(e.target.id)
        }
        data.rentalMonth = [...rentalMonthSet];
        onChange(data);
        break;
      case "48":
        setRentalOption4(prev => !prev)
        if (rentalOption4) {
          rentalMonthSet.add(e.target.id)
        } else {
          rentalMonthSet.delete(e.target.id)
        }
        data.rentalMonth = [...rentalMonthSet];
        onChange(data);
        break;
      case "60":
        setRentalOption5(prev => !prev)
        if (rentalOption5) {
          rentalMonthSet.add(e.target.id)
        } else {
          rentalMonthSet.delete(e.target.id)
        }
        data.rentalMonth = [...rentalMonthSet];
        onChange(data);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    //  데이터 가져와서 세팅
    setMoney(data.originalPrice);
    setLetterMoney(_fmtNumberKor(data.originalPrice.toString()));

    if (data.rentalMonth.length > 0) {
      data.rentalMonth.forEach(el => {
        switch (el) {
          case "12":
            setRentalOption1(prev => !prev)
            rentalMonthSet.add(el);
            break;
          case "24":
            setRentalOption2(prev => !prev)
            rentalMonthSet.add(el);
            break;
          case "36":
            setRentalOption3(prev => !prev)
            rentalMonthSet.add(el);
            break;
          case "48":
            setRentalOption4(prev => !prev)
            rentalMonthSet.add(el);
            break;
          case "60":
            setRentalOption5(prev => !prev)
            rentalMonthSet.add(el);
            break;
          default:
            break;
        }
      });
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
}

// 상품 이미지
const ProductAddImgBody = ({ isOpen }) => {
  // useSelector
  const images = useSelector(state => state.productRegist.images);
  const [compImages, setCompImages] = useState(images);

  const titileImg = useSelector(state => state.productRegist.titleImage);
  const [compTitleImg, setCompTittleImg] = useState(titileImg);

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
      setCompTittleImg(base64Img);
    })();
  }

  // 메인 이미지 박스 취소 버튼
  const onCancleClick = (e) => {
    setCompTittleImg('');
  }

  const subAddbtnClick = (e) => {
    const file = e.target.files[0];
    const getBase64File = async () => { return await toBase64(file); }
    (async () => {
      const base64Img = await getBase64File();
      const data = { id: cnt, img: base64Img };
      setCompImages(prev => [data, ...prev]);
      cnt++;
    })();
  }

  const subCancleClick = (id) => {
    setCompImages(prev => prev.filter(el => el.id !== id));
  }

  useEffect(() => {
    let data = localStorage.getItem('productTmpInfo');

    if (data != null) {
      data = JSON.parse(data);
      setCompTittleImg(data.titleImage)
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

// 상세설명
const DescriptionBody = ({ isOpen, data = "", onChange }) => {

  const obj = {
    data,
    changeEvent: onChange
  }

  return (
    <DescriptionDiv className={isOpen ? "" : "close"}>
      <DetailExplain isProductRegist={false} editObj={obj} />
    </DescriptionDiv>
  )
}


export default function ProductEdit() {
  const [editProduct, setEditProduct] = useState({});
  const productList = useSelector(state => state.productList.productInfo);
  const dispatch = useDispatch();
  const { productNum } = useParams();
  const navigate = useNavigate();


  const onClickSaveBtn = (e) => {
    e.preventDefault();
    const data = editProduct
    dispatch(amendProduct(data));

    alert('수정 저장 완료 했습니다.');
    navigate('/backoffice/productinquiry');
  }

  const onCancleBtnClick = () => {
    navigate('/backoffice/productinquiry');
  }

  // 이름 변경
  const productNameOnChange = (name) => {
    editProduct.name = name;
  }

  // 브랜드 변경
  const productBrandOnChange = (brand) => {
    editProduct.brandName = brand;
  }

  //가격 및 렌탈 개월수 변경
  const priceInfoOnChange = (data) => {
    editProduct.originalPrice = data.originalPrice;
    editProduct.rentalMonth = data.rentalMonth.sort();
  }

  // 상세설명 수정
  const productDesOnChange = (description) => {
    editProduct.description = description
  }

  useEffect(() => {
    //  검색할 상품 번호가 없는 경우
    if (productNum === "") {
      alert('검색 상품번호가 없습니다.');
      navigate('/backoffice/productinquiry');
      return;
    }

    const copy = JSON.parse(JSON.stringify(productList));


    // 상품 검색
    const product = copy.filter((el) => {
      const number = parseInt(productNum)
      return el.productNumber === number
    })

    // 검색 상품이 없을 때,
    if (product.length === 0) {
      alert('검색 상품이 없습니다.');
      navigate('/backoffice/productinquiry');
      return;
    };

    setEditProduct(prev => product[0]);
  }, [])

  return (
    <>
      <Header menuState={"product"} />
      <ProductEditDiv>
        <PageTitle title="상품수정" buttonBox={false} />
        <div className="productAddWrapper">
          {!isEmptyObj(editProduct)
            &&
            <>
              <ProductInfo status={"PRODUCTNAME"} productData={editProduct.name} onChange={productNameOnChange} />
              <ProductInfo status={"PRODUCTINFO"} productData={editProduct.brandName} onChange={productBrandOnChange} />
              {/* 상품 개월 수, 가격 */}
              <ProductInfo status={"PRICEINFO"} productData={
                {
                  originalPrice: editProduct.originalPrice,
                  rentalMonth: editProduct.rentalMonths
                }
              }
                onChange={priceInfoOnChange}
              />
              <ProductInfo status={"PRODUCTIMAGE"} />
              <ProductInfo status={"DESCRIPTION"} productData={editProduct.description} onChange={productDesOnChange} />
            </>
          }
        </div>
        <div className="buttons">
          <ProductPageBtn className="skyBlueBtn" onClick={onClickSaveBtn}>저장하기</ProductPageBtn>
          <ProductPageBtn className="whiteBtn" onClick={onCancleBtnClick}>취소하기</ProductPageBtn>
        </div>
      </ProductEditDiv>
    </>
  )
}



function isEmptyObj(obj) {
  if (obj.constructor === Object
    && Object.keys(obj).length === 0) {
    return true;
  }

  return false;
}