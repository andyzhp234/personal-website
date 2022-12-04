import React from "react";

export default function Header() {
  const handleNav = (location) => {
    const divElement = document.getElementById(location);
    const yOffset = -90;
    const y =
      divElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="header">
      <div className="header__nav" onClick={() => handleNav("landing")}>
        Home
      </div>
      <div className="header__nav" onClick={() => handleNav("projects")}>
        Projects
      </div>
      <div className="header__nav" onClick={() => handleNav("about")}>
        About me
      </div>
      <div
        className="header__nav header__contact"
        onClick={() => handleNav("contact")}
      >
        Contact Me
      </div>
    </div>
  );
}
