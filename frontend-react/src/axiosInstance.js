import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create({
    // BASE URL
    baseURL: baseURL,
    headers: {
        'Content-Type' : 'application/json',
    }
})


// Request Interceptor 
axiosInstance.interceptors.request.use(
    function(config){
        console.log('request without auth header==>', config);
        const accessToken = localStorage.getItem('AccessToken')
        if(accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`// Injecting access Token
        }
        return config;
    }, function(error) {
        return Promise.reject(error);
    }
)

export default axiosInstance;