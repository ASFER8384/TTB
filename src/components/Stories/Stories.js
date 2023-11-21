import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css"



export default function Stories() {



  return (
    <div className='stories'>
      <div className='stories-wrapper'>
        <button className='stories-btn'>Avail Resume Writing service for Free</button>
        <h4>What Our Coustomer Tells</h4>
        <div className='carosel'>
         <img src="" alt=""/>
         <i class="fa-solid fa-arrow-left"></i>
         <div className="carosel-box">
          <div className="carosel-box-single carso-one"></div>
          <div className="carosel-box-single carso-two"></div>
          <div className="carosel-box-single carso-three"></div>
         </div>
         <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  )
}
