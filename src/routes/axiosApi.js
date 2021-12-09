import axios from "axios";


const backendURL = process.env.BACKEND_URL;


export const axiosApi = (value) => {
    return axios.create({
    baseURL: backendURL + value,
    withCredentials: true
    })    
}