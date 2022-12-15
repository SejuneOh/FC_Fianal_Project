import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userInfo from "./userInfo";
import productInfo from "./productInfo";
import productRegist from "../../backOffice/reducers/productRegistReducer";
import loginInfo from "../../backOffice/reducers/loginSlice";
import signinInfo from "../../backOffice/reducers/signinSlice";
import publicData from "./publicData";
import partnerInfo from "../../backOffice/reducers/partnerSlice";
import productList from "../../backOffice/reducers/productList";

export const rootReducer = combineReducers({
    productInfo,
    userInfo,
    loginInfo,
    signinInfo,
    publicData,
    productRegist,
    partnerInfo,
    productList,
});
