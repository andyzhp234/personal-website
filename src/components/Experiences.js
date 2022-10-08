import React from 'react'

export default function Experiences() {
  return (
    <div className='experience_box'>
      <div>
        ABOUT ME -
        <div className='experience_lists'>
          Hello Again! {String.fromCodePoint('0x1f603')} Thanks for Visiting my website!! I recently graduated from University
          Of California, Santa Cruz with a bachelor of honors in Computer Science. {String.fromCodePoint('0x1F4D6')}
        </div>
        <div className='experience_lists'>
          Other than coding, I enjoy spending my time playing video games both on PC and Nintendo. {String.fromCodePoint('0x1F3AE')} (add me!).
          I also love working on my personal project during my free time so stay tuned for the project coming up next! Feels free to reach out to me with any project
          recommandations!!
        </div>
      </div>
      <img src="self_Portray.JPG" alt="website_img" className='self_portray'/>
    </div>
  )
}
