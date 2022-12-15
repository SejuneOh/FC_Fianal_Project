//import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Home";
//꾸다
import Kkuda from "./kkuda/pages/Kkuda";
import ProductDetail from "./kkuda/pages/ProductDetail";
import Order from "./kkuda/pages/Order";
import OrderConfirm from "./kkuda/pages/OrderConfirm";
import OrderCompleted from "./kkuda/pages/OrderCompleted";

//백오피스
import BackOffice from "./backOffice/pages/BackOffice";
import Main from "./backOffice/pages/Main";
import MasterOrder from "./backOffice/pages/MasterOrder";
import Mypage from "./backOffice/pages/Mypage";
import PartnerInfo from "./backOffice/pages/PartnerInfo";
import Login from "./backOffice/pages/Login";
import Signup from "./backOffice/pages/Signup";
import ProductRegist from "./backOffice/pages/ProductRegist";
import ProductInquiry from "./backOffice/pages/ProductInquiry";
import ProductAllUpload from "./backOffice/pages/ProductAllUpload";
import MasterDetailOrder from "./backOffice/pages/MasterDetailOrder";
import DeliveryInquiry from "./backOffice/pages/DeliveryInquiry";
import PartnerRegister from "./backOffice/pages/PartnerRegister";
import PartnerInquiry from "./backOffice/pages/PartnerInquiry";
import PartnerInfoInput from "./backOffice/pages/PartnerInfoInput";
import MypageEdit from "./backOffice/pages/MypageEdit";
import PrivatePublicRoute from "./backOffice/components/PrivatePublicRoute";
import PrivateMasterRoute from "./backOffice/components/PrivateMasterRoute";
import PrivateVendorRoute from "./backOffice/components/PrivateVendorRoute";
import PublicRoute from "./backOffice/components/PublicRoute";
import ProductEdit from "./backOffice/pages/ProductEdit";
import CustomerInquiry from "./backOffice/pages/CustomerInquiry";

function App() {
  const loginInfo = useSelector((state) => state.loginInfo);
  const access = loginInfo.authority;

  return (
    <Routes>
      {/* Kkuda */}
      <Route path="/" element={<Home />} />
      <Route path="/kkuda" element={<Kkuda />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/kkuda/order" element={<Order />} />
      <Route path="/kkuda/order/orderconfirm" element={<OrderConfirm />} />
      <Route path="/kkuda/order/orderconfirm/ordercompleted" element={<OrderCompleted />} />

      {/* Back Office */}
      {/* <Route path="/backoffice" element={<BackOffice />} /> */}
      <Route path="/backoffice" element={<PrivatePublicRoute authenticated={access} component={<Main />} />} />
      <Route path="/backoffice/masterorder" element={<PrivatePublicRoute authenticated={access} component={<MasterOrder />} />} />
      <Route path="/backoffice/mypage" element={<PrivateVendorRoute authenticated={access} component={<Mypage />} />} />
      <Route
        path="/backoffice/partnerinquiry/partnerinfo/:brandName"
        element={<PrivateMasterRoute authenticated={access} component={<PartnerInfo />} />}
      />
      <Route path="/backoffice/mypageEdit" element={<PrivateVendorRoute authenticated={access} component={<MypageEdit />} />} />
      <Route
        path="/backoffice/partnerinquiry/partnerinput"
        element={<PrivateMasterRoute authenticated={access} component={<PartnerInfoInput />} />}
      />
      {/* <Route path="/backoffice/login" element={<PublicRoute authenticated={access} component={<Login />} />} /> */}
      {/* <Route path="/backoffice/signup" element={<PublicRoute authenticated={access} component={<Signup />} />} /> */}
      <Route path="/backoffice/login" element={<Login />} />
      <Route path="/backoffice/signup" element={<Signup />} />
      <Route path="/backoffice/productregist" element={<PrivateMasterRoute authenticated={access} component={<ProductRegist />} />} />
      <Route path="/backoffice/productinquiry" element={<PrivateMasterRoute authenticated={access} component={<ProductInquiry />} />} />
      <Route path="/backoffice/productallupload" element={<PrivateMasterRoute authenticated={access} component={<ProductAllUpload />} />} />
      <Route
        path="/backoffice/masterorder/masterdetailorder/:orderNum"
        element={<PrivatePublicRoute authenticated={access} component={<MasterDetailOrder />} />}
      />
      <Route path="/backoffice/deliveryInquiry" element={<PrivatePublicRoute authenticated={access} component={<DeliveryInquiry />} />} />
      <Route path="/backoffice/partnerregister" element={<PrivateMasterRoute authenticated={access} component={<PartnerRegister />} />} />
      <Route path="/backoffice/partnerinquiry" element={<PrivateMasterRoute authenticated={access} component={<PartnerInquiry />} />} />
      <Route path="/backoffice/customerinquiry" element={<PrivateMasterRoute authenticated={access} component={<CustomerInquiry />} />} />

      {/* 상품수정 개발하는 동안 접근 가능하게  변경 */}
      <Route path="/backoffice/productedit/:productNum" element={<ProductEdit />} />
      {/* <Route path="/backoffice/main" element={<Main />} /> */}
    </Routes>
  );
}

export default App;
