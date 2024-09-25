import React from "react";
import './Header_Login.css';
import img from '../../../images/user.png'

const Header_Login = () => {
  return (
    <div className="Header_Login_Box">
      <a href="#" className="Header_Login_Box_Logo_Btn">Logo</a>
      <span className="Header_Login_Box_Navigator_Btn_Box">
        <a href="#" className="Header_Login_Box_Home_Btn">Home</a>
        <a href="#" className="Header_Login_Box_Investment_Btn">Investment</a>
        <a href="#" className="Header_Login_Box_About_Us_Btn">About Us</a>
        <a href="#" className="Header_Login_Box_Contact_Us_Btn">Contact Us</a>
      </span>
      <span className="Header_Login_Box_Login_Section_Box">
        <a href="#" className="Header_Login_Box_Login_Section_Box_Login_Btn">Account</a>
        <a href="#" className="Header_Login_Box_Login_Section_Box_Profile_Btn"><img src={img} className="Header_Login_Box_Login_Section_Box_Image_Icon"></img></a>
      </span>
    </div>
  );
};

export default Header_Login;
