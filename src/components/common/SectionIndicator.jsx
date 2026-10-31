
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../../stylesheets/Indicator.css";

const sections = [
  { id: "home", number: "01", name: "Home" },
  { id: "craft", number: "02", name: "Craft" },
  { id: "projects", number: "03", name: "Projects" },
  { id: "skills", number: "04", name: "Skills" },
  { id: "contact", number: "05", name: "Contact" },
];

export default function SectionIndicator() {
  const [active, setActive] = useState(sections[0]);

  const numberRef = useRef(null);
  const nameRef = useRef(null);
  const previousRef = useRef("01");

  const activeIndex = sections.findIndex(
    (section) => section.id === active.id
  );

  const progress = ((activeIndex + 1) / sections.length) * 100;

  // Detect active section
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const center = window.innerHeight * 0.5;
      let current = sections[0];

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= center) {
          current = section;
        }
      });

      setActive((prev) =>
        prev.id === current.id ? prev : current
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Animate section changes
  useEffect(() => {
    if (!numberRef.current || !nameRef.current) return;
    if (previousRef.current === active.number) return;

    const direction =
      Number(active.number) > Number(previousRef.current) ? 1 : -1;

    const elements = [
      numberRef.current,
      nameRef.current,
    ];

    gsap.killTweensOf(elements);

    gsap.fromTo(
      elements,
      {
        y: direction * 18,
        opacity: 0,
        filter: "blur(6px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: 0.09,
        ease: "power4.out",
        clearProps: "transform",
      }
    );

    previousRef.current = active.number;

    return () => {
      gsap.killTweensOf(elements);
    };
  }, [active]);

  return (
    <aside
      className="section-indicator"
      aria-label="Current section"
    >
      <div className="indicator-card">

        <span className="indicator-eyebrow">
          INDEX
        </span>

        <div className="indicator-content">
          <span
            ref={numberRef}
            className="indicator-number"
            aria-live="polite"
          >
            {active.number}
          </span>

          <span className="indicator-divider" />

          <span
            ref={nameRef}
            className="indicator-name"
          >
            {active.name}
          </span>
        </div>

        <span className="indicator-counter">
          0{sections.length}
        </span>

      </div>

      <div className="indicator-progress">

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ height: `${progress}%` }}
          />
        </div>

        <div className="progress-dots">
          {sections.map((section, index) => (
            <span
              key={section.id}
              className={`progress-dot ${
                index <= activeIndex ? "is-active" : ""
              } ${index === activeIndex ? "is-current" : ""}`}
            />
          ))}
        </div>

      </div>
    </aside>
  );
}
