import React from 'react'


export default function Navbar(props) {
  // props.references


  const scrollToBottom = (e) => {
    if (e.target.id === 'nav_home') {
      props.references.homeRef.current?.scrollIntoView({ behavior: "smooth"})
    } else if (e.target.id === 'nav_expertise') {
      props.references.expertiseRef.current?.scrollIntoView({ behavior: "smooth"})
    } else if (e.target.id === 'nav_project') {
      props.references.projectRef.current?.scrollIntoView({ behavior: "smooth"})
    } else if (e.target.id === 'nav_aboutme') {
      props.references.aboutmeRef.current?.scrollIntoView({ behavior: "smooth"})
    } else if (e.target.id === 'nav_contact') {
      props.references.contactRef.current?.scrollIntoView({ behavior: "smooth"})
    }
  }

  return (
    <div className='navbar_container' style={{zIndex:'100'}}>
      <div className='navbar'>
        <div
          className='navbar_item'
          onClick={scrollToBottom}
          id='nav_home'
        >
          Home
        </div>
        <div
          className='navbar_item'
          onClick={scrollToBottom}
          id='nav_expertise'
        >
          Expertise
        </div>
        <div
          className='navbar_item'
          onClick={scrollToBottom}
          id='nav_project'
        >
          Projects
        </div>
        <div
          className='navbar_item'
          onClick={scrollToBottom}
          id='nav_aboutme'
        >
          About Me
        </div>
        <div
          className='navbar_item'
          onClick={scrollToBottom}
          id='nav_contact'
        >
          Contact Me
        </div>
      </div>
    </div>
  )
}
