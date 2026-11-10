
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
   SKILL DATA
========================================= */

const data = [
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
   REUSABLE BOOK PAGE CONTENT
========================================= */

function SkillPage({ category }) {
  return (
    <div className="page-inner">

      {/* Page heading */}
      <div className="page-topline">
        <span>CHAPTER {category.number}</span>
        <span>SKILLS / 2026</span>
      </div>

      <div className="page-heading">
        <span>{category.number}</span>

        <h3>{category.title}</h3>

        <p>{category.subtitle}</p>
      </div>

      {/* Technologies */}
      <div className="book-skill-list">
        {category.skills.map((skill, index) => (
          <div className="book-skill" key={skill.name}>

            <span className="book-skill-icon">
              {skill.icon}
            </span>

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
   BACK OF A TURNED PAGE
========================================= */

function PageBack({ number }) {
  return (
    <div className="page-back-content">
      <span className="page-back-label">THE DEV BOOK</span>

      <span className="page-back-symbol">✳</span>

      <span className="page-back-number">
        {number}
      </span>
    </div>
  );
}

/* =========================================
   MAIN SKILLS COMPONENT
========================================= */

export default function Skills() {
  const sectionRef = useRef(null);

  // The front cover opens to reveal its own reverse side.
  const coverRef = useRef(null);

  // The three individual page leaves.
  const pageRefs = useRef([]);

  // Keep the master timeline available for category navigation.
  const timelineRef = useRef(null);

  // Smooth category navigation tween.
  const clickTweenRef = useRef(null);

  // Avoid unnecessary React state updates during scrubbing.
  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  /* =========================================
     GSAP BOOK ANIMATION
  ========================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {

      /*
        Initial state:
        - Cover is closed.
        - All three page leaves are unturned.
        - The cover hides the right-hand pages.
      */

      gsap.set(coverRef.current, {
        rotationY: 0,
        transformOrigin: "left center",
        force3D: true,
      });

      gsap.set(pageRefs.current, {
        rotationY: 0,
        transformOrigin: "left center",
        force3D: true,
      });

      /*
        MASTER TIMELINE

        0 - 1 : Cover opens.
        1 - 2 : Frontend page turns.
        2 - 3 : Backend page turns.
        3 - 4 : Database page turns.
        4 - 5 : Final Tools chapter stays visible.
      */

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },

        scrollTrigger: {
          trigger: section,
          start: "top top",

          // Five timeline units mapped to five scroll sections.
          end: () =>
            `+=${window.innerWidth <= 768 ? 300 : 500}%`,

          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            /*
              The cover takes 1 unit.
              Each page takes another unit.

              After:
              1 = Frontend
              2 = Backend
              3 = Database
              4 = Tools
            */

            const nextIndex = gsap.utils.clamp(
              0,
              3,
              Math.floor(self.progress * 5 + 0.0001) - 1
            );

            if (nextIndex !== activeIndexRef.current) {
              activeIndexRef.current = nextIndex;
              setActiveIndex(nextIndex);
            }
          },
        },
      });

      timelineRef.current = timeline;

      // PHASE 1: Open the front cover.
      timeline.to(coverRef.current, {
        rotationY: -180,
        duration: 1,
        ease: "power2.inOut",
      });

      /*
        PHASE 2: Turn the category pages.

        Frontend is on top.
        Backend is underneath.
        Database is underneath Backend.
        Tools is the final page.

        Each sheet turns from right to left around the spine.
      */

      pageRefs.current.forEach((page) => {
        timeline.to(page, {
          rotationY: -180,
          duration: 1,
          ease: "power1.inOut",
        });
      });

      // PHASE 3: Keep the final chapter visible.
      timeline.to({}, {
        duration: 1,
      });

    }, section);

    /*
      Kill any running click-navigation tween when the user
      manually starts scrolling or touching the page.
    */

    const stopClickNavigation = () => {
      clickTweenRef.current?.kill();
      clickTweenRef.current = null;
    };

    window.addEventListener("wheel", stopClickNavigation, {
      passive: true,
    });

    window.addEventListener("touchstart", stopClickNavigation, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", stopClickNavigation);
      window.removeEventListener("touchstart", stopClickNavigation);

      clickTweenRef.current?.kill();
      timelineRef.current = null;

      ctx.revert();
    };
  }, []);

  /* =========================================
     CATEGORY CLICK NAVIGATION
  ========================================= */

  const handleCategoryClick = (index) => {
    const timeline = timelineRef.current;
    const trigger = timeline?.scrollTrigger;

    if (!trigger) return;

    // Stop an earlier category click animation.
    clickTweenRef.current?.kill();

    /*
      Timeline positions:
      Frontend = 1
      Backend  = 2
      Database = 3
      Tools    = 4

      The timeline has a total duration of 5.
    */

    const targetProgress = (index + 1) / 5;

    const targetScroll =
      trigger.start +
      (trigger.end - trigger.start) * targetProgress;

    // Animate an ordinary number, then apply it to ScrollTrigger.
    const scrollPosition = {
      value: trigger.scroll(),
    };

    clickTweenRef.current = gsap.to(scrollPosition, {
      value: targetScroll,
      duration: 1.1,
      ease: "power3.inOut",

      onUpdate: () => {
        trigger.scroll(scrollPosition.value);
        ScrollTrigger.update();
      },

      onComplete: () => {
        activeIndexRef.current = index;
        setActiveIndex(index);
        clickTweenRef.current = null;
      },
    });
  };

  /* =========================================
     JSX
  ========================================= */

  return (
    <section
      className="skills-section"
      ref={sectionRef}
      aria-label="My technical skills"
    >

      <div className="skills-layout">

        {/* =================================
            LEFT SIDEBAR
        ================================= */}

        <aside className="skills-sidebar">

          <p className="skills-eyebrow">
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
          </p>

          {/* Category navigation */}
          <nav
            className="skills-category-list"
            aria-label="Skill categories"
          >
            {data.map((category, index) => (
              <button
                key={category.title}
                type="button"
                className={`skills-category ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(index)}
                aria-pressed={activeIndex === index}
              >

                <span className="category-number">
                  {category.number}
                </span>

                <span className="category-name">
                  {category.title}
                </span>

                <span
                  className="category-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>

              </button>
            ))}
          </nav>

        </aside>

        {/* =================================
            BOOK AREA
        ================================= */}

        <div className="skills-book-area">

          <div className="skills-book">

            {/* =================================
                FINAL RIGHT PAGE: TOOLS
                This is underneath all page leaves.
            ================================= */}

            <div className="book-right-page">
              <SkillPage category={data[3]} />
            </div>

            {/* =================================
                PAGE LEAVES

                These are the three physical sheets
                that turn from right to left.

                Their back faces are visible after
                each sheet has turned.
            ================================= */}

            {data.slice(0, 3).map((category, index) => (
              <div
                key={category.title}
                className={`page-leaf page-leaf-${index + 1}`}
                ref={(element) => {
                  pageRefs.current[index] = element;
                }}
                style={{
                  zIndex: 10 - index,
                }}
              >

                {/* Front of the page */}
                <div className="page-leaf-front">
                  <SkillPage category={category} />
                </div>

                {/* Back of the page */}
                <div className="page-leaf-back">
                  <PageBack number={category.number} />
                </div>

              </div>
            ))}

            {/* =================================
                FRONT COVER

                IMPORTANT:
                The cover back is the inside-left page.
                There is no separate left-page element.
            ================================= */}

            <div
              className="book-cover"
              ref={coverRef}
            >

              {/* Front of the cover */}
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
                      <br />
                      & TECHNOLOGIES
                    </p>

                  </div>

                  <div className="cover-bottom">
                    <span>DESIGN. DEVELOP. CREATE.</span>
                    <span>2026</span>
                  </div>

                </div>

              </div>

              {/* Reverse side of the cover = LEFT PAGE */}
              <div className="cover-back">

                <div className="inside-cover-content">

                  <span className="inside-cover-label">
                    MY TOOLKIT
                  </span>

                  <span className="inside-cover-symbol">
                    ✳
                  </span>

                  <h3>
                    Curiosity
                    <br />
                    meets
                    <br />
                    creation.
                  </h3>

                  <span className="inside-cover-number">
                    04
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Book information */}
          <div className="book-caption">
            <span>AN INTERACTIVE SKILL ARCHIVE</span>

            <span>
              {data[activeIndex].number} / 04
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
