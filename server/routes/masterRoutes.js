import { Router } from "express";
import { adminLogin } from "../controllers/loginControllers.js";
import { getProducts, addProduct, getProductById } from '../controllers/productControllers.js'
import { adminRegist } from "../controllers/registControllers.js";
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
      cb(null, false);
      return cb(new Error('Only .png .jpg and .jpeg format allowed!'));
    }
  }
})

// 상품등록
router.post('/products', upload.fields(
  [
    { name: 'titleImage', maxCount: 1 },
    { name: 'subImages', maxCount: 10 },
  ]
), addProduct); // 개별 상품등록


//상품 조회   url : api/master/products
router.get('/products', getProducts)



// admin 
router.post('/administrators', adminRegist) //등록
router.post('/auth', adminLogin) //로그인


export default router;