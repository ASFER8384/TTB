import React from 'react'
import "./style.css"

import One from "../../assets/service/1.svg"
import Two from "../../assets/service/2.svg"
import Three from "../../assets/service/3.svg"
import Four from "../../assets/service/4.svg"
import Five from "../../assets/service/5.svg"
import Six from "../../assets/service/6.svg"
import Seven from "../../assets/service/7.svg"

export default function Service() {
  return (
    <div className='service'>
      <div className='service-wrapper'>
        <h1>Our Canada-Specific Resume Writing Service</h1>
        <div className='service-box-wrapper'>
          <div className='service-box'>
            <img src={One} className='service-image' />
            <div className='box-content'>
            <h5>1. ATS-Optimized:</h5>
            <p>Our resumes are designed to pass through ATS filters, increasing your chances of landing an interview.</p>
            </div>
            <div>
            </div>
          </div>
          <div className='service-box'>
            <img src={Two} className='service-image' />
            <div className='box-content'>
            <h5>2. Guaranteed Interview Calls:</h5>
            <p>We're so confident in our service that we guarantee interview calls, or we'll revise your resume.</p>
            </div>
            <div>
            </div>
          </div>
          <div className='service-box'>
            <img src={Four} className='service-image' />
            <div className='box-content'>
            <h5>3. Personal Branding:</h5>
            <p>We don't just list your experiences; we craft a narrative that showcases your unique professional story.</p>
            </div>
            <div>
            </div>
          </div>
          <div className='service-box'>
            <img src={Three} className='service-image' />
            <div className='box-content'>
            <h5>4. Industry Insights: </h5>
            <p>With our deep understanding of the tech industry, we tailor your resume to speak to industry specefic trends and demands</p>
            </div>
            <div>
            </div>
          </div>
          <div className='service-box'>
            <img src={Five} className='service-image' />
            <div className='box-content'>
            <h5>5. Fast Turnaround:</h5>
            <p>Our direct communication approach significantly reduces the time it takes to finalize a resume that's ready to go.</p>
            </div>
            <div>
            </div>
          </div>
          <div className='service-box'>
            <img src={Six} className='service-image' />
            <div className='box-content'>
            <h5>6. Unlimited Revisions:</h5>
            <p>We work with you until you're 100% satisfied with your resume.</p>
            </div>
            <div>
            </div>
          </div>
          <div className='service-box'>
            <img src={Seven} className='service-image' />
            <div className='box-content'>
            <h5>7. Confidentiality Assured:</h5>
            <p>Your personal and professional information is safe with us.</p>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
