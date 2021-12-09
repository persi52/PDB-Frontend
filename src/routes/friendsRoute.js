import axios from "axios";
require('dotenv').config();

const backendURL = process.env.REACT_APP_BACKEND_URL;


const friendsApi = axios.create({
     baseURL: backendURL + "friends",
     withCredentials: true
})

export async function areFriends(receiver_id){
    const data = await friendsApi.post(`/getFriendStatus`,{receiver_id: receiver_id}).then(({data}) => data);    
    return data;
}

export async function getFriends() { 
    let data = await friendsApi.get(`/get`).then(({data}) => data);    
    console.log(data);
    return data;
}

export async function removeFriend(receiver_id) {
   
    await friendsApi.post('/remove',{     
        receiver_id: receiver_id
     
    }).then(console.log("deleted"));  
}

export async function sendInvitation(receiver_id){
    await friendsApi.post('/sendRequest',{
        receiver_id: receiver_id
    }).then((resp)=>{return resp.status})
}

export async function acceptInvitation(sender_id, notification_id){
    await friendsApi.post('/acceptFriendRequest',{
        sender_id: sender_id,
        notification_id: notification_id
    }).then((resp)=>{return(resp.status)})
}

export async function declineInvitation(sender_id, notification_id){
    await friendsApi.post('/declineFriendRequest',{
        sender_id: sender_id,
        notification_id: notification_id
    }).then((resp)=>{return resp.status})
}