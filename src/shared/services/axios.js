import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    withCredentials: true, // Include credentials for cross-origin requests (send cookies for auth)
});

export default axiosInstance;
