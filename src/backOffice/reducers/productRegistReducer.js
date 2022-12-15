import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  productNumber: 0,
  modelName: "",
  vendorName: "",
  brandName: "",
  categoryId: 0,
  isPayment: false,
  titleImage: "",
  images: [{ id: 0, img: "" }],
  rentalMonth: [],
  originalPrice: 0,
  prices: [],
  description: "",
  createAt: null,
  updateAt: null,
}

export const productRegist = createSlice({
  name: "productRegist",
  initialState,
  reducers: {
    setName: (state, action) => {
      return { ...state, name: action.payload }
    },
    setModelName: (state, action) => {
      return { ...state, modelName: action.payload }
    },
    setBrandName: (state, action) => {
      return { ...state, brandName: action.payload, vendorName: action.payload }
    },
    setRentalMonth: (state, action) => {
      return { ...state, rentalMonth: action.payload }
    },
    setOrigialPrice: (state, action) => {
      return { ...state, originalPrice: action.payload }
    },
    setDescription: (state, action) => {
      return { ...state, description: action.payload };
    },
    setTitleImage: (state, action) => {
      return { ...state, titleImage: action.payload }
    },
    setImages: (state, action) => {
      return { ...state, images: action.payload }
    },
    reset: () => initialState,

  },
});

export const { setName, setModelName, setBrandName, setOrigialPrice, setDescription, setRentalMonth, setTitleImage, setImages, reset } = productRegist.actions;
export default productRegist.reducer;
