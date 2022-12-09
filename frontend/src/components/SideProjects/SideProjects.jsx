import React from "react";
import AOS from "aos";
import sideprojectList from "./sideprojectsList";
import githubIcon from "../../assets/icons/github.png";

export default function SideProjects() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="sideprojects">
      <div className="sideprojects__container">
        <div className="sideprojects__title">Other side projects</div>
        <div className="sideprojects__listing">
          {sideprojectList.map((items) => {
            return (
              <div
                className="sideprojects__listing__project"
                data-aos="fade-up"
                data-aos-duration="700"
                key={items.name}
              >
                <div className="sideprojects__listing__project--name">
                  {items.name}
                </div>
                <div className="sideprojects__listing__project--description">
                  {items.description}
                </div>

                <div className="sideprojects__listing__project--nav">
                  <a href={items.githubLink}>
                    <img src={githubIcon} alt="github" />
                  </a>
                  <a href={items.websiteLink}>Visit Website</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
