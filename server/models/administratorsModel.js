import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';



const AutoIncrement = mongooseSequence(mongoose);
const { Schema } = mongoose;

const adminSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  nickname: { type: String },
  department: { type: String, required: true },
  position: { type: String, required: true },
  groups: [
    {
      name: { type: String },
      id: { type: Number }
    }
  ],
  id: { type: Number },
  enabled: { type: Boolean },
  tel: { type: String, required: true },
  memo: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  remember: { type: Boolean }
})

adminSchema.plugin(AutoIncrement, { id: "admin_id_counter", inc_field: "id" })
const Admin = mongoose.model('Admin', adminSchema)
export default Admin;