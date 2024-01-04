import React from "react";
import Base from "../../components/Base";
import { Container } from "reactstrap";
import AddPost from "../../components/AddPost";
const UserDashBoard=()=>
{
    return(
      <Base>
    <Container>
      <AddPost/>
    </Container>
      </Base>
    )
}
export default UserDashBoard;