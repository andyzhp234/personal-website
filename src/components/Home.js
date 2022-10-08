import React from 'react'
import Summary from './Summary'
import Projects from './Projects'
import Experiences from './Experiences'
// import Educations from './Educations'

export default function home() {
  return (
    <div className='home_body'>
      <div className='home_container'>
        <Summary />

        <Projects />
        <Experiences />
        {/* <Educations /> */}

        <div className='footer'>
          <a href="https://www.linkedin.com/in/haopengzeng/">
            <img src="https://img.icons8.com/color/344/linkedin.png" alt="linkedin" className='icons'/>
          </a>
          <div className='icons_ref'>
            All Icons used are from https://icons8.com/
          </div>
        </div>
      </div>
    </div>
  )
}
