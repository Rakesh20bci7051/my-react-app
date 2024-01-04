//isLoggedIn=> means token is there in local storage

export const isLoggedIn=()=>{
    let data=localStorage.getItem("data");
    if(data==null)
    {
        return false;
    }
    else{
        return true;
    }
};

//doLogin =>data=>set to local storage

export const doLogin=(data,next)=>
{
    localStorage.setItem("data",JSON.stringify(data));
    next()
};

//doLogout=> remove the data from localstorage
export const doLogout=(next)=>{
    localStorage.removeItem("data");

    //call back function
    next()
};


//get currrentUser
export const getCurrentUserDetail=()=>
{
    if(isLoggedIn)
    {
        return JSON.parse(localStorage.getItem("data"))?.user;
    }
    else{
        return undefined;
    }
};

//get the Token
export const getToken=()=>
{
  if(isLoggedIn)
  {
    //console.log(JSON.parse(localStorage.getItem("data")).jwtToken)
    return JSON.parse(localStorage.getItem("data")).jwtToken
  }
  else{
    return null;
  }
}