import { useParams, Link } from "react-router-dom";

const projectDetails = {
  dashforge: {
    title: "DASHFORGE",
    subtitle: "Real-Time Market Monitoring Platform",
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
  },

  novachat: {
    title: "NOVACHAT",
    subtitle: "Your Intelligent AI Workspace",
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
  },

  kickshub: {
    title: "KICKSHUB",
    subtitle: "Modern Sneaker E-Commerce Platform",
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
  },
};

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <main className="project-not-found">
        <h1>Project not found</h1>
        <Link to="/#projects">Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="project-detail-page">
      <nav className="project-detail-nav">
        <Link to="/#projects" className="project-back-link">
          ← Back to projects
        </Link>

        <span>PROJECT CASE STUDY</span>
      </nav>

      <section className="project-detail-hero">
        <span className="project-detail-eyebrow">
          SELECTED WORK / {project.title}
        </span>

        <h1>{project.title}</h1>

        <h2>{project.subtitle}</h2>

        <p>{project.overview}</p>

        <div className="project-detail-actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live website ↗
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub ↗
            </a>
          )}
        </div>
      </section>

      <section className="project-detail-section">
        <span className="detail-section-label">01 / OVERVIEW</span>
        <h2>About the project</h2>
        <p>{project.overview}</p>
      </section>

      <section className="project-detail-section">
        <span className="detail-section-label">02 / FEATURES</span>
        <h2>What it offers</h2>

        <div className="detail-feature-grid">
          {project.features.map((feature, index) => (
            <article className="detail-feature" key={feature}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-detail-section">
        <span className="detail-section-label">03 / TECHNOLOGY</span>
        <h2>Built with</h2>

        <div className="detail-tech-grid">
          <div>
            <h3>Frontend</h3>
            {project.frontend.map((item) => (
              <span className="detail-tech-tag" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div>
            <h3>Backend</h3>
            {project.backend.map((item) => (
              <span className="detail-tech-tag" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div>
            <h3>Integrations</h3>
            {project.apis.map((item) => (
              <span className="detail-tech-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="project-detail-footer">
        <Link to="/#projects">← Explore more projects</Link>
      </footer>
    </main>
  );
}

export default ProjectDetail;