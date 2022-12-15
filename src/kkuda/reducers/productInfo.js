import { createSlice } from "@reduxjs/toolkit";

export const productInfo = createSlice({
    name: "product",
    initialState: {
        productInfo: [],
    },

    reducers: {
        addProductInfo: (state, action) => {
            return {
                productInfo: action.payload,
            };
        },
    },
});

export const { addProductInfo } = productInfo.actions;

export default productInfo.reducer;
