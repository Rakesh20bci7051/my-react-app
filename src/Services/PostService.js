import { myAxios, privateAxios } from "./helper"

//create post method
export const createPost = (postData) => {
 
  return privateAxios.post(`api/user/${postData.userId}/category/${postData.categoryId}/posts`, postData)
    .then((response) => response.data);
};


//get the post from server

export const loadAllPosts=()=>{
  return myAxios.get(`http://localhost:9090/api/posts`).then(response=>response.data)
};

//load single post with given Id

export const loadPost=(postId)=>
{
  return myAxios.get("http://localhost:9090/api/posts/"+postId).then((response)=>response.data);
}

//create comment

export const createComment=(comment,postId)=>
{
  //return privateAxios.post(`http://localhost:9090/api/post/${postId}/comments`,comment)
  console.log(comment.content);
  const{content}=comment
  return privateAxios.post(`api/post/${postId}/comments`, {content})
  .then((response) => response.data);
  
};