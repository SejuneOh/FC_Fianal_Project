import { createSlice } from "@reduxjs/toolkit";

export const signinInfo = createSlice({
    name: "signinInfo",
    initialState: {
        id:'',
        authority:'vendor',
        password:0,
        passwordConfirm:0,
        companyName:'',
        brandName:'',
        address:'',
        representativeName:'',
        representativeEmail:'',
        businessmanName:'',
        businessNum:'000-00-00000',
        taxBillEmail:'',
        managerName:'',
        managerContact:'010-0000-0000',
        managerEmail:'',
        brandImg:'',
        businessNumImg:'',
        bankbookImg:''
    },

    reducers: {
        setSignInfo: (state, action) => {
            const {id, password, authority} = action.payload;
            return{
                ...state,
                id, 
                password,
                authority
            }
        },
    },
});

export const { setSignInfo } = signinInfo.actions;

export default signinInfo.reducer;
