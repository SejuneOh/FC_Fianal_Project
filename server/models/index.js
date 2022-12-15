import Admin from './administratorsModel.js';
import Product from './productModel.js'
import Vendor from './vendorModel.js'


export { Product, Vendor, Admin, isEmptyObj };



function isEmptyObj(obj) {
  if (obj.constructor === Object
    && Object.keys(obj).length === 0) {
    return true;
  }

  return false;
}