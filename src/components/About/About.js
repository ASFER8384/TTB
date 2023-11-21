import React from 'react'
import "./style.css"

import MemberOne from  "../../assets/member/one.svg"
import MemberTwo from  "../../assets/member/Two.svg"
import MemberThree from  "../../assets/member/Three.svg"

export default function About() {
  return (
    <div className='about'>
      <div className='about-head'>
        <h1>Unlock Interviews with a Standout Resume</h1>
      </div>
      <h2>Why a Great Resume Matters:</h2>
      <div className='about-content' >
        <div className='about-content-box'>
          <img src={MemberOne}/>
          <h2>Makes a Strong First Impression</h2>
          <p>Captures attention and showcases your potential</p>
        </div>
        <div className='about-content-box'>
        <img src={MemberTwo}/>
          <h2>ATS-Friendly</h2>
          <p>Designed to get past automated filters and into human hands</p>
        </div>
        <div className='about-content-box'>
        <img src={MemberThree}/>
          <h2>Highlights Your Skills</h2>
          <p>Clearly presents your experiences and abilities</p>
        </div>
      </div>
    </div>
  )
}
