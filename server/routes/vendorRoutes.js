import { Router } from "express";
import { getProducts, addProduct, getProductById } from '../controllers/productControllers.js'
import { venderRegist } from "../controllers/registControllers.js";
import { vendorLogin } from "../controllers/loginControllers.js";
import multer from 'multer';
import uuid4 from 'uuid4';


const router = Router();
const DIR = './public';

// 파일 이름 저장 storage 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const filename = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuid4() + '-' + filename);
  }

});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png"
      || file.mimetype == "image/jpg"
      || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      ㅞ
      cb(null, false);
      return cb(new Error('Only .png .jpg and .jpeg format allowed!'));
    }
  }
})



// 판매자 회원가입
router.post('/auth/register',
  upload.fields([{ name: 'brandImage' }, { name: 'businessImage' }, { name: 'passbookImage' }]),
  venderRegist);

//판매자 로그인
router.post('/auth', vendorLogin);

export default router;