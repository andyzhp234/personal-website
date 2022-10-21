import React from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Summary() {
  React.useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div className='summary_content'>
      <div className='left_section'>
        <div className='summary' data-aos="fade-down">
          <div className='title_hello'>
            Hello there!
          </div>
          <div className='title_name'>
            I'm Haopeng Zeng
          </div>
          <div className='title_title'>
            A Full-Stack Software Developer Based in San Francisco, USA
          </div>

          <div className='title_icons'>
            <a href="https://www.linkedin.com/in/haopengzeng/">
              <img
                src="https://img.icons8.com/color/344/linkedin.png"
                alt="linkedin_icon"
              />
            </a>

            <a href="https://github.com/andyzhp234">
              <img
                src="https://img.icons8.com/fluent/344/github.png"
                alt="github_icon"
              />
            </a>
          </div>

          <div className='title_summary'>
            I'm passionate about building something that solves Problems.
            I'm a Problem Solver, An Innovator, and A Creator. I want to build something Meaningful, and something that can Help more people!
          </div>
        </div>
      </div>

      <div className='right_section'>
        <img src="IMG_0082.GIF" alt="pixel_me" className='pixel_me' />
      </div>
    </div>
  )
}
