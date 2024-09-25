import React from "react";
import './Main_Social_Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Main_Social_Login = () => {
    return (
        <div className="Main_Social_Login_OAuth_Box">
            <div className="Main_Social_Login_Main_Text">Or continue with</div>
            <div className="Main_Social_Login_Icons_Box">
                <button className="Main_Social_Login_GBtn">
                    <FontAwesomeIcon icon={faGoogle} size="2x" className="icon" />
                </button>
                <button className="Main_Social_Login_ABtn">
                    <FontAwesomeIcon icon={faApple} size="2x" className="icon" />
                </button>
                <button className="Main_Social_Login_FBtn">
                    <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
                </button>
            </div>
                <text className="Main_Social_Login_Register_Text">Don't have an account?</text>
                <button className="Main_Social_Login_Register_Btn">
                    <span className="Main_Social_Login_Register_Btn_Text">Register now</span>
                </button>
        </div>
    );
};

export default Main_Social_Login;
