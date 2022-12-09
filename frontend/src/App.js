import React from "react";
import "./scss/style.scss";
import "aos/dist/aos.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SideProjects from "./components/SideProjects/SideProjects";

export default function App() {
  return (
    <>
      <Header />
      <Landing />
      <Projects />
      <SideProjects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
