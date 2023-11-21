import React from 'react'
import "./style.css"

import Logo from "../../assets/Logo.svg"
import Hero from "../../assets/Hero.svg"

export default function Home() {
    return (
        <>
            <div className='home'>
                <div className='home-content'>
                    <div className='home-content-right'>
                        <img src={Logo} className="logo" />
                        <div className='home-quote'>
                            <h1>Accelerate Your <span style={{ color: "#6CE070" }}>Tech Career</span> in Canada!</h1>
                            <h5>Exclusive Free <span style={{ color: "#6CE070" }}>RESUME</span> Writing Service TO <span style={{ color: "#6CE070" }}>5x</span> Your Job Hunt</h5>
                        </div>
                    </div>
                    <div className='home-content-left'>
                        <img src={Hero} className="hero" />
                    </div>
                </div>
                <div className='form-box'>
                    <div className='form-quote'>
                        <h1>Fill in Your Details
                            to Avail Your <span style={{ color: "#6CE070" }}>Free Resume</span> Today !</h1>
                    </div>
                    <form>
                        <input  className='input-box' placeholder='Name'/>
                        <input   className='input-box' placeholder='Email'/>
                        <input   className='input-box' placeholder='Whatsapp Number'/>
                        <div className='btn-limitedquote-div'>
                        <input  type="button" value="claim" className='button-box' />
                        <span>*Only 39 slots left out of 100</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
