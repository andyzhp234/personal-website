import React from 'react'
import NavBar from './NavBar'
import Summary from './Summary'
import Projects from './Projects'
import Experiences from './Experiences'
import Footer from './Footer'
import Educations from './Educations'

export default function home() {
  return (
    <div className='home_body'>
      <div className='home_container'>
        <NavBar />
        <Summary />

        {/* <Projects /> */}
        {/* <Experiences /> */}
        {/* <Educations /> */}
        {/* <Footer /> */}

      </div>
    </div>
  )
}
