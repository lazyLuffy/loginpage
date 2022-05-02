import { axiosInstance } from "../axios";
export const registerAPI=(value)=>axiosInstance.post('/user/register',value)
export const loginApi =(value)=>axiosInstance.post("/user/login",value)
