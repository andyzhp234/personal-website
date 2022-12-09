import React, {useRef} from 'react'
import Navbar from './Navbar'

import AOS from 'aos';
import "aos/dist/aos.css";
import Summary from './Summary';
import Projects from './Projects';
import Expertise from './Expertise';
import Aboutme from './Aboutme';
import Contact from './Contact';

export default function Home() {
  const homeRef = useRef(null)
  const expertiseRef = useRef(null)
  const projectRef = useRef(null)
  const aboutmeRef = useRef(null)
  const contactRef = useRef(null)


  React.useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div>
      <Navbar references={{
        'homeRef':homeRef,
        'expertiseRef':expertiseRef,
        'projectRef':projectRef,
        'aboutmeRef':aboutmeRef,
        'contactRef':contactRef,
      }}/>
      <div className='main_content'>
        <div className='section first' ref={homeRef}>
          <Summary />
        </div>

        <div className='section second' ref={expertiseRef}>
          <Expertise />
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className='section thrid' ref={projectRef}>
          <Projects />
        </div>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className='section fourth' ref={aboutmeRef}>
          <Aboutme />
        </div>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className='section fifth' ref={contactRef}>
          <Contact />
        </div>
        
        <div className='footer'>
          <p>Created By Haopeng Zeng.</p>
          <p>All Icons used are from https://icons8.com/</p>
        </div>
      </div>
    </div>
  )
}
