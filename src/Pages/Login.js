import { Row,Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label,Button } from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../Services/user-service";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";
const Login=()=>{

  const navigate=useNavigate()


   const[loginDetail,setLoginDetail] =useState({
        username:'',
        password:''
    })
    
    //handle change fuction
    const handleChange=(event,field)=>{
        let actualValue=event.target.value
        setLoginDetail({
            ...loginDetail,[field]:actualValue
        }
        )
    }
    //reset
const handleReset=()=>{
    setLoginDetail({
username:"",
password: " "
    });
};

    //handle form submit
    const handleFormSubmit=(event)=>{
        event.preventDefault();

       // console.log(loginDetail);

        //validation
        if(loginDetail.username.trim()==''||loginDetail.password.trim()=='')
        {
        toast.error("username and password are required")
        return;
        }
        //submit the data to server
        loginUser(loginDetail).then((jwtTokenData)=> {
            toast.success("User signed successfully!!");

            //save the data to local storage
doLogin(jwtTokenData,()=>{
  //  console.log("login detail is saved to local storage");

    //redirect to user dashboard Page

    navigate("/user/dashboard")




})



           // console.log("user login success: ");
            //console.log(jwtTokenData);

        }).catch(error=>{
            console.log(error)
            toast.error("something went wrong on server!!!")
        })

    };

    return(
        <Base>
        <Container>
            <Row className="mt-4">
                <Col sm={{
                    size:6,
                    offset:3
                }}>
                    <Card color="dark" inverse>
                        <CardHeader>

                            <h3>
                                Login Here!!
                            </h3>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={handleFormSubmit}>
                            
                                {/*for email */}
                                <FormGroup>
 <Label for="email">Email</Label>
 <Input type="text" id="email"
 value={loginDetail.username}
 onChange={(event)=>handleChange(event,'username')}/>
                                </FormGroup>
                                                               {/*for email */}
                                                               <FormGroup>
 <Label for="password">Password</Label>
 <Input type="text" id="password"
 value={loginDetail.password}
 onChange={(event)=>handleChange(event,'password')}/>
                                </FormGroup>
                                <Container className="text-center">
                      <Button outline color="primary">Login</Button>
                      <Button onClick={handleReset}  outline color="secondary" type="reset">Reset</Button>
                    </Container>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        </Base>
    )
}
export default Login;