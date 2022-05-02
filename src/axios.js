import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:'https://thenightmarketer-hiring.herokuapp.com/',

})

export  function setAuthorizationHeader(){
    const token= localStorage.getItem("token")
    console.log("token",token)
    return axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}