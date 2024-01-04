import { myAxios } from "./helper";

//singup api
 export const signUp=(user)=>{
    return myAxios
    .post("/api/auth/register",user)
    .then((response)=> response.data)
}

//login api

 export const loginUser=(loginDetail)=>
{
return myAxios.
post('/api/auth/login',loginDetail).then((response)=>response.data)
}