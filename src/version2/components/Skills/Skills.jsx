import React from "react";
import skillsList from "./skillsList";
import AOS from "aos";

export default function Skills() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="skills">
      <div className="skills__container">
        <div className="skills__title">Skills</div>
        <div className="skills__lists">
          {skillsList.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-duration={200 + index * 50}
              >
                <img src={item.image} alt="skills-icon" />
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
