import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import adminUserReducer from "../admin/slices/adminUserSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        adminUser: adminUserReducer
    }
})