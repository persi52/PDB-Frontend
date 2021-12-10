import axios from "axios";
require('dotenv').config();

const backendURL = process.env.REACT_APP_BACKEND_URL;
console.log(backendURL)
const userApi = axios.create({
    baseURL: backendURL + "users",
    withCredentials: true
  })

const recommendApi = axios.create({
  baseURL: backendURL + "recommend",
  withCredentials: true
})

export function getUsers(){
  let data = userApi.get('/get_all').then(({data}) => data);
  return data;
}

export function signOut(){
  userApi.delete('/signOut');
}

export function getUserById(user_id){
  let data = userApi.get('getUserById/' + user_id).then(({data}) => data);
  return data;
}

export function getCurrentUser(){
  let data = userApi.get('getCurrentUser').then(({data}) => data);
  return data;
}

  export function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    userApi.post('/signIn',{   
        email: email,
        password: password
    }).then(resp => {
      window.location.href="/";
      console.log(resp)
  });
  }

  export async function signup(){
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatpassword = document.getElementById("repeatpassword").value;
  
    let data = await userApi.post('/signUp',{ 
        nickname: username,  
        email: email,
        password: password,
        repeatPassword: repeatpassword
    }).then((data) =>data);
    return data;
  }
  

  export function recommend(receiver_id, movie_id){
    recommendApi.post('/',{ 
        receiver_id: receiver_id,  
        movie_id: movie_id
    });
  }

  export function changeNickname(newNickname){
    let data = userApi.post('/account/changeNickname',{
      newNickname: newNickname
    }).then(data=>data);
    return data;
  }

  export function changePassword(currentPassword,newPassword,repeatNewPassword){
    let data = userApi.post('/account/changePassword',{
      currentPassword : currentPassword,
      newPassword: newPassword,
      repeatNewPassword: repeatNewPassword
    }).then(data=>data);
    return data;
  }

  export function changeProfilePic(newProfilePicture){
    let data = userApi.post('/account/changePicture',{
      newProfilePicture: newProfilePicture
    }).then(data=>data);
    return data;
  }