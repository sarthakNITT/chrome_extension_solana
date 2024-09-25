import React, { useState } from "react";
import './Main_Content_Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"; 

const Main_Content_Home = () => {
  const [selectedOption, setSelectedOption] = useState("USD"); 
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);  
    setShowDropdown(false);     
  };

  return (
    <div className="Main_Content_Home">
      <span className="Main_Content_Home_Amt_Enter_Box">
        <span className="Main_Content_Home_Amt_Enter_Text">Enter Your Amount:</span>
        <input className="Main_Content_Home_Amt_Enter_Input" />
      </span>
      <span className="Main_Content_Home_Convert_Box">
        <span className="Main_Content_Home_Convert_Box_Text">Convert into</span>
        <div className="Main_Content_Home_Convert_Box_Drop_Down_Container">
          <button className="Main_Content_Home_Convert_Box_Drop_Down_Btn" onClick={() => setShowDropdown(!showDropdown)}>
            {selectedOption} <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {showDropdown && (
            <ul className="Main_Content_Home_Convert_Box_Drop_Down_Menu">
              <li onClick={() => handleOptionSelect("USD")}>USD</li>
              <li onClick={() => handleOptionSelect("Euro")}>Euro</li>
              <li onClick={() => handleOptionSelect("Bitcoin")}>Bitcoin</li>
              <li onClick={() => handleOptionSelect("Ethereum")}>Ethereum</li>
            </ul>
          )}
        </div>
        <input className="Main_Content_Home_Convert_Box_Convert_Drop_Down" />
      </span>
      <button className="Main_Content_Home_Proceed_Btn">Proceed for transaction</button>
    </div>
  );
};

export default Main_Content_Home;
