import mongoose from 'mongoose'
import mongooseSequence from 'mongoose-sequence';

const AutoIncrement = mongooseSequence(mongoose);

const { Schema } = mongoose;

const productSchema = new Schema({
  id: { type: Number, unique: true }, // index id
  name: { type: String, required: true },
  productNumber: { type: Number, required: true, unique: true }, // 상품번호
  modelName: { type: String }, // 모델명
  vendorName: { type: String, required: true }, //제조사 이름
  brandName: { type: String, required: true }, // 브랜드 이름
  categoryId: { type: Number, required: true }, // 카테고리 id
  isPayment: { type: Boolean, required: true }, // 결제 여부
  titleImage: { type: String, required: true }, // 타이틀 이미지
  images: [String], // 서브이미지
  rentalMonths: [String], //렌탈 개월수
  originalPrice: { type: Number, required: true },
  prices: [
    {
      month: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  description: { type: String },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date },
})

productSchema.plugin(AutoIncrement, { id: "product_id_counter", inc_field: "id" })
const Product = mongoose.model('Product', productSchema);

export default Product;



