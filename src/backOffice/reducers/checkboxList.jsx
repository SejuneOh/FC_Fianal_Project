import { createSlice } from "@reduxjs/toolkit";

export const checkboxList = createSlice({
    name: "news",
    initialState: {
        checkboxList: [],
    },

    reducers: {
        addChecked: (state, action) => {
            return {
                checkboxList: action.payload,
            };
        },
    },
});

export const { addChecked } = checkboxList.actions;

export default checkboxList.reducer;
