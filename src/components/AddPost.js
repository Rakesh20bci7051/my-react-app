import { Card, CardBody, Input,Form, Label, Container, Button} from "reactstrap";
import { useEffect, useRef, useState } from "react";
import { createPost as doCreatePost } from "../Services/PostService";
import { getCurrentUserDetail } from "../auth";
import JoditEditor from "jodit-react";

const AddPost=()=>
{

    //making the jodit editor
    const editor=useRef(null)
    const[content,setContent]=useState('')

    const[user,setUser]=useState(undefined)



 const[post,setPost]=useState({
        title:'',
        content:'',
        categoryId:''
    })



useEffect(
    ()=>
    {
        setUser(getCurrentUserDetail())

    },[]

)

//field changed function
const fieldChanged=(event)=>
{
   // console.log(event)
    setPost({...post,[event.target.name]:event.target.value})
}


//content field change function

const contentFieldChange=(data)=>{
    setPost({...post,'content':data})
    
   
  
    
}

//create post function
const createPost=(event)=>
{
    event.preventDefault();
    //console.log("form submitted")
   // console.log(post)

       //post should not be null
   
       if(post.title.trim()==='')
       {
           alert("post  title can't be null");
           return;
       }
       if(post.content.trim()==='')
       {
           alert(" post content should be there")
           return;
       }
    
       //submit the form on server
       
        post['userId']=user.id
       doCreatePost(post).then(data=>
       {
    alert("post created")
   // console.log(post)
       }).catch((error)=>
       {
        alert("error")
        console.log(error)
       })
}

    return(
        <div className="wrapper"> 
          <Card className=" showdow-sm mt-5 mb-5 border-0">
            <CardBody>
                {/*JSON.stringify(post)*/}
                <h3>Your thougths</h3>
                <Form onSubmit={createPost}>
                  <div className="my-3">
                    <Label for="title">Post Title</Label>
                    <Input type="text" id="title" 
                    placeholder="Enter here" 
                    className="rounded-0"
                    name="title"

                    //on changing this filed call the fieldChanged
                    onChange={fieldChanged}
                    
                    
                    
                    />
                  </div>

                  <div className="my-3">
                    <Label for="content">Content</Label>
                    {/*<Input type="textarea" id="content" placeholder="Enter here"
                     className="rounded-0" style={{height:'200px'}}/>*/}
                     <JoditEditor
                     
                     ref={editor}
                     value={content}
                     onChange={contentFieldChange}
                     
                     />
                  </div>
              
              
                  <div className="my-3">
                    <Label for="category">Category</Label>
                    <Input type="select" id="category" placeholder="Enter here"
                     className="rounded-0" 
                     name="categoryId"
                     onChange={fieldChanged}
                     
                     >
                        <option>
                            1
                        </option>
                        <option>
                            2
                        </option>
                        <option>
                            3
                        </option>
                        <option>
                            4
                        </option>

                        <option>
                            5
                        </option>
                        </Input>
                  </div>

<Container className="text-center">
    <Button type="submit" className="rounded-0" color="primary">Create Post</Button>
    <Button  className="rounded-0 ms-2" color="danger">Reset Post</Button>
</Container>




                </Form>
            </CardBody>
          </Card>
</div>
        
    )
}
export default AddPost;