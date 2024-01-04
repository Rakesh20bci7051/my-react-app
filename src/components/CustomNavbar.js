import React, { useEffect, useState } from 'react';
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import { isLoggedIn,getCurrentUserDetail, doLogout } from '../auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';


function CustomNavbar(args) {

  //for naviagting or rediercting
  let navigate=useNavigate()

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const[login,setLogin]=useState(false);
  const[user,setUser]=useState(undefined)
  useEffect(()=>{

    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  },[login])

 //for logging out the user
  const logout=()=>
  {
    doLogout(()=>
    
    {

setLogin(false)
navigate("/")
    })
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand  tag={ReactLink} to="/">YourThoughts</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">About</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/Services">Contact Me</DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Youtube</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar>
            {
              login && (
                <>
              <NavItem>
                <NavLink tag={ReactLink}  to="/user/profileinfo" >
                 Profile Info
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink  tag={ReactLink}  to="/user/dashboard">
               {user.email}
              </NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={logout} >
                 Logout
                </NavLink>
              </NavItem>
            </>





              
              )
            }
            {
              !login&&(
              <>
          <NavItem>
              <NavLink  tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                Signup
              </NavLink>
            </NavItem>
            </>
              )
}
          </Nav>
  
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;