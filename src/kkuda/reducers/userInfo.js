import { createSlice } from "@reduxjs/toolkit";

export const userInfo = createSlice({
    name: "user",
    initialState: {
        userInfo: [],
    },

    reducers: {
        addUserInfo: (state, action) => {
            return {
                userInfo: action.payload,
            };
        },
    },
});

export const { addUserInfo } = userInfo.actions;

export default userInfo.reducer;
