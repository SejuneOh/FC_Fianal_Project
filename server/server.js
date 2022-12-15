import dotenv from 'dotenv'
import mongoose from 'mongoose';
import express from 'express';

import masterRoutes from './routes/masterRoutes.js'
import vendorRoutes from './routes/vendorRoutes.js'

dotenv.config();
const server = express();




// middle ware
server.use(express.json());

// 로컬에서 접근 
server.use('/public', express.static('./public'))
server.use('/api/master', masterRoutes);
server.use('/api/vendor', vendorRoutes);


server.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('Something went wrong'));
  });
});



// mongo db 연결
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log("Connect Success!!");
      server.listen(4020, () => console.log("server start!!"))
    }
  });