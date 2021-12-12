import axios from "axios";
require('dotenv').config();

const backendURL = process.env.REACT_APP_BACKEND_URL;


const commentsApi = axios.create({
    baseURL: backendURL + "comments",
    withCredentials: true
})

export async function getComments(movie_id) { 
    let data = await commentsApi.get(`/get/`+movie_id).then(({data}) => data);
    return data;
}

export async function addComment(comment) {
    await commentsApi.post('/add',comment).then((resp)=>{return resp.status})
}