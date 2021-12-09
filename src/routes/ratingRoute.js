import axios from "axios";
require('dotenv').config();

const backendURL = process.env.REACT_APP_BACKEND_URL;

const ratingApi = axios.create({
    baseURL: backendURL + "ratings",
    withCredentials: true
})

export async function getRatingsByMovieId(movie_id){      

    let data = await ratingApi.get('/getRates/'+movie_id).then(({data}) => data);
    return data;
}

export async function addRating(rate, movie_id){
    ratingApi.post('/add',{ 
        rate: rate,  
        movie_id: movie_id
    })
}

export async function getUserRate(movie_id){
    let data = await ratingApi.post('/getRate',{movie_id:movie_id}).then(({data})=>data);
    //console.log(data.rate)
    return data.rate;
}
