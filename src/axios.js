import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:'https://thenightmarketer-hiring.herokuapp.com/',

})

export function setAuthorizationHeader(token){
    return axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}