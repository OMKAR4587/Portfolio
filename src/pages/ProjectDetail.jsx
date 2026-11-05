import { useLayoutEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../stylesheets/ProjectDetail.css";

gsap.registerPlugin(ScrollTrigger);

const projectDetails = {
  dashforge: {
    number: "01",
    title: "DASHFORGE",
    subtitle: "Real-time market monitoring platform",
    category: "FINANCE / WEB APPLICATION",
    year: "2026",
    accent: "#a4c957",
    overview:
      "Dashforge is a market-monitoring platform designed to bring stock prices, financial information, and market insights into one accessible interface. It combines a lightweight Vanilla JavaScript frontend with a Node.js and Express backend.",
    challenge:
      "Presenting financial information in a clear and accessible way while connecting the frontend to multiple financial data sources.",
    solution:
      "A responsive web experience backed by REST APIs, with financial data integrations and MongoDB support for user data and favorites.",
    features: [
      "Real-time stock tracking",
      "Financial data from multiple sources",
      "Yahoo Finance and Twelve Data integrations",
      "Market insights and financial trends",
      "RESTful backend API",
      "MongoDB support for user data and favorites",
      "Responsive desktop and mobile interface",
      "CORS-enabled API communication",
    ],
    stack: [
      {
        title: "Frontend",
        description: "The client-side interface and browser functionality.",
        items: [
          ["HTML5", "Page structure and semantic markup"],
          ["CSS3", "Visual styling and responsive layouts"],
          ["Vanilla JavaScript", "Frontend interactions and application logic"],
          ["Fetch API", "Making HTTP requests to backend and data services"],
        ],
      },
      {
        title: "Backend",
        description: "Server-side application and data management.",
        items: [
          ["Node.js", "JavaScript runtime for the server"],
          ["Express.js", "Backend application and REST endpoints"],
          ["REST API", "Communication between client and server"],
          ["MongoDB", "Database support for user data and favorites"],
          ["CORS", "Cross-origin request support"],
        ],
      },
      {
        title: "External integrations",
        description:
          "External financial data providers used by the application.",
        items: [
          ["Yahoo Finance API", "Financial and market data source"],
          ["Twelve Data API", "Market data integration"],
        ],
      },
    ],
    workflow: [
      [
        "01",
        "User interaction",
        "The user explores the market-monitoring interface.",
      ],
      [
        "02",
        "Data requests",
        "The frontend uses Fetch API to communicate with services.",
      ],
      [
        "03",
        "Backend",
        "The Node.js and Express backend exposes REST endpoints.",
      ],
      [
        "04",
        "Data integrations",
        "Financial information is sourced through the configured providers.",
      ],
    ],
    liveUrl: "https://dashforge-frontend-hrht.onrender.com/",
    githubUrl: "https://github.com/OMKAR4587/DASHFORGE",
    heroImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2200&q=85",
    images: [
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
    ],
    next: "novachat",
  },

  novachat: {
    number: "02",
    title: "NOVACHAT",
    subtitle: "Your intelligent AI workspace",
    category: "AI / PRODUCTIVITY",
    year: "2026",
    accent: "#9b8af7",
    overview:
      "NovaChat is an AI-powered chat workspace designed to make conversations, coding assistance, and everyday problem-solving simpler. It brings AI interactions and conversation management into a responsive interface.",
    challenge:
      "Creating a chat experience that makes AI responses easy to read, conversations easy to manage, and interaction states clear.",
    solution:
      "A React-based frontend connected to a Node.js and Express backend using the Google GenAI SDK, with Supabase authentication integration.",
    features: [
      "AI-powered conversations",
      "Markdown-formatted AI responses",
      "Conversation creation and management",
      "Local chat history persistence",
      "Responsive sidebar for mobile and desktop",
      "Loading and error feedback",
      "Retry functionality",
      "Supabase authentication integration",
    ],
    stack: [
      {
        title: "Frontend",
        description: "The chat interface and user experience.",
        items: [
          ["React", "Component-based user interface"],
          ["Vite", "Frontend development and build tooling"],
          ["Tailwind CSS", "Utility-based interface styling"],
          ["Lucide React", "Interface icon library"],
        ],
      },
      {
        title: "Backend",
        description: "Server-side application and AI integration.",
        items: [
          ["Node.js", "JavaScript server runtime"],
          ["Express", "Backend application framework"],
          [
            "Google GenAI SDK",
            "Integration with Google's generative AI services",
          ],
        ],
      },
      {
        title: "External integrations",
        description: "AI and authentication services.",
        items: [
          ["Google Gemini API", "AI conversation integration"],
          ["Supabase Auth", "Authentication integration"],
        ],
      },
    ],
    workflow: [
      ["01", "User input", "The user starts or continues a conversation."],
      [
        "02",
        "Backend request",
        "The application communicates with its Express backend.",
      ],
      [
        "03",
        "AI integration",
        "The Google GenAI SDK connects the application to Gemini.",
      ],
      [
        "04",
        "Response",
        "The interface displays formatted AI responses and interaction states.",
      ],
    ],
    liveUrl: "",
    githubUrl: "",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2200&q=85",
    images: [
      "https://images.unsplash.com/photo-1675557009875-436f2e3f7e4b?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1800&q=85",
    ],
    next: "kickshub",
  },

  kickshub: {
    number: "03",
    title: "KICKSHUB",
    subtitle: "Modern sneaker e-commerce platform",
    category: "E-COMMERCE / FULL STACK",
    year: "2026",
    accent: "#ee9b70",
    overview:
      "KicksHub is a full-stack sneaker shopping platform built for sneaker enthusiasts. It brings product discovery, collections, cart management, wishlists, and checkout into one shopping experience.",
    challenge:
      "Bringing the key parts of an online sneaker-shopping experience together, from product discovery to cart management and checkout.",
    solution:
      "A React and TypeScript frontend supported by a Node.js and Express backend, with Prisma ORM, PostgreSQL, Stripe, and JWT authentication.",
    features: [
      "Sneaker product discovery",
      "User authentication",
      "Shopping cart management",
      "Product quantity management",
      "Wishlist functionality",
      "Order management",
      "Stripe checkout integration",
      "Responsive shopping experience",
    ],
    stack: [
      {
        title: "Frontend",
        description: "The shopping interface and interactions.",
        items: [
          ["React", "Component-based shopping interface"],
          ["TypeScript", "Typed JavaScript development"],
          ["Vite", "Frontend development and build tooling"],
          ["Tailwind CSS", "Utility-based interface styling"],
          ["GSAP", "Frontend animation library"],
        ],
      },
      {
        title: "Backend",
        description: "Server-side application and database layer.",
        items: [
          ["Node.js", "JavaScript server runtime"],
          ["Express", "Backend application framework"],
          ["Prisma ORM", "Database access and ORM layer"],
          ["PostgreSQL", "Relational database"],
        ],
      },
      {
        title: "Payments and authentication",
        description: "External services and application security.",
        items: [
          ["Stripe", "Checkout and payment integration"],
          ["JWT Authentication", "Token-based authentication"],
        ],
      },
    ],
    workflow: [
      ["01", "Discover", "Users browse and discover sneaker products."],
      ["02", "Manage", "Users manage cart items, quantities, and wishlists."],
      [
        "03",
        "Authenticate",
        "JWT authentication supports the authentication flow.",
      ],
      ["04", "Checkout", "Stripe provides the payment integration."],
    ],
    liveUrl: "",
    githubUrl: "",
    heroImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2200&q=85",
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1800&q=85",
    ],
    next: "dashforge",
  },
};

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug];
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    if (!project || !pageRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      // 01 — CINEMATIC INTRO
      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from(".case-nav", {
          y: -35,
          autoAlpha: 0,
          duration: 1,
        })
        .from(
          ".case-eyebrow",
          {
            y: 25,
            autoAlpha: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .from(
          ".case-title",
          {
            y: 110,
            autoAlpha: 0,
            duration: 1.2,
            skewY: 5,
          },
          "-=0.5",
        )
        .from(
          ".case-subtitle, .case-intro, .case-actions",
          {
            y: 35,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.15,
          },
          "-=0.7",
        )
        .from(
          ".case-hero-visual",
          {
            clipPath: "inset(20% 15% 20% 15% round 20px)",
            scale: 1.12,
            autoAlpha: 0,
            duration: 1.5,
            ease: "power3.inOut",
          },
          "-=0.6",
        );

      // 02 — HERO PARALLAX
      gsap.to(".case-hero-visual img", {
        yPercent: 20,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".case-hero-visual",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // 03 — SECTION REVEALS
      gsap.utils.toArray(".case-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 70,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          },
        );
      });

      // 04 — HORIZONTAL SCREENSHOT EXPERIENCE
      mm.add("(min-width: 768px)", () => {
        const section = document.querySelector(".case-gallery-viewport");
        const track = document.querySelector(".case-gallery-track");

        if (!section || !track) return;

        const horizontalTween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + (track.scrollWidth - window.innerWidth),
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.utils.toArray(".case-horizontal-image").forEach((image) => {
          gsap.fromTo(
            image,
            {
              scale: 1.15,
            },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: image.closest(".case-horizontal-panel"),
                containerAnimation: horizontalTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });

        return () => {
          horizontalTween.scrollTrigger?.kill();
          horizontalTween.kill();
        };
      });

      // 05 — MOBILE GALLERY REVEAL
      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray(".case-horizontal-panel").forEach((panel) => {
          gsap.from(panel, {
            y: 45,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 88%",
              once: true,
            },
          });
        });
      });

      // 06 — FEATURE CARDS
      gsap.from(".case-feature", {
        y: 65,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".case-feature-grid",
          start: "top 82%",
          once: true,
        },
      });

      // 07 — TECH STACK
      gsap.from(".case-stack-group", {
        y: 60,
        autoAlpha: 0,
        stagger: 0.18,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".case-stack-grid",
          start: "top 82%",
          once: true,
        },
      });

      // 08 — WORKFLOW
      gsap.from(".case-workflow-step", {
        x: -45,
        autoAlpha: 0,
        stagger: 0.16,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".case-workflow-list",
          start: "top 82%",
          once: true,
        },
      });

      // 09 — FOOTER REVEAL
      gsap.from(".case-next-link", {
        y: 70,
        autoAlpha: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".case-footer",
          start: "top 85%",
          once: true,
        },
      });

      // Recalculate positions after images load.
      window.addEventListener("load", ScrollTrigger.refresh);
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, [project]);

  if (!project) {
    return (
      <main className="case-not-found">
        <h1>PROJECT NOT FOUND</h1>
        <Link to="/#projects">← Back to projects</Link>
      </main>
    );
  }

  const nextProject = projectDetails[project.next];

  return (
    <main
      className="case-page"
      ref={pageRef}
      style={{ "--case-accent": project.accent }}
    >
      <nav className="case-nav">
        <Link to="/#projects" className="case-back">
          <span className="back-icon">↖</span>
          <span>Back to projects</span>
        </Link>

        <div className="case-nav-center">
          <span className="nav-label">SELECTED WORK</span>
          <span className="nav-divider" />
          <span className="nav-category">INDEPENDENT / {project.year}</span>
        </div>

        <div className="case-nav-number">
          <span className="number-current">{project.number}</span>
          <span className="number-divider">/</span>
          <span className="number-total">03</span>
        </div>
      </nav>

      <header className="case-hero">
        <div className="case-hero-copy">
          <span className="case-eyebrow">
            <i /> {project.category}
          </span>

          <h1 className="case-title">{project.title}</h1>
          <h2 className="case-subtitle">{project.subtitle}</h2>
          <p className="case-intro">{project.overview}</p>

          <div className="case-actions">
            {project.liveUrl && (
              <a
                className="case-primary-link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live website <span>↗</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                className="case-secondary-link"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore source code <span>↗</span>
              </a>
            )}
          </div>
        </div>

        <div className="case-hero-visual">
          <img src={project.heroImage} alt={`${project.title} visual`} />
          <span className="case-image-caption">
            {project.title} / SELECTED PROJECT
          </span>
        </div>

        <div className="case-scroll-cue">SCROLL TO EXPLORE ↓</div>
      </header>

      <section className="case-introduction case-reveal">
        <div className="case-section-label">
          <span>01 / PROJECT OVERVIEW</span>
          <span>THE BRIEF</span>
        </div>

        <div className="case-intro-grid">
          <h2>
            An idea.
            <br />
            A challenge.
            <br />
            <span>A digital solution.</span>
          </h2>

          <div className="case-brief-copy">
            <div>
              <span>THE CHALLENGE</span>
              <p>{project.challenge}</p>
            </div>
            <div>
              <span>THE APPROACH</span>
              <p>{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-gallery">
        <div className="case-gallery-heading case-reveal">
          <div className="case-section-label">
            <span>02 / VISUAL SHOWCASE</span>
            <span>THE EXPERIENCE</span>
          </div>

          <h2>
            A closer look.
            <br />
            <span>Beyond the interface.</span>
          </h2>

          <p>
            Explore the experience through a series of selected screens and
            visual details.
          </p>
        </div>

        <div className="case-gallery-viewport">
          <div className="case-gallery-track">
            {project.images.map((image, index) => (
              <article className="case-horizontal-panel" key={image}>
                <div className="case-horizontal-image-wrap">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="case-horizontal-image"
                  />

                  <span className="case-image-overlay-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="case-horizontal-caption">
                  <span>
                    {project.title} / 0{index + 1}
                  </span>

                  <span>SELECTED VIEW ↗</span>
                </div>
              </article>
            ))}

            <div className="case-gallery-end">
              <span>THE EXPERIENCE</span>
              <h3>
                Designed to
                <br />
                make an impact.
              </h3>
              <span>END OF SHOWCASE ↗</span>
            </div>
          </div>
        </div>

        <div className="case-gallery-progress">
          <span>SCROLL TO EXPLORE</span>
          <span>DRAG YOUR WAY THROUGH THE EXPERIENCE →</span>
        </div>
      </section>

      <section className="case-features case-reveal">
        <div className="case-section-label">
          <span>03 / KEY CAPABILITIES</span>
          <span>WHAT IT DOES</span>
        </div>

        <div className="case-feature-heading">
          <h2>
            The details
            <br />
            <span>that matter.</span>
          </h2>
          <p>
            A closer look at the main capabilities included in this project.
          </p>
        </div>

        <div className="case-feature-grid">
          {project.features.map((feature, index) => (
            <article className="case-feature" key={feature}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{feature}</h3>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="case-stack">
        <div className="case-section-label">
          <span>04 / TECHNOLOGY & TOOLS</span>
          <span>THE TOOLKIT</span>
        </div>

        <div className="case-stack-heading case-reveal">
          <h2>
            Built with
            <br />
            <span>the right stack.</span>
          </h2>
          <p>
            The technologies and integrations used in the development of
            {` ${project.title}`}.
          </p>
        </div>

        <div className="case-stack-grid">
          {project.stack.map((group, index) => (
            <article className="case-stack-group" key={group.title}>
              <span className="case-stack-index">
                0{index + 1} / TECHNOLOGY
              </span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="case-stack-items">
                {group.items.map(([name, description]) => (
                  <div className="case-stack-item" key={name}>
                    <div>
                      <strong>{name}</strong>
                      <p>{description}</p>
                    </div>
                    <span>↗</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-workflow case-reveal">
        <div className="case-section-label">
          <span>05 / HOW IT WORKS</span>
          <span>APPLICATION FLOW</span>
        </div>

        <h2>The flow behind the experience.</h2>

        <div className="case-workflow-list">
          {project.workflow.map(([number, title, description]) => (
            <article className="case-workflow-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="case-footer">
        <span>NEXT CASE STUDY / {nextProject.number}</span>
        <Link to={`/projects/${project.next}`} className="case-next-link">
          <span>{nextProject.title}</span>
          <b>↗</b>
        </Link>
        <Link to="/#projects" className="case-all-projects">
          ← Explore all projects
        </Link>
      </footer>
    </main>
  );
}

export default ProjectDetail;
