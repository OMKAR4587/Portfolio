
import React, { useEffect, useRef } from "react";

import "../stylesheets/Project.css";
import ProjectCardAnimation from "../hooks/ProjectCardAnimation";

import overlayImg from "../assets/images/project-one-bg.png";
import dashforgeProject from "../assets/videos/Dashforge-Overview.mp4";

const projects = [
  {
    id: 1,
    title: "Mercer Mass Timber",
    description:
      "A three-year collaboration evolving a complex, technical website into a scalable digital platform.",
    action: () => console.log("Clicked project 1"),
  },
  {
    id: 2,
    title: "Dashforge",
    description:
      "A modern dashboard experience designed to make complex information easier to manage.",
    action: () =>
      window.open(
        "https://dashforge-frontend-hrht.onrender.com/",
        "_blank",
        "noopener,noreferrer"
      ),
  },
  {
    id: 3,
    title: "Mercer Mass Timber",
    description:
      "A three-year collaboration evolving a complex, technical website into a scalable digital platform.",
    action: () => console.log("Clicked project 3"),
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    ProjectCardAnimation(sectionRef, projectRef);
  }, []);

  return (
    <div
      className="project-wraper"
      ref={sectionRef}
    >
      {projects.map((project) => (
        <section
          key={project.id}
          className={`projects-detail-section project-detail-container-${project.id}`}
          aria-labelledby={`project-title-${project.id}`}
        >
          <div className="project-left">

            <div className="project-count" aria-label={`Project ${project.id} of 3`}>
              <span className="project-count-index">
                {String(project.id).padStart(2, "0")}
              </span>

              <span className="total-project-count">
                / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <header className="project-content">
              <h2
                id={`project-title-${project.id}`}
                className="project-title"
              >
                {project.title}
              </h2>

              <button
                type="button"
                className="case-study-btn"
                onClick={project.action}
              >
                View case study
              </button>
            </header>

            <div className="project-description">
              <p className="project-description-text">
                {project.description}
              </p>
            </div>

          </div>
        </section>
      ))}

      <section
        className="Project-section"
        aria-label="Project previews"
      >
        <div className="Project-container" ref={projectRef}>

          <img
            className="project-container-overlay"
            src={overlayImg}
            alt=""
            aria-hidden="true"
          />

          <article className="my-project-2">
            <div className="one-color">
              <figure className="project-holder-2">
                <video
                  className="project-video"
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  aria-label="Dashforge project preview"
                >
                  <source
                    src={dashforgeProject}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </figure>
            </div>
          </article>

          <article className="my-project-3">
            <div className="two-color">
              <figure className="project-holder-3" />
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
