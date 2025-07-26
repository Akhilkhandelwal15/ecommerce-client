import axiosInstance from "../../shared/services/axios";

export const addUser = async (userData)=>{
    try{
        const res = await axiosInstance.post('/admin/add-user', userData);
        return res.data.users;
    }
    catch(error){
        throw error;
    }
}

export const fetchUser = async()=>{
    try{
        const res = await axiosInstance.get('/admin/fetch-user');
        if(res.data.success){
            return res.data.users;
        }
        else{
            console.log("success: false");
        }
    }
    catch(error){
        throw error;
    }
}