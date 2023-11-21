import React from 'react'
import "./style.css"

export default function Works() {
  return (
    <div className='works'>
        <div className='works-heading'>
          <h1>Here's How It Works</h1>
        </div>
      <div className='works-wrapper'>
        <div className='works-content'>
          <h5>1.Submit Your Details: Provide your Name, WhatsApp Number, and upload your Current Resume in the fields below.</h5>


            <h5>2.Group Addition: Within 24 hours of submission, you will be added to a WhatsApp group with our Resume Writer.</h5>

            <h5>3.Information Collection: Our Resume Writer team will share a Google Doc for you to input additional details.</h5>

            <h5>4.Receive Your New Resume: After updating the provided Doc, our team will share your revamped resume within 48 hours.</h5>

            <h5>5.Video Testimonial: If you're pleased with the result, we kindly request a video testimonial. Once shared, you'll get your revamped resume, no strings attached!</h5>
        </div>
      </div>
    </div>
  )
}
