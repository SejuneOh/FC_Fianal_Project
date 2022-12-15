import { Product, isEmptyObj } from '../models/index.js'
import fs from 'fs'

export const addProduct = (req, res) => {

  const imagePath = req.protocol + '://' + req.get('host') + '/public/';
  const body = JSON.parse(req.body.product);
  const uniqueId = setProductNumer(6);
  let titleImage = "";
  let subImages = [];
  let delTitleImage = "";
  let delSubImages = [];
  let _prices = [];


  try {
    // 잘못된 reqest object 예외처리
    if (isEmptyObj(body)) {
      res.status(202).json({ successful: false, msg: "wrong data" })
      return;
    }

    // 상품명, 브랜드 이름, 원가의 가격 예외처리
    if (body.name.length === 0 || body.brandName.length === 0
      || body.originalPrice <= 0) {
      res.status(203).json({ successful: false, msg: "필수데이터가 없습니다." });
      return;
    }

    //이미지 예외처리
    if (req.files.titleImage.length === 0) {
      res.status(203).json({ successful: false, msg: "필수데이터가 없습니다." });
      return;
    } else {
      titleImage = imagePath + req.files.titleImage[0].filename;
      delTitleImage = req.files.titleImage[0].destination + "/" + req.files.titleImage[0].filename;
    }

    if (req.files.subImages.length > 0) {
      delSubImages = req.files.subImages.map(el => {
        return el.destination + "/" + el.filename
      })

      subImages = req.files.subImages.map(el => {
        return imagePath + el.filename;
      })
    }

    // 렌탈 개월 수 관련 가격 처리
    if (body.rentalMonths.length === 0) {
      _prices = [
        {
          month: 0,
          price: body.originalPrice,
        }
      ]
    } else {
      _prices = body.rentalMonths.map(el => {
        const month = parseInt(el);
        if (month === 0) {
          return { month, price: body.originalPrice }
        } else {
          return { month, price: Math.floor(body.originalPrice / month) }
        }
      })
    }

    const newProduct = new Product({
      name: body.name,
      productNumber: uniqueId,
      modelName: body.modelName,
      vendorName: body.vendorName,
      brandName: body.brandName,
      isPayment: true,
      titleImage: titleImage,
      images: subImages,
      rentalMonths: body.rentalMonths,
      originalPrice: body.originalPrice,
      prices: _prices,
      description: body.description,
      categoryId: parseInt(body.categoryId),
      createdAt: new Date(),
      updatedAt: null
    })

    newProduct.save((err) => {
      if (err) {
        console.log("저장 중 실패", err);
        if (delTitleImage.length > 0 && delSubImages.length > 0) {
          deleteFile(delTitleImage);
          deleteFile(delSubImages);
        }
        res.status(401).json({ successful: false, msg: "저장 중 실패" });
      } else {

        res.status(200).json({ successful: true, msg: "상품등록 성공" });
      }
    })

  } catch (err) {
    if (delTitleImage.length > 0 && delSubImages.length > 0) {
      deleteFile(delTitleImage);
      deleteFile(delSubImages);
    }
    res.status(501).json({ successful: false, msg: `서버오류:${err}` })
  }
}

// 상품 검색  검색 날짜만 있는 것으로
export const getProducts = (req, res) => {

  console.log("req:", req.query);
  let query = null;


  const checkDate = (date) => {
    if (Date.parse(date) === NaN) {
      return false;
    } else {
      return true;
    }
  }

  if (!checkDate(req.query.startDate) || !checkDate(req.query.endDate)
    || req.query.startDate === "" || req.query.endDate === "" || isEmptyObj(req.query)) {
    query = Product.find({}).limit(200);
  } else {
    query = Product.find({
      "createdAt": {
        "$gte": req.query.startDate, "$lte": req.query.endDate
      }
    })
  }

  try {
    query.exec((err, result) => {
      if (result) {
        res.status(200).json({ result, total: result.length })
      } else {
        res.status(201).json({ msg: "검색 중 Error", error: err })
      }
    })
  } catch (err) {
    res.status(501).json({ successful: false, msg: `서버오류:${err}` })
  }
}

export const getProductById = (req, res) => {

}



// 6자리 숫자 상품번호 생성
const setProductNumer = (n) => {
  let str = ''
  for (let i = 0; i < n; i++) {
    str += Math.floor(Math.random() * 10)
  }

  return str;
}


function deleteFile(file) {
  try {
    if (Array.isArray(file)) {
      file.forEach(element => {
        fs.unlinkSync(element)
      });
    } else {
      fs.unlinkSync(file)
    }
  } catch (err) {
    console.log(err);
  }
}