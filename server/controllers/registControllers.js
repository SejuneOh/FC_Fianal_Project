import { Admin, Vendor, isEmptyObj } from '../models/index.js'
import fs from 'fs'

//  admin 등록
export const adminRegist = (req, res) => {

  const body = req.body;

  if (isEmptyObj(body)) {
    res.status(404).json({ successful: false, msg: "Wrong Request Data" })
    return;
  }

  // type check
  if (typeof body.name !== 'string'
    || typeof body.department !== 'string'
    || typeof body.position !== 'string'
    || typeof body.tel !== 'string'
    || typeof body.password !== 'string') {
    res.status(201).json({ successful: false, msg: "Wrong Data type" })
    return;
  }

  const newAdmin = new Admin({
    "name": body.name,
    "password": body.password,
    "nickname": "KkudaTeam4",
    "department": body.department,
    "position": body.position,
    "group": [
      {
        "name": "",
        "id": 0,
      }
    ],
    "enabled": true,
    "tel": body.tel,
    "memo": "",
    "createdAt": new Date(),
    "updatedAt": null,
    "remember": false
  })

  newAdmin.save(function (err) {
    if (err) {
      // 실패
      res.status(500).json({ successful: false, msg: "Server Save Error" });
    } else {
      // 성공
      res.status(200).json({ successful: true, id: newAdmin.id, msg: "Admin Add Complete" });
    }
  })
}


export const venderRegist = (req, res) => {
  // post 데이터 받기
  const body = JSON.parse(req.body.vendor);
  const reqBrand = req.files.brandImage;
  const reqBusiness = req.files.businessImage;
  const reqPassbook = req.files.passbookImage;
  const delImages = new Set();


  // 서버이미지 저장 경로
  const url = req.protocol + '://' + req.get('host');

  //  빈객체 받기
  if (isEmptyObj(body) || body === null) {
    res.status(404).send("Wrong Request")
    return;
  }

  // 예외처리부분
  console.log('이거');
  if (reqBrand.length === 0) {
    res.status(203).json({ successful: false, msg: "브랜드 이미지가 없습니다." });
  } else {
    delImages.add(reqBrand[0].destination + '/' + reqBrand[0].filename);
  }

  if (reqBusiness.length === 0) {
    res.status(203).json({ successful: false, msg: "사업자등록증 이미지가 없습니다." });
  } else {
    delImages.add(reqBusiness[0].destination + '/' + reqBusiness[0].filename);
  }

  if (reqPassbook.length === 0) {
    res.status(203).json({ successful: false, msg: "브랜드 이미지가 없습니다." });
  } else {
    delImages.add(reqPassbook[0].destination + '/' + reqPassbook[0].filename);
  }



  try {
    const newVendor = new Vendor({
      email: body.email.replace(/ /g, ""),
      password: body.password.replace(/ /g, ""),
      companyName: body.companyName,
      brandName: body.brandName,
      address: body.address,
      authority: body.authority,
      representativeName: body.representativeName.replace(/ /g, ""),
      representativeEmail: body.representativeEmail.replace(/ /g, ""),
      businessmanName: body.businessmanName,
      businessNum: body.businessNum,
      taxBillEmail: body.taxBillEmail.replace(/ /g, ""),
      managerName: body.managerName.replace(/ /g, ""),
      managerContact: body.managerContact.replace(/ /g, ""),
      managerEmail: body.managerEmail.replace(/ /g, ""),
      brandImage: url + '/public/' + reqBrand[0].filename,
      businessImage: url + '/public/' + reqBusiness[0].filename,
      passbookImage: url + '/public/' + reqPassbook[0].filename,
      createdAt: new Date(),
      remember: false
    })

    newVendor.save(function (err) {
      if (err) {
        // 저장중 실패
        if (delImages.size > 0) {
          deleteFile([...delImages])
        }
        console.log("err!", err)
        res.status(201).json({ successful: false, msg: "가입 중 실패", error: err });
      } else {
        console.log("성공!!")
        res.status(200).json({ successful: true, msg: "가입완료" });
      }
    })
  } catch (err) {
    if (delImages.size > 0) {
      deleteFile([...delImages])
    }
    console.log("err!", err)
    res.status(500).json({ successful: false, msg: `서버 오류 : ${err}` });
  }
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


