import { Card, CardHeader, Container, CardBody, FormGroup, Label, Input, Form, Button, Row, Col, FormFeedback } from "reactstrap";
import Base from "../components/Base";
import { useEffect, useState } from "react";
import { signUp } from "../Services/user-service";
import {toast} from  "react-toastify";
const Signup = () => {

  //hook for taking and changing the data
 const[data,setData]= useState({
name:'',
email:'',
password:'',
about:''
 })
 const[error,setError]=useState({
  errors:{},
  isError:false
 })

 //handle change
 const handleChange=(event,property)=>
  {
    //dynamicly setting the value
   setData({...data,[property]:event.target.value},
   )
  }
 //Reset form
 const resetData=()=>
 {
  setData({
    name:'',
email:'',
password:'',
about:''
  })
 }

 //submit form
 const submitForm=(event)=>
 {
event.preventDefault()
/*if(error.isError)
{
  toast.error("Form data is invalid");
return ;
}*/
// validate the data

//call server api for sending the data using axios 
signUp(data).then((resp)=>{
  console.log(resp);
  console.log("success log");
  toast.success("User Registered!! user id"+ resp.id)
}).catch((error)=>{
  console.log(error)
  console.log("Error log")

  //handle the errors in proper way
  setError(
    {
      errors:error,
      isError:true
    }
  )

});


 };
  return (
    <Base>
      
        <Container>
          <Row className="mt-4">
            {
              //JSON.stringify(data)
            }
            <Col sm={{ size: 6, offset: 3 }}>
              <Card color="dark" inverse>
                <CardHeader>
                  Fill Information to Register
                </CardHeader>
                <CardBody>
                  {/* creating form */}
                  <Form onSubmit={submitForm}>
                    {/*name field*/}
                    <FormGroup>
                      <Label for="name">Enter Name</Label>
                      <Input type="text" placeholder="Enter here" id="name" 
                      onChange={(e)=>handleChange(e,'name')}
                      value={data.name}
                      invalid={error.errors?.response?.data?.name ? true:false}/>
                    </FormGroup>
                    <FormFeedback>
                      {
                        error.errors?.response?.data?.name
                      }
                    </FormFeedback>
                    <FormGroup>
                      <Label for="email">Enter Email</Label>
                      <Input type="email" placeholder="Enter here" id="email"
                      onChange={(e)=>handleChange(e,'email')} 
                      value={data.email}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Enter password</Label>
                      <Input type="password" placeholder="Enter here" id="password"
                      onChange={(e)=>handleChange(e,'password')} 
                      value={data.password}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="about"> About</Label>
                      <Input type="textarea" placeholder="Enter here" id="about" 
                      onChange={(e)=>handleChange(e,'about')}
                      value={data.about}/>
                    </FormGroup>

                    <Container className="text-center">
                      <Button outline color="primary">Register</Button>
                      <Button  onClick={resetData} outline color="secondary" type="reset">Reset</Button>
                    </Container>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      
    </Base>
  );
}

export default Signup;
