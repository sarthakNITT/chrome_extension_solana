import React from "react";
import './Header_Signup.css';
import img from '../../../images/user.png'

const Header_Singup = () => {
  return (
    <div className="Header_SignUp_Box">
      <a href="#" className="Header_SignUp_Box_Logo_Btn">Logo</a>
      <span className="Header_SignUp_Box_Navigator_Btn_Box">
        <a href="#" className="Header_SignUp_Box_Home_Btn">Home</a>
        <a href="#" className="Header_SignUp_Box_Investment_Btn">Investment</a>
        <a href="#" className="Header_SignUp_Box_About_Us_Btn">About Us</a>
        <a href="#" className="Header_SignUp_Box_Contact_Us_Btn">Contact Us</a>
      </span>
      <span className="Header_SignUp_Box_SignUp_Section_Box">
        <a href="#" className="Header_SignUp_Box_SignUp_Section_Box_SignUp_Btn">Account</a>
        <a href="#" className="Header_SignUp_Box_SignUp_Section_Box_Profile_Btn"><img src={img} className="Header_SignUp_Box_SignUp_Section_Box_Image_Icon"></img></a>
      </span>
    </div>
  );
};

export default Header_Singup;
