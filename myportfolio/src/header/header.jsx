import "./header.css";
import About from "../pages/about";
import Contact from "../pages/contact";
import Expertise from "../pages/expertise";
import Project from "../pages/project";
import React, { useState,} from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close mobile menu after clicking
  };


  return (
    <div className="body">
      {/* Navbar */}
      <header className="navbar" role="banner">
        <div className="logo" id="home" >Opeyemi.<span></span></div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"} role="navigation" aria-label="Main Navigation">
          <li>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
              Home
            </a>
          </li>
          <li>
            <a href="#project" onClick={(e) => { e.preventDefault(); scrollToSection("project"); }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>
              About
            </a>
          </li>
          <li>
            <a href="#expertise" onClick={(e) => { e.preventDefault(); scrollToSection("expertise"); }}>
              Expertise
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
              Contact
            </a>
          </li>
          <li>
            <a href="/Opeyemi resume.pdf" className="resumebtn" download="Lateef-Opeyemi-Resume.pdf">
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger icon */}
        <button
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </header>

      {/* Intro section */}
      <main>
        <p className="hello">- HELLO WORLD</p>
        <h2 className="me" id="home">
          I am Opeyemi. A Frontend Developer <br />
          passionate about building clean, <br />
          user-friendly web experiences.
        </h2>
      </main>

      {/* Page sections */}
      <section id="about"><About /></section>
      <section id="expertise"><Expertise /></section>
      <section id="project"><Project /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default Home;