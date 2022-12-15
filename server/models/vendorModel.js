import mongoose from "mongoose";
import mongooseSequence from 'mongoose-sequence';

const AutoIncrement = mongooseSequence(mongoose);
const { Schema } = mongoose;

const vendorSchema = new Schema({
  email: { type: String, required: true, unique: true }, // id
  password: { type: String, required: true, }, //비밀번호
  companyName: { type: String, required: true, }, //업체명
  brandName: { type: String, required: true, }, //브랜드 이름
  address: { type: String, required: true, }, // 사업자 주소
  authority: { type: String },                     //권한
  representativeName: { type: String, required: true }, //대표자명
  representativeEmail: { type: String, required: true }, // 대표자 이메일
  businessmanName: { type: String, required: true }, //사업자명
  businessNum: { type: String, required: true }, // 사업자 등록번호
  businessNum: { type: String, required: true }, // 사업자 등록번호
  businessNum: { type: String, required: true }, // 사업자 등록번호
  taxBillEmail: { type: String, required: true }, // 세금 이메일
  managerName: { type: String, required: true }, // 담당자명
  managerContact: { type: String, required: true }, // 담당자 전화번호
  managerEmail: { type: String, required: true }, // 담당자 이메일
  brandImage: { type: String, required: true }, //브랜드 이미지
  businessImage: { type: String, required: true }, //사업자 등록번호 이미지 
  passbookImage: { type: String, required: true }, // 통장 사본 이미지
  createdAt: { type: Date, required: true },  //생성일
  updatedAt: { type: Date, default: null },  // 업데이트일
  remember: { type: Boolean }
})


vendorSchema.plugin(AutoIncrement, { id: "vendor_id_counter", inc_field: "id" })

const Vendor = mongoose.model('vendor', vendorSchema);
export default Vendor;