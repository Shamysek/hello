import React from "react";
import './Header.css'
import logo from '../../Venom-Logo.png'
function Header() {
    return(
      <div className='header'>
        <img src = {logo} /> 
      </div>
    )
}

export default Header