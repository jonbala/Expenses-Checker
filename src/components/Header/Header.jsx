import React, { VFC } from 'react';
import "./Header.css";
import {useState,useEffect} from 'react';
import {FiSun,FiMoon} from 'react-icons/fi'

const Header  = () => {
  const [darkMode,setDarkMode] = useState(false);
    useEffect(() => {
        if(darkMode) {
         document.body.classList.toggle("dark-mode")
         }
         else {
            document.body.classList.remove("dark-mode")
         }
    
        },[darkMode])
     return (
        <header className="header">
             <div className="header__row">
                <h1>React Task<br/>TechFrame</h1>
                    <span onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <FiSun /> : <FiMoon />}
                    </span>
            </div>
        </header>
     )
};

export default Header;