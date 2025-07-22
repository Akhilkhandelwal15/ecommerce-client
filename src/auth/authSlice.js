import { login, logout, register, fetchCurrentUser, forgotPassword, resetPassword } from "./servies/authService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false, 
    isSuccess: false,
    isError: false,
    message: "",
    isAuthenticated: false
}

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async(userData, {rejectWithValue}) => {
        try{
            return await register(userData);
        }
        catch(error){
            if(error.response?.data?.success === false){
                return rejectWithValue(error.response?.data?.message || "Unexpected server error");
            }
            else{
                return rejectWithValue("An error occurred during registration. Please try again.");
            }
        }
    }
)

export const loginUser = createAsyncThunk(
    "auth/login",
    async(userData, {rejectWithValue}) =>{
        try{
            return await login(userData);
        }
        catch(error){
            if(error.response?.data?.success === false){
                return rejectWithValue(error.response?.data?.message || "Unexpected server error");
            }
            else{
                return rejectWithValue("An error occurred during login. Please try again.");
            }
        }
    }
)

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue})=>{
        try{
            return await logout();
        }
        catch(error){
            if(error.response?.data?.success === false){
                return rejectWithValue(error.response?.data?.message || "Unexpected server error");
            }
            else{
                return rejectWithValue("An error occurred during logout. Please try again.");
            }
        }
    }
)

export const getCurrentUser = createAsyncThunk(
    "auth/getCurrentUser",
    async(_, {rejectWithValue})=>{
        try{
            return await fetchCurrentUser();
        }
        catch(error){
            if(error.response?.data?.success === false){
                return rejectWithValue(error.response?.data?.message || "Unexpected server error");
            }
            else{
                return rejectWithValue("An error occurred while fetching user data. Please try again.");
            }
        }
    }
);

export const sendResetPasswordLink = createAsyncThunk(
    "auth/sendResetPasswordLink",
    async(userData, {rejectWithValue}) => {
        try{
            return await forgotPassword(userData);
        }
        catch(error){
            if(error.response?.data?.success === false){
                return rejectWithValue(error.response?.data?.message || "Unexpected server error");
            }
            else{
                return rejectWithValue("An error occurred during registration. Please try again.");
            }
        }
    }
)

export const resetUserPassword = createAsyncThunk(
    "/auth/resetUserPassword",
    async(userData, {rejectWithValue}) =>{
        try{
            return await resetPassword(userData);
        }
        catch(error){
            if(error.response?.data?.success === false){
                return rejectWithValue(error.response?.data?.message || "Unexpected server error");
            }
            else{
                return rejectWithValue("An error occurred during registration. Please try again.");
            }
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetAuthState: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getCurrentUser.pending, (state)=>{
            state.isLoading = true; 
            state.error = null;
        })
        .addCase(getCurrentUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload.user;
            state.message = "User data fetched successfully!";
            state.isAuthenticated = true;
        })
        .addCase(getCurrentUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload || "Failed to fetch user data";
            state.isAuthenticated = false;
            state.user = null;
        })

        .addCase(logoutUser.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(logoutUser.fulfilled, (state)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = null;
            state.message = "Logout successful!";
            state.isAuthenticated = false;
        })
        .addCase(logoutUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload || "Logout failed";
        });
    }
});

export const {resetAuthState} = authSlice.actions;
export default authSlice.reducer;