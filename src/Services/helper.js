 import axios from "axios";
import { getToken } from "../auth";
export const BASE_URL='http://localhost:9090';

export const myAxios=axios.create({
    baseURL:BASE_URL
})

export const privateAxios=axios.create({
    baseURL:BASE_URL
})

privateAxios.interceptors.request.use((config)=>
    {
        const token=getToken()
        console.log(token)
        if(token)
        {
            config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("data")).jwtToken}`;
            //console.log(config);
            return config
        }
    },error => Promise.reject(error))
    /*
    API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})*/