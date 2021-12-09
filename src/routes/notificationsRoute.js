import axios from "axios";
require('dotenv').config();

const backendURL = process.env.REACT_APP_BACKEND_URL;


const notificationsApi = axios.create({
    baseURL: backendURL + "notifications",
    withCredentials: true
})

export async function getNotifications(){
    const data = await notificationsApi.get(`/get`).then(({data}) => data);    
    console.log(data)
    return data;
}