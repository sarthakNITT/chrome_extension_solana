import React, { useEffect, useState } from "react";
import './Header.css';
import img from '../../images/user.png';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig"; 
import { onAuthStateChanged, signOut } from "firebase/auth"; 

const Header_Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); 
      } else {
        setIsLoggedIn(false); 
      }
    });

    return () => unsubscribe(); 
  }, []);

  const handleUserIconClick = async () => {
    if (isLoggedIn) {
      try {
        await signOut(auth); 
        alert("Signed out successfully!"); 
        navigate("/login"); 
      } catch (error) {
        console.error("Error signing out: ", error);
      }
    } else {
      navigate("/login"); 
    }
  };

  return (
    <div className="Header_Home_Box">
      <a href="#" className="Header_Home_Box_Logo_Btn">Logo</a>
      <span className="Header_Home_Box_Navigator_Btn_Box">
        <Link to="/" className="Header_Home_Box_Home_Btn">Home</Link>
        <a href="#" className="Header_Home_Box_Investment_Btn">Investment</a>
        <a href="#" className="Header_Home_Box_About_Us_Btn">About Us</a>
        <a href="#" className="Header_Home_Box_Contact_Us_Btn">Contact Us</a>
      </span>
      <span className="Header_Home_Box_Home_Section_Box">
        {isLoggedIn && ( 
          <Link to="/account" className="Header_Home_Box_Home_Section_Box_Home_Btn">Account</Link>
        )}
        <span className="Header_Home_Box_Home_Section_Box_Profile_Btn" onClick={handleUserIconClick}>
          <img src={img} className="Header_Home_Box_Home_Section_Box_Image_Icon" alt="Profile" />
        </span>
      </span>
    </div>
  );
};

export default Header_Home;
