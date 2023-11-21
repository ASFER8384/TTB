import React from 'react'
import "./style.css"

import TeamsPic from "../../assets/Teams.svg"

export default function Teams() {
  return (
    <>
    <div className='teams'>
        <img src={TeamsPic} className='teamspicture'/>
    </div>
    <div className='team-btn-div'>
    <button className='team-btn'>Avail Resume Writing service for Free</button>
    </div>
    </>
  )
}
