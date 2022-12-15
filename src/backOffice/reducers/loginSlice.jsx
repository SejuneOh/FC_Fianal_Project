import { createSlice } from "@reduxjs/toolkit";

export const loginInfo = createSlice({
    name: "loginInfo",
    initialState: {
        id: "",
        password: 0,
        remember: true,
        authority: "",
        brandName: "",
    },

    reducers: {
        setLoginInfo: (state, action) => {
            // const {id, password, authority} = action.payload;
            return {
                ...state,
                id: action.payload.id,
                password: action.payload.password,
                authority: action.payload.authority,
                brandName: action.payload.brandName,
            };
        },
        logout: (state, action) => {
            return {
                ...state,
                id: "",
                password: 0,
                authority: "",
            };
        },
    },
});

export const { setLoginInfo, logout } = loginInfo.actions;

export default loginInfo.reducer;
