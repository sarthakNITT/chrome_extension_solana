import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main_Home_File from './screens/Main_Screen_Files/Main_Home_File'
import Main_Account_File from "./screens/Main_Screen_Files/Main_Accont_File";
import Main_Login_File from "./screens/Main_Screen_Files/Main_Login_file";
import Main_Signup_File from "./screens/Main_Screen_Files/Main_Signup_File";

const App=()=>{
  return(
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Main_Home_File />} />
        <Route path="/account" element={<Main_Account_File />} />
        <Route path="/login" element={<Main_Login_File />} />
        <Route path="/signup" element={<Main_Signup_File />} />
      </Routes>
    </Router>
  );
};

export default App;