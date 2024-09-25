import React from "react";
import './Main_Input_Login.css'

const Main_Input_Login=()=>{
    return(
        <div className="Main_Input_Login_Box">
            <div className="Main_Input_Login_Box_Email_Box">
                <div className="Main_Input_Login_Box_Email_Text">Email</div>
                <input className="Main_Input_Login_Box_Email_Input"/>
            </div>
            <div className="Main_Input_Login_Box_Password_Box">
                <div className="Main_Input_Login_Box_Password_Text">Password</div>
                <input className="Main_Input_Login_Box_Password_Input"/>
            </div>
            <text className="Main_Input_Login_Box_Forgot_Btn">Forgot Password?</text>
            <button className="Main_Input_Login_Box_Sign_In_Btn"><text className="Main_Input_Login_Box_Sign_In_Btn_Text">Sign In</text></button>
        </div>
    )
}

export default Main_Input_Login;