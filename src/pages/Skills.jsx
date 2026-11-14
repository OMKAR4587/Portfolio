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
      // {
      //   icon: <SiRedux />,
      //   name: "Redux Toolkit",
      //   description: "Predictable state management",
      // },
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
      // {
      //   icon: <SiPostman />,
      //   name: "Postman",
      //   description: "API testing",
      // },
      // {
      //   icon: <SiFigma />,
      //   name: "Figma",
      //   description: "Interface design",
      // },
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
      <div className="page-topline">
        <span>CHAPTER {category.number}</span>
        <span>SKILLS / 2026</span>
      </div>

      <div className="page-heading">
        <span className="page-number">{category.number}</span>

        <h3>{category.title}</h3>

        <p>{category.subtitle}</p>
      </div>

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
  // Main pinned section
  const sectionRef = useRef(null);

  // Book references
  const bookAreaRef = useRef(null);
  const coverRef = useRef(null);

  // Turning pages
  const pageRefs = useRef([]);

  // Timeline
  const timelineRef = useRef(null);

  // Active category
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Other animated elements
  const headingRef = useRef(null);
  const sidebarRef = useRef(null);
  const captionRef = useRef(null);

  // Existing Lenis instance
  const lenis = useLenis();

  /* =========================================
     BOOK + SECTION ANIMATION
  ========================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          const { isMobile } = context.conditions;

          const book = bookAreaRef.current;
          const cover = coverRef.current;

          const pages = pageRefs.current.filter(Boolean);

          const heading = headingRef.current;
          const sidebar = sidebarRef.current;
          const caption = captionRef.current;

          if (!book || !cover || !pages.length) return;

          /* -------------------------------------
             RESPONSIVE BOOK POSITION
          ------------------------------------- */

          gsap.set(book, {
            x: 0,
            y: 0,
            scale: 1,
          });

          // const bookRect = book.getBoundingClientRect();
          // const sectionRect = section.getBoundingClientRect();

          const centerX = 500
          const initialX = isMobile ? 0 : centerX;
          const finalX = isMobile ? 0 : -50;

          const initialScale = isMobile ? 0.94 : 0.9;
          const finalScale = isMobile ? 1 : 1.04;

          /* -------------------------------------
             INITIAL BOOK STATE
          ------------------------------------- */

          gsap.set(book, {
            x: initialX,
            scale: initialScale,
            transformOrigin: "center center",
            transformPerspective: 1800,
            force3D: true,
            willChange: "transform",
          });

          /* -------------------------------------
             COVER INITIAL STATE
          ------------------------------------- */

          gsap.set(cover, {
            rotationY: 0,
            transformOrigin: "left center",
            transformPerspective: 1800,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            zIndex: 30,
            force3D: true,
          });

          /* -------------------------------------
             PAGE INITIAL STATES
          ------------------------------------- */

          pages.forEach((page, index) => {
            gsap.set(page, {
              rotationY: 0,
              transformOrigin: "left center",
              transformPerspective: 1800,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              zIndex: 20 - index,
              force3D: true,
            });
          });

          /* -------------------------------------
             CONTENT REFERENCES
          ------------------------------------- */

          const rightPageContent = book.querySelector(
            ".book-right-page .skill-page-content",
          );

          const pageContents = pages.map((page) =>
            page.querySelector(".page-leaf-front .skill-page-content"),
          );

          const chapterContents = [...pageContents, rightPageContent].filter(
            Boolean,
          );

          /* -------------------------------------
             INITIAL CONTENT VISIBILITY
          ------------------------------------- */

          gsap.set(chapterContents, {
            autoAlpha: 0,
            y: 10,
          });

          gsap.set([heading, sidebar, caption].filter(Boolean), {
            autoAlpha: 0,
            y: 18,
          });

          /* -------------------------------------
             MASTER TIMELINE
          ------------------------------------- */

          const tl = gsap.timeline({
            defaults: {
              ease: "none",
            },

            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${window.innerHeight * 4.75}`,
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,

              onUpdate: (self) => {
                const progress = self.progress * 4.75;

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

          timelineRef.current = tl;

          /* =====================================
             STAGE 1: BOOK ENTRANCE
          ===================================== */

          // Book moves from center to its layout position.
          tl.to(book, {
            x: finalX,
            scale: finalScale,
            duration: 0.75,
            ease: "power2.out",
          });

          // Heading reveals smoothly.
          if (heading) {
            tl.to(
              heading,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
                ease: "power2.out",
              },
              0.30,
            );
          }

          /* =====================================
             STAGE 2: COVER OPENING
          ===================================== */

          // Original cover animation preserved.
          tl.to(cover, {
            rotationY: -180,
            duration: 1,
            ease: "power2.inOut",
          });

          // Sidebar appears as the cover opens.
          if (sidebar) {
            tl.to(
              sidebar,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.55,
                ease: "power2.out",
              },
              1.1,
            );
          }

          // Caption appears with the sidebar.
          if (caption) {
            tl.to(
              caption,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
                ease: "power2.out",
              },
              1.2,
            );
          }

          // First chapter and right page become visible.
          const firstContents = [pageContents[0], rightPageContent].filter(
            Boolean,
          );

          if (firstContents.length) {
            tl.to(
              firstContents,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.35,
                ease: "power2.out",
                stagger: 0.08,
              },
              1.35,
            );
          }

          // Original cover stacking behavior.
          tl.set(cover, {
            zIndex: 5,
          });

          /* =====================================
             STAGE 3: PAGE TURNING
          ===================================== */

          pages.forEach((page, index) => {
            // Bring the current page to the front.
            tl.set(page, {
              zIndex: 25,
            });

            // Original page-turn animation preserved.
            tl.to(page, {
              rotationY: -180,
              duration: 1,
              ease: "power2.inOut",
            });

            // Reveal the next chapter during the turn.
            const nextContent = pageContents[index + 1];

            if (nextContent) {
              tl.to(
                nextContent,
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.35,
                  ease: "power2.out",
                },
                `-=${0.42}`,
              );
            }

            // Original page stacking behavior.
            tl.set(page, {
              zIndex: 10 + index,
            });
          });

          return () => {
            if (timelineRef.current === tl) {
              timelineRef.current = null;
            }
          };
        },
      );

      return () => mm.revert();
    }, section);

    return () => {
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
        {/* SECTION HEADING */}

        <header ref={headingRef} className="skills-main-heading">
          <p className="skills-eyebrow">A LITTLE ABOUT MY TOOLKIT</p>

          <h2 className="skills-heading">
            Skills & <span>Technologies.</span>
          </h2>

          <p className="skills-intro">
            The tools and technologies I use to turn ideas into thoughtful
            digital experiences.
          </p>
        </header>

        {/* MAIN CONTENT */}

        <div className="skills-content">
          {/* LEFT: CATEGORY NAVIGATION */}

          <aside ref={sidebarRef} className="skills-sidebar">
            <div className="skills-sidebar-heading">
              <span className="sidebar-label">EXPLORE THE ARCHIVE</span>

              <p>Select a chapter to explore my technical toolkit.</p>
            </div>

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

            <div className="skills-sidebar-footer">
              <span>04 CHAPTERS</span>
              <span>2026 EDITION</span>
            </div>
          </aside>

          {/* RIGHT: INTERACTIVE BOOK */}

          <div className="skills-book-column">
            <div className="skills-book-area" ref={bookAreaRef}>
              <div className="skills-book">
                {/* FINAL RIGHT PAGE: TOOLS */}

                <div className="book-right-page">
                  <SkillPage category={categories[3]} />
                </div>

                {/* TURNING PAGES */}

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
                    <div className="page-leaf-front">
                      <SkillPage category={category} />
                    </div>

                    <div className="page-leaf-back">
                      <PageBack number={category.number} />
                    </div>
                  </div>
                ))}

                {/* FRONT COVER */}

                <div className="book-cover" ref={coverRef}>
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

                  {/* INSIDE COVER */}

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

            {/* BOOK CAPTION */}

            {/* <div ref={captionRef} className="book-caption">
              <span>AN INTERACTIVE SKILL ARCHIVE</span>

              <span>{categories[activeIndex].number} / 04</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
