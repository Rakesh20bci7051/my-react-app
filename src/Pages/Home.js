import { Container } from "reactstrap";
import Base from "../components/Base";
import NewFeed from "../components/NewFeed";
import { useEffect } from "react";
import PostView from "../components/postView";

const Home=()=>{
  
    return(
        <Base>
        <Container className="">
        <NewFeed/>
        <PostView/>
        </Container>
           
        </Base>
    )
}
export default Home;