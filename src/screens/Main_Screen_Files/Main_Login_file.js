import React from "react";
import Header_Login from '../Login/Header_login/Header_Login'
import Main_Heading_Login from "../Login/Main_Heading/Main_Heading_login";
import Main_Login from '../Login/Main_Login/Main_Login'

const Login_Main_File=()=>{
    return(
      <>
        <Header_Login/>
        <Main_Heading_Login/>
        <Main_Login/>
      </>
    )
  }
  
  export default Login_Main_File;