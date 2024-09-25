import React from "react";
import './Main_Input_Signup.css'

const Main_Input_Signup=()=>{
    return(
        <div className="Main_Input_Signup_Box">
            <div className="Main_Input_Signup_Email_Box">
                <div className="Main_Input_Signup_Email_Text">Email</div>
                <input className="Main_Input_Signup_Email_Input"/>
            </div>
            <div className="Main_Input_Signup_Password_Box">
                <div className="Main_Input_Signup_Password_Text">Set Password</div>
                <input className="Main_Input_Signup_Password_Input"/>
            </div>
            <button className="Main_Input_Signup_Sign_In_Btn"><text className="Main_Input_Signup_Sign_In_Btn_Text">Sign Up</text></button>
        </div>
    )
}

export default Main_Input_Signup;