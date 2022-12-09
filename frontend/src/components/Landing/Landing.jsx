import React from "react";
import AOS from "aos";
import githubIcon from "../../assets/icons/github.png";
import linkedInIcon from "../../assets/icons/linkedin.png";
import resume from "../../assets/Haopeng_Zeng_Resume.pdf";

export default function Landing() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const handleNav = (location) => {
    const divElement = document.getElementById(location);
    const yOffset = -75;
    const y =
      divElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div id="landing" className="landing">
      <div className="landing__container">
        <h2 data-aos="fade-down" data-aos-duration="400">
          Hi,
        </h2>
        <h2 data-aos="fade-down" data-aos-duration="500">
          I'm Haopeng
        </h2>
        <h2 data-aos="fade-down" data-aos-duration="600">
          A Full-Stack Software Developer
        </h2>

        <div
          className="landing__container__actions"
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <h2 className="hire-me-button" onClick={() => handleNav("contact")}>
            Hire Me
          </h2>
          <h2
            className="landing__nav-work"
            onClick={() => handleNav("projects")}
          >
            See my works
          </h2>
          <a
            className="landing__nav-work"
            href={resume}
            download="Haopeng_Zeng_Resume"
          >
            My Resume
          </a>
        </div>

        <div
          className="landing__container__nav"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <a href="https://github.com/andyzhp234">
            <img src={githubIcon} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/haopengzeng/">
            <img src={linkedInIcon} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
