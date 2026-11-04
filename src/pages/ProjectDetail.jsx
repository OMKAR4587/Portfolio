import { useParams, Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../stylesheets/ProjectDetail.css"

gsap.registerPlugin(ScrollTrigger);

const projectDetails = {
  dashforge: {
    title: "DASHFORGE",
    number: "01",
    subtitle: "Real-Time Market Monitoring Platform",
    category: "FINTECH / WEB DEVELOPMENT",
    overview:
      "A powerful, fast, and intuitive market monitoring website that provides real-time stock prices, financial data, and market insights at your fingertips.",
    features: [
      "Real-time stock tracking",
      "Multiple data sources using Twelve Data and Yahoo Finance APIs",
      "Fast and lightweight Vanilla JavaScript frontend",
      "Responsive desktop and mobile experience",
      "Market insights and financial trends",
      "RESTful API backend with CORS support",
      "MongoDB support for user data and favorites",
    ],
    frontend: ["Vanilla JavaScript", "HTML5", "CSS3", "Fetch API"],
    backend: ["Node.js", "Express.js", "REST API", "MongoDB", "CORS"],
    apis: ["Yahoo Finance API", "Twelve Data API"],
    liveUrl: "https://dashforge-frontend-hrht.onrender.com/",
    githubUrl: "https://github.com/OMKAR4587/DASHFORGE",
    heroImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=85",
    imageOne:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1800&q=85",
    imageTwo:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
    accent: "#b6f36a",
  },

  novachat: {
    title: "NOVACHAT",
    number: "02",
    subtitle: "Your Intelligent AI Workspace",
    category: "ARTIFICIAL INTELLIGENCE / WEB APP",
    overview:
      "A modern AI-powered chat application built to make conversations, coding assistance, and everyday problem-solving simpler.",
    features: [
      "AI-powered conversations",
      "Markdown-formatted AI responses",
      "Create and manage conversations",
      "Local chat history persistence",
      "Responsive sidebar for mobile and desktop",
      "Loading, error, and retry feedback",
      "Supabase authentication integration",
    ],
    frontend: ["React", "Vite", "Tailwind CSS", "Lucide React"],
    backend: ["Node.js", "Express", "Google GenAI SDK"],
    apis: ["Google Gemini API", "Supabase Auth"],
    liveUrl: "",
    githubUrl: "",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=85",
    imageOne:
      "https://images.unsplash.com/photo-1675557009875-436f2e3f7e4b?auto=format&fit=crop&w=1800&q=85",
    imageTwo:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1800&q=85",
    accent: "#a78bfa",
  },

  kickshub: {
    title: "KICKSHUB",
    number: "03",
    subtitle: "Modern Sneaker E-Commerce Platform",
    category: "E-COMMERCE / FULL-STACK DEVELOPMENT",
    overview:
      "A full-stack sneaker shopping platform built for sneaker enthusiasts to discover products, explore collections, manage their cart and wishlist, and experience checkout.",
    features: [
      "Sneaker product discovery",
      "User authentication",
      "Shopping cart and quantity management",
      "Wishlist functionality",
      "Order management",
      "Stripe checkout integration",
      "Responsive shopping experience",
    ],
    frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "GSAP"],
    backend: ["Node.js", "Express", "Prisma ORM", "PostgreSQL"],
    apis: ["Stripe", "JWT Authentication"],
    liveUrl: "",
    githubUrl: "",
    heroImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2000&q=85",
    imageOne:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1800&q=85",
    imageTwo:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1800&q=85",
    accent: "#ff9d6c",
  },
};

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug];
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    if (!project || !pageRef.current) return;

    const ctx = gsap.context(() => {
      // Initial hero entrance
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from(".detail-nav", {
          y: -25,
          autoAlpha: 0,
          duration: 0.8,
        })
        .from(
          ".detail-hero-copy > *",
          {
            y: 55,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.13,
          },
          "-=0.35"
        )
        .from(
          ".detail-hero-image",
          {
            scale: 1.12,
            autoAlpha: 0,
            duration: 1.4,
          },
          "-=0.65"
        );

      // Hero image parallax
      gsap.to(".detail-hero-image img", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: ".detail-hero-image",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Section reveal
      gsap.utils.toArray(".detail-reveal").forEach((section) => {
        gsap.from(section, {
          y: 65,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        });
      });

      // Feature cards stagger
      gsap.from(".detail-feature-card", {
        y: 45,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".detail-feature-grid",
          start: "top 82%",
          once: true,
        },
      });

      // Showcase image parallax
      gsap.utils.toArray(".detail-showcase-image").forEach((image) => {
        const img = image.querySelector("img");

        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // Technology tags
      gsap.from(".detail-tech-tag", {
        y: 18,
        autoAlpha: 0,
        stagger: 0.045,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".detail-tech-grid",
          start: "top 82%",
          once: true,
        },
      });

      // Footer entrance
      gsap.from(".detail-footer-content", {
        y: 45,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".detail-footer",
          start: "top 85%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <main className="detail-not-found">
        <h1>PROJECT NOT FOUND</h1>
        <Link to="/#projects">← Back to projects</Link>
      </main>
    );
  }

  return (
    <main
      className="project-detail-page"
      ref={pageRef}
      style={{ "--project-accent": project.accent }}
    >
      <nav className="detail-nav">
        <Link to="/#projects" className="detail-back-link">
          <span>←</span> Back to projects
        </Link>
        <span className="detail-nav-label">INDEPENDENT WORK / 2026</span>
        <span className="detail-nav-index">{project.number} — 03</span>
      </nav>

      {/* HERO */}
      <header className="detail-hero">
        <div className="detail-hero-copy">
          <span className="detail-eyebrow">
            <span className="detail-status-dot" />
            {project.category}
          </span>

          <h1>{project.title}</h1>

          <h2>{project.subtitle}</h2>

          <p>{project.overview}</p>

          <div className="detail-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-primary-link"
              >
                Explore live project <span>↗</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-secondary-link"
              >
                View source code <span>↗</span>
              </a>
            )}
          </div>
        </div>

        <div className="detail-hero-image">
          <img src={project.heroImage} alt={`${project.title} visual`} />
          <div className="detail-image-caption">
            <span>PROJECT / {project.number}</span>
            <span>{project.title}</span>
          </div>
        </div>

        <div className="detail-scroll-note">
          <span>SCROLL TO EXPLORE</span>
          <span className="detail-scroll-line" />
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="detail-overview detail-reveal">
        <div className="detail-section-heading">
          <span>01 / THE IDEA</span>
          <span>OVERVIEW</span>
        </div>

        <div className="detail-overview-content">
          <h2>
            Turning an idea into
            <span> a digital experience.</span>
          </h2>

          <p>{project.overview}</p>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="detail-showcase">
        <div className="detail-showcase-heading detail-reveal">
          <span>02 / VISUAL DIRECTION</span>
          <h2>Inside the experience.</h2>
        </div>

        <div className="detail-showcase-image detail-showcase-large">
          <img src={project.imageOne} alt={`${project.title} showcase one`} />
          <span className="detail-showcase-label">01 — EXPERIENCE</span>
        </div>

        <div className="detail-showcase-bottom">
          <div className="detail-showcase-image detail-showcase-small">
            <img src={project.imageTwo} alt={`${project.title} showcase two`} />
            <span className="detail-showcase-label">02 — DETAILS</span>
          </div>

          <div className="detail-showcase-note detail-reveal">
            <span>DESIGNED WITH PURPOSE</span>
            <h3>
              Thoughtful details.
              <br />
              Meaningful experiences.
            </h3>
            <p>
              A closer look at the visual direction and experience behind
              this project.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="detail-features detail-reveal">
        <div className="detail-section-heading">
          <span>03 / CAPABILITIES</span>
          <span>FEATURES</span>
        </div>

        <div className="detail-features-title">
          <h2>
            Made to do
            <br />
            <span>more.</span>
          </h2>
          <p>
            The key capabilities that bring this project to life.
          </p>
        </div>

        <div className="detail-feature-grid">
          {project.features.map((feature, index) => (
            <article className="detail-feature-card" key={feature}>
              <span className="detail-feature-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{feature}</h3>
              <span className="detail-feature-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="detail-technology detail-reveal">
        <div className="detail-section-heading">
          <span>04 / THE TOOLKIT</span>
          <span>TECHNOLOGY</span>
        </div>

        <h2>
          Built with
          <br />
          <span>the right tools.</span>
        </h2>

        <div className="detail-tech-grid">
          {[
            { title: "Frontend", items: project.frontend },
            { title: "Backend", items: project.backend },
            { title: "Integrations", items: project.apis },
          ].map((group) => (
            <div className="detail-tech-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="detail-tech-list">
                {group.items.map((item) => (
                  <span className="detail-tech-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="detail-footer">
        <div className="detail-footer-content">
          <span>HAVE A PROJECT IN MIND?</span>
          <h2>
            Let's create
            <br />
            something <span>great.</span>
          </h2>

          <Link to="/#contact" className="detail-contact-link">
            Get in touch <span>↗</span>
          </Link>

          <div className="detail-footer-bottom">
            <Link to="/#projects">← Back to all projects</Link>
            <span>© 2026 / PROJECT CASE STUDY</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default ProjectDetail;