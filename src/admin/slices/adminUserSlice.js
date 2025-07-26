import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUser, fetchUser } from "../services/adminUserService";

const initialState = {
    userList: [],
    loading: false,
    error: null
}

export const addAdminUser = createAsyncThunk(
    "admin/createUser",
    async(userData, {rejectWithValue})=>{
        try{
            return await addUser(userData); 
        }
        catch(error){
            if(error.response?.data?.success === false){
                return rejectWithValue(error.response?.data?.message || "Unexpected server error");
            }
            else{
                return rejectWithValue("An error occurred during user creation. Please try again.");
            }
        }
    }
)

export const fetchUserThunk = createAsyncThunk(
    "admin/fetchUser",
    async(__, {rejectWithValue})=>{
        try{
            return await fetchUser(); 
        }
        catch(error){
            if(error.response?.data?.success === false){
                return rejectWithValue(error.response?.data?.message || "Unexpected server error");
            }
            else{
                return rejectWithValue("An error occurred during user fetching. Please try again.");
            }
        }
    }
)

const adminUserSlice = createSlice({
    name: "adminuser",
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>{
        builder.addCase(fetchUserThunk.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUserThunk.fulfilled, (state, action)=>{
            state.loading = false;
            // console.log("->>",action);
            state.userList = action.payload;
        })
        .addCase(fetchUserThunk.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
}); 

export default adminUserSlice.reducer; 