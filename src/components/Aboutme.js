import React from 'react'

export default function Aboutme() {
  return (
    <div className='aboutme_content' >
      <div className='aboutme_title' data-aos="zoom-in">
        About Me
      </div>
      <div className='aboutme_section' data-aos="zoom-in">
        <div className='aboutme_section_one_detail'>
          <p>
            Hello Again! {String.fromCodePoint('0x1f603')} Thanks for Visiting my website!! 
          </p>
          <p>
            I recently graduated from the University
            Of California, Santa Cruz with a bachelor of honors (Cum Laude) in Computer Science. {String.fromCodePoint('0x1F4D6')}
          </p>
          <p>
            Other than coding, I enjoy spending my time playing video games both on PC and Nintendo. {String.fromCodePoint('0x1F3AE')} (add me!).
            I also love working on my personal project during my free time so stay tuned for the project coming up next! Feels free to reach out to me with any project
            recommendations!!
          </p>
        </div>
          <div className='aboutme_section_one_detail'>
            <img src="graduation_portray1.jpg" alt="website_img" className='self_portray'/>
          </div>
        </div>
      <div className='aboutme_section' data-aos="zoom-in">
        <div className='aboutme_section_one_detail'>
          <p>
            My Hometown
          </p>
          <p>
            My hometown is Guangzhou, the largest city in Guangdong province in southern China.
            Guangzhou is well known for its amazing architectures, foods, and history. 
          </p>
        </div>
        <div className='aboutme_section_one_detail'>
          <img src="https://images.unsplash.com/photo-1553826059-7a090c4a3447?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="website_img" className='aboutme_img'/>
        </div>
      </div>
      <div className='aboutme_section' data-aos="zoom-in">
        <div className='aboutme_section_one_detail'>
          <p>My Hobby</p>
          <p>
            Besides playing video games, I also like to spend my time watching soccer games.
            I watch Premier League for most the time;
            Currently pretty excited about the The FIFA World Cup Qatar 2022 coming up in November.
          </p>
        </div>
        <div className='aboutme_section_one_detail'>
          <img src="https://images.unsplash.com/photo-1610201417828-29dd1173d62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="website_img" className='aboutme_img'/>
        </div>
      </div>
    </div>
  )
}
