import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import "../stylesheets/Project.css";
import ProjectCardAnimation from "../hooks/ProjectCardAnimation";

import overlayImg from "../assets/images/project-one-bg.png";
import dashforgeProject from "../assets/videos/Dashforge-Overview.mp4";

const projects = [
  {
    id: 1,
    slug: "dashforge",
    title: "Dashforge",
    category: "FINANCE & MARKET MONITORING",
    description:
      "A real-time market monitoring platform for tracking stock prices, financial data, and market insights.",
    action: "/projects/dashforge",
  },
  {
    id: 2,
    slug: "novachat",
    title: "NovaChat",
    category: "AI & PRODUCTIVITY",
    description:
      "An AI-powered workspace designed to make conversations, coding assistance, and everyday problem-solving simpler.",
    action: "/projects/novachat",
  },
  {
    id: 3,
    slug: "kickshub",
    title: "KicksHub",
    category: "E-COMMERCE",
    description:
      "A modern sneaker shopping platform featuring product discovery, cart management, wishlists, and Stripe checkout.",
    action: "/projects/kickshub",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const projectRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = ProjectCardAnimation(sectionRef, projectRef);

    return () => {
      if (typeof cleanup === "function") {
        cleanup();
      }
    };
  }, []);

  return (
    <div className="project-wraper" ref={sectionRef}>
      {/* PROJECT DETAIL PANELS */}
      {projects.map((project) => (
        <section
          key={project.id}
          className={`projects-detail-section project-detail-container-${project.id}`}
        >
          <div className="project-left">
            <div className="project-count">
              <span className="project-count-index">
                {String(project.id).padStart(2, "0")}
              </span>
              <span className="total-project-count">
                / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <header className="project-content">
              <span className="project-category">{project.category}</span>

              <h2 className="project-title">{project.title}</h2>

              <button
                type="button"
                className="case-study-btn"
                onClick={() => navigate(project.action)}
              >
                <span>View project</span>
                <span aria-hidden="true">↗</span>
              </button>
            </header>

            <div className="project-description">
              <p className="project-description-text">{project.description}</p>
            </div>
          </div>
        </section>
      ))}
      {/* PROJECT PREVIEW / ANIMATION AREA */}
      <section className="Project-section" aria-label="Project previews">
        <div className="Project-container" ref={projectRef}>
          {/* FIRST PROJECT OVERLAY */}
          <img
            className="project-container-overlay"
            src={overlayImg}
            alt=""
            aria-hidden="true"
          />

          {/* SECOND PROJECT */}
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
                  <source src={dashforgeProject} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </figure>
            </div>
          </article>

          {/* THIRD PROJECT */}
          <article className="my-project-3">
            <div className="two-color">
              <figure
                className="project-holder-3"
                role="img"
                aria-label="Third project preview"
              />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
