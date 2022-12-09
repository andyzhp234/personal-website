import React from "react";
import AOS from "aos";
import aboutmeImg from "../../assets/images/aboutme.png";
export default function About() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="about" className="about">
      <div className="about__container" data-aos="fade-up">
        <div className="about__title">About Me</div>
        <div className="about__content">
          <div>
            <div className="about__infos">
              Hello Again ! 😃 Thanks for visiting my website !!
            </div>
            <div className="about__infos">
              I recently graduated from the University Of California, Santa Cruz
              with a Bachelor of Honors in Computer Science. 📖
            </div>
            <div className="about__infos">
              I am excited to design and build scalable and maintainable
              softwares that have purpose and solve real problems.
            </div>
            <div className="about__infos">
              Other than coding, I also enjoy playing video games, watching
              soccer games, and listening to music !
            </div>
          </div>
          <div className="selfie">
            <img src={aboutmeImg} alt="aboutme" />
          </div>
        </div>
      </div>
    </div>
  );
}
