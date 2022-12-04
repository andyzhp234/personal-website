import React from "react";
import emailIcon from "../../assets/icons/email.png";
import resumeIcon from "../../assets/icons/resume.png";
import githubIcon from "../../assets/icons/github.png";
import linkedInIcon from "../../assets/icons/linkedin.png";
import resume from "../../assets/Haopeng_Zeng_Resume.pdf";
import AOS from "aos";

export default function Contact() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const sendMessageHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__title">Contact Me</div>
        <div className="contact__inputs-container">
          <div className="contact-infos">
            <div
              className="contact-infos--description"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              If you'd like to chat about working together or just want to say
              hi, my inbox is open for All! I'll try my best to get back to you!
            </div>
            <a
              data-aos="fade-right"
              data-aos-duration="700"
              className="contact-infos--nav"
              href="https://github.com/andyzhp234"
            >
              <img src={githubIcon} alt="resume-icon" />
              GitHub
            </a>
            <a
              data-aos="fade-right"
              data-aos-duration="700"
              className="contact-infos--nav"
              href="https://www.linkedin.com/in/haopengzeng"
            >
              <img src={linkedInIcon} alt="resume-icon" />
              LinkedIn
            </a>
            <div
              data-aos="fade-right"
              data-aos-duration="700"
              className="contact-infos--nav contact-infos--email"
              href="https://github.com/andyzhp234"
            >
              <img src={emailIcon} alt="email-icon" />
              <div>haopeng.zeng234@gmail.com</div>
            </div>
            <a
              data-aos="fade-right"
              data-aos-duration="700"
              className="contact-infos--nav"
              href={resume}
              download="Haopeng_Zeng_Resume"
            >
              <img src={resumeIcon} alt="resume-icon" />
              Download Resume
            </a>
          </div>
          <div className="contact-forms" onSubmit={sendMessageHandler}>
            <input placeholder="Name" required />
            <input placeholder="Email" required />
            <textarea rows="5" placeholder="Message" required />
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
