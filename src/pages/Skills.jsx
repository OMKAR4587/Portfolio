import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

import "../stylesheets/Skills.css";

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiGreensock,
  SiFramer,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   SKILL CATEGORY DATA
========================================= */

const categories = [
  {
    title: "Frontend",
    number: "01",
    subtitle: "Crafting interfaces & experiences",
    skills: [
      {
        icon: <SiReact />,
        name: "React",
        description: "Component-based UI development",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
        description: "Modern React applications",
      },
      {
        icon: <SiJavascript />,
        name: "JavaScript",
        description: "Interactive web experiences",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
        description: "Typed JavaScript development",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
        description: "Utility-first styling",
      },
      {
        icon: <SiRedux />,
        name: "Redux Toolkit",
        description: "Predictable state management",
      },
    ],
  },
  {
    title: "Backend",
    number: "02",
    subtitle: "Building the logic behind products",
    skills: [
      {
        icon: <SiNodedotjs />,
        name: "Node.js",
        description: "Server-side JavaScript",
      },
      {
        icon: <SiExpress />,
        name: "Express.js",
        description: "Backend APIs and routing",
      },
    ],
  },
  {
    title: "Database",
    number: "03",
    subtitle: "Structuring and managing information",
    skills: [
      {
        icon: <SiMongodb />,
        name: "MongoDB",
        description: "Document-based data storage",
      },
      {
        icon: <SiMysql />,
        name: "MySQL",
        description: "Relational database management",
      },
    ],
  },
  {
    title: "Tools",
    number: "04",
    subtitle: "The tools behind my workflow",
    skills: [
      {
        icon: <SiGit />,
        name: "Git",
        description: "Version control",
      },
      {
        icon: <SiGithub />,
        name: "GitHub",
        description: "Code collaboration",
      },
      {
        icon: <SiPostman />,
        name: "Postman",
        description: "API testing",
      },
      {
        icon: <SiFigma />,
        name: "Figma",
        description: "Interface design",
      },
      {
        icon: <SiGreensock />,
        name: "GSAP",
        description: "Advanced web animations",
      },
      {
        icon: <SiFramer />,
        name: "Framer Motion",
        description: "React animation library",
      },
    ],
  },
];

/* =========================================
   SKILL PAGE CONTENT
========================================= */

function SkillPage({ category }) {
  return (
    <div className="skill-page-content">
      {/* Page header */}
      <div className="page-topline">
        <span>CHAPTER {category.number}</span>
        <span>SKILLS / 2026</span>
      </div>

      {/* Category heading */}
      <div className="page-heading">
        <span className="page-number">{category.number}</span>

        <h3>{category.title}</h3>

        <p>{category.subtitle}</p>
      </div>

      {/* Skills list */}
      <div className="book-skill-list">
        {category.skills.map((skill, index) => (
          <div className="book-skill" key={skill.name}>
            <span className="book-skill-icon">{skill.icon}</span>

            <div className="book-skill-info">
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </div>

            <span className="book-skill-index">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      {/* Page footer */}
      <div className="page-footer">
        <span>TECHNOLOGY & PRACTICE</span>
        <span>{category.number} — 04</span>
      </div>
    </div>
  );
}

/* =========================================
   BACK OF A TURNING PAGE
========================================= */

function PageBack({ number }) {
  return (
    <div className="page-back-content">
      <span className="page-back-label">THE DEV BOOK</span>

      <span className="page-back-symbol">✳</span>

      <span className="page-back-number">{number}</span>
    </div>
  );
}

/* =========================================
   MAIN SKILLS COMPONENT
========================================= */

export default function Skills() {
  // Main pinned section.
  const sectionRef = useRef(null);

  // Book entrance and cover animation.
  const bookAreaRef = useRef(null);
  const coverRef = useRef(null);

  // Individual turning pages.
  const pageRefs = useRef([]);

  // GSAP timeline.
  const timelineRef = useRef(null);

  // Prevent unnecessary active category updates.
  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  // Reuse the Lenis instance from the main application.
  const lenis = useLenis();

  /* =========================================
     BOOK ANIMATION
  ========================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /*
        RESPONSIVE ENTRANCE VALUES

        Desktop:
        Book starts further left and slightly smaller.

        Mobile:
        Smaller horizontal movement to avoid
        pushing the book outside the viewport.
      */

      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      const initialX = isMobile ? -35 : -150;
      const initialScale = isMobile ? 0.94 : 0.92;

      // Closed book initial position.
      gsap.set(bookAreaRef.current, {
        x: initialX,
        scale: initialScale,
        transformOrigin: "center center",
      });

      // Closed front cover.
      gsap.set(coverRef.current, {
        rotationY: 0,
        transformOrigin: "left center",
        zIndex: 20,
      });

      // All individual pages start flat.
      gsap.set(pageRefs.current, {
        rotationY: 0,
        transformOrigin: "left center",
      });

      /*
        TOTAL TIMELINE DURATION: 4.75

        0.00 - 0.75  Book entrance
        0.75 - 1.75  Cover opens
        1.75 - 2.75  Frontend turns
        2.75 - 3.75  Backend turns
        3.75 - 4.75  Database turns

        Tools remains as the final right page.
      */

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: () => `+=${window.innerHeight * 4.75}`,

          pin: true,
          scrub: 1,

          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const progress = self.progress * 4.75;

            /*
              Keep the category index synchronized
              with the currently visible chapter.
            */

            const index = gsap.utils.clamp(
              0,
              3,
              Math.floor(progress - 1.75 + 0.001),
            );

            if (index !== activeIndexRef.current) {
              activeIndexRef.current = index;
              setActiveIndex(index);
            }
          },
        },
      });

      timelineRef.current = timeline;

      // -------------------------------------
      // STAGE 1: BOOK ENTERS AND EXPANDS
      // -------------------------------------

      timeline.to(bookAreaRef.current, {
        x: 0,
        scale: 1,
        duration: 0.75,
        ease: "power2.out",
      });

      // -------------------------------------
      // STAGE 2: OPEN THE FRONT COVER
      // -------------------------------------

      timeline.to(coverRef.current, {
        rotationY: -180,
        duration: 1,
        ease: "power2.inOut",
      });

      /*
        The back of the cover is now visible
        as the inside-left page.
      */

      timeline.set(coverRef.current, {
        zIndex: 5,
      });

      // -------------------------------------
      // STAGE 3: TURN CATEGORY PAGES
      // -------------------------------------

      pageRefs.current.forEach((page, index) => {
        timeline.to(page, {
          rotationY: -180,
          duration: 1,
          ease: "power1.inOut",
        });

        /*
          Stack the turned pages in order.
          Each newly turned page sits above
          the previous left-side pages.
        */

        timeline.set(page, {
          zIndex: 16 + index,
        });
      });
    }, section);

    return () => {
      timelineRef.current = null;
      ctx.revert();
    };
  }, []);

  /* =========================================
     CATEGORY CLICK NAVIGATION
  ========================================= */

  const handleCategoryClick = (index) => {
    const trigger = timelineRef.current?.scrollTrigger;

    if (!trigger) return;

    /*
      Each category has a corresponding
      scroll position in the pinned timeline.

      Frontend = 1.75
      Backend  = 2.75
      Database = 3.75
      Tools    = 4.75
    */

    const targetProgress = (index + 1.75) / 4.75;

    const targetScroll =
      trigger.start + (trigger.end - trigger.start) * targetProgress;

    if (lenis) {
      lenis.scrollTo(targetScroll, {
        duration: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  /* =========================================
     COMPONENT JSX
  ========================================= */

  return (
    <section
      ref={sectionRef}
      className="skills-section"
      aria-label="My technical skills"
    >
      <div className="skills-layout">
        <div className="skills-main-heading">
          {/* <p className="skills-eyebrow">A LITTLE ABOUT MY TOOLKIT</p> */}

          <h2 className="skills-heading">
            Skills &
            {/* <br /> */}
            <span>Technologies.</span>
          </h2>

          {/* <p className="skills-intro">
            The tools and technologies I use to turn ideas into thoughtful
            digital experiences.
          </p> */}
        </div>
        {/* =================================
            LEFT SIDE: INTRO + CATEGORIES
        ================================= */}

        <aside className="skills-sidebar">
          {/* <p className="skills-eyebrow">
            A LITTLE ABOUT MY TOOLKIT
          </p>

          <h2 className="skills-heading">
            Skills &
            <br />
            <span>Technologies.</span>
          </h2>

          <p className="skills-intro">
            The tools and technologies I use to turn ideas
            into thoughtful digital experiences.
          </p> */}

          {/* Chapter navigation */}
          <nav className="skills-category-list" aria-label="Skill categories">
            {categories.map((category, index) => (
              <button
                key={category.title}
                type="button"
                className={`skills-category ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(index)}
                aria-pressed={activeIndex === index}
              >
                <span className="category-number">{category.number}</span>

                <span className="category-name">{category.title}</span>

                <span className="category-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* =================================
            RIGHT SIDE: BOOK
        ================================= */}

        <div className="skills-book-area" ref={bookAreaRef}>
          <div className="skills-book">
            {/* ---------------------------------
                FINAL RIGHT PAGE: TOOLS
                This remains underneath the leaves.
            --------------------------------- */}

            <div className="book-right-page">
              <SkillPage category={categories[3]} />
            </div>

            {/* ---------------------------------
                THREE INDIVIDUAL TURNING PAGES
            --------------------------------- */}

            {categories.slice(0, 3).map((category, index) => (
              <div
                key={category.title}
                ref={(element) => {
                  pageRefs.current[index] = element;
                }}
                className={`page-leaf page-leaf-${index + 1}`}
                style={{
                  zIndex: 15 - index,
                }}
              >
                {/* Front side of the sheet */}
                <div className="page-leaf-front">
                  <SkillPage category={category} />
                </div>

                {/* Back side of the sheet */}
                <div className="page-leaf-back">
                  <PageBack number={category.number} />
                </div>
              </div>
            ))}

            {/* ---------------------------------
                FRONT COVER
                The reverse side becomes the
                inside-left page when opened.
            --------------------------------- */}

            <div className="book-cover" ref={coverRef}>
              {/* Front cover */}
              <div className="cover-front">
                <div className="cover-inset">
                  <div className="cover-top">
                    <span>PERSONAL ARCHIVE</span>
                    <span>VOL. 001</span>
                  </div>

                  <div className="cover-title">
                    <span>THE</span>

                    <h3>DEV</h3>
                    <h3>BOOK.</h3>

                    <p>
                      A COLLECTION OF SKILLS
                      <br />& TECHNOLOGIES
                    </p>
                  </div>

                  <div className="cover-bottom">
                    <span>DESIGN. DEVELOP. CREATE.</span>
                    <span>2026</span>
                  </div>
                </div>
              </div>

              {/* Inside cover / left page */}
              <div className="cover-back">
                <div className="inside-cover-content">
                  <span className="inside-cover-label">MY TOOLKIT</span>

                  <span className="inside-cover-symbol">✳</span>

                  <h3>
                    Curiosity
                    <br />
                    meets
                    <br />
                    creation.
                  </h3>

                  <span className="inside-cover-number">04</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Book caption */}
        {/* <div className="book-caption">

            <span>AN INTERACTIVE SKILL ARCHIVE</span>

            <span>
              {categories[activeIndex].number} / 04
            </span>

          </div> */}
      </div>
    </section>
  );
}
