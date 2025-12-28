import React, { useEffect, useRef } from "react";
import "./project.css";

const Project = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // add reveal on scroll using IntersectionObserver
    const root = containerRef.current;
    if (!root) return;

    const cards = root.querySelectorAll(".proj-card");
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="project-section" aria-labelledby="projects-heading">
      <div className="project-wrap" ref={containerRef}>
        <h2 id="projects-heading">
          Here are some of my favourite projects I have built recently — feel free to check them out.
        </h2>

        <div className="project-grid">
          {/* Card 1 */}
          <article className="proj-card" aria-labelledby="proj-1-title">
            <div className="proj-media" role="img" aria-label="Screenshot of Language Translator app">
              <a href="https://languangetranslator.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src="./project1.jpg" alt="Language translator app screenshot" loading="lazy" />
              </a>
            </div>

            <div className="proj-body">
              <h3 id="proj-1-title" className="proj-title">Language Translator</h3>
              <p className="proj-desc">
                A user-friendly web app that translates text between multiple languages instantly.
                Designed to help users communicate across language barriers, it provides quick and accurate
                translations with a simple, minimal interface.
              </p>

              <div className="proj-links">
                <a
                  className="visit-btn"
                  href="https://languangetranslator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live
                </a>
                <a
                  className="visit-btn"
                  href="https://github.com/Lateef-Opeyemi/languangetranslator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="proj-card" aria-labelledby="proj-2-title">
            <div className="proj-media" role="img" aria-label="Screenshot of Weather app">
              <a href="https://weatherforecast-eosin.vercel.app" target="_blank" rel="noopener noreferrer">
                <img src="./project2.jpg" alt="Weather app screenshot" loading="lazy" />
              </a>
            </div>

            <div className="proj-body">
              <h3 id="proj-2-title" className="proj-title">Weather App</h3>
              <p className="proj-desc">
                A sleek, responsive app that gives real-time weather updates for any city — temperature,
                humidity, wind speed and short forecast. Designed to be fast on mobile and easy to read at-a-glance.
              </p>

              <div className="proj-links">
                <a
                  className="visit-btn"
                  href="https://weatherforecast-eosin.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live
                </a>
                <a
                  className="visit-btn"
                  href="https://github.com/Lateef-Opeyemi/weatherforecast"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Project;