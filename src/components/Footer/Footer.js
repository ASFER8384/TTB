import React from 'react'
import "./style.css"

import Logo from "../../assets/Logo.svg"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
      <div className='footer-left'>
        <img src={Logo} style={{color:"white"}}/>
        <div className='footer-copyrights'>
        <h6>© 2023 TTB.com - All Rights Reserved.</h6>
        <div className="social-icon">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-discord"></i>
        </div>
        </div>
      </div>
      <div className='footer-right'>
        <h3>Connect with us</h3>
        <h6 style={{marginTop:"10px"}}>example@gmail.com</h6>
      </div>
      </div>
    </div>
  )
}
