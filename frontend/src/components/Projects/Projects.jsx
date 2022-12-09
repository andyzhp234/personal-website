import React from "react";
import AOS from "aos";
import githubIcon from "../../assets/icons/github.png";
import projectsList from "./projectsList";
import linkIcon from "../../assets/icons/link.png";

export default function Projects() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__title">Projects</div>

        {projectsList.map((item, index) => {
          return (
            <div
              key={index}
              className="project"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div className="project__infos">
                <div className="project__infos__title">{item.title}</div>

                <div className="project__infos__tech-stacks">
                  {item.tech.map((tech, techIndex) => {
                    return (
                      <img key={techIndex} src={tech} alt="tech-stack-img" />
                    );
                  })}
                </div>

                <div className="project__infos__description">
                  {item.description}
                </div>

                <div className="project__infos__nav">
                  <a href={item.github}>
                    <img src={githubIcon} alt="github-icon" />
                  </a>
                  <a href={item.website}>Visit Website</a>
                </div>
              </div>

              <a href={item.website} className="project__image">
                <img src={item.projectImg} alt="project" />

                <div className="project__image__overlay">
                  <div className="project__image__overlay__content">
                    <img src={linkIcon} alt="visit-icon" />
                    Visit Website
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
