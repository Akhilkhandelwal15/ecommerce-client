import axiosInstance from "../../shared/services/axios";

export const register = async(userData)=>{
    try{
        const res = await axiosInstance.post('/auth/register', userData);
        console.log("inside service:", res);
        return res.data;
    }
    catch(error){
        console.log("Error during registration:", error);
        throw error;
    }
}

export const login  = async(userData)=>{
    try{
        const res = await axiosInstance.post('/auth/login', userData);
        return res.data;
    }
    catch(error){
        console.log("Error during login:", error);
        throw error;
    }
}

export const logout = async()=>{
    try{
        const res = await axiosInstance.post('/auth/logout');
        return res.data;
    }
    catch(error){
        console.log("Error during logout:", error);
        throw error;
    }
}

export const fetchCurrentUser = async()=>{
    try{
        const res = await axiosInstance.get('/auth/me');
        return res.data;
    }
    catch(error){
        // console.log("Error fetching current user data:", error);
        throw error;
    }
}

export const forgotPassword = async(userData) =>{
    try{
        const res = await axiosInstance.post('/auth/forgot-password', userData);
        return res.data;
    }
    catch(error){
        throw error;
    }
}

export const resetPassword = async(userData) =>{
    try{
        const res = await axiosInstance.post('/auth/reset-password', userData);
        return res.data;
    }
    catch(error){
        throw error;
    }
}