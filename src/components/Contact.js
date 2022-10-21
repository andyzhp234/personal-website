import React from 'react'

export default function Contact() {
  return (
    <div className='contact_content'>
      <div className='contact_container'>
        <div className='contact_title'>
          Contact Me!
        </div>
        <div className='contact_inputs'>
          <input placeholder='Your Name'/>
          <input placeholder='Your Email'/>
          <textarea  id="contact_message" placeholder='Your Message'/>
          <button onClick={() => window.alert('Message Sent')}>Send Message</button>
        </div>
      </div>
    </div>
  )
}
