import axios from "axios";
import Cookies from "react-cookies"
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

const authApi = axios.create({
  baseURL: backendURL + "auth",
  withCredentials: true
})

export function getUsers(){
  let data = userApi.get('/get_all').then(({data}) => data);
  return data;
}

export function signOut(){
  document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  //window.location.href="/";
  //authApi.delete('/signOut');
}

export function getUserById(user_id){
  let data = userApi.get('getUserById/' + user_id).then(({data}) => data);
  return data;
}

export async function getCurrentUser(){
  let data = await authApi.get('getCurrentUser').then(({data}) => data);
  console.log(data)
  return data;
}

  export async function login(){
    //const cookie = new Cookies();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    let data = await authApi.post('/signIn',{   
        email: email,
        password: password
    }).then(data => data);
    Cookies.save('token',data.data.token )
    //document.cookie = `token=${data.data.token}`;
    window.location.href="/";
    return data;
  }

  export async function signup(){
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatpassword = document.getElementById("repeatpassword").value;
  
    let data = await authApi.post('/signUp',{ 
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

  export function changeNickname(){
    const newNickname = document.getElementById('username').value;
    let data = userApi.post('/account/changeNickname',{
      newNickname: newNickname
    }).then(data=>data);
    console.log(data);
    return data;
  }

  export function changePassword(){
    const currentPassword = document.getElementById('password').value;
    const newPassword = document.getElementById('new_password').value;
    const repeatNewPassword = document.getElementById('confirm_new_password').value;

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