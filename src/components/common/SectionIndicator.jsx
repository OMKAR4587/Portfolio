import { useEffect, useRef, useState } from "react";
import "../../stylesheets/Indicator.css";
import gsap from "gsap";

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

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;

      let current = sections[0];

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= viewportCenter) {
          current = section;
        }
      });

      setActive((previous) =>
        previous.id === current.id ? previous : current,
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

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!numberRef.current || !nameRef.current) return;
    if (previousRef.current === active.number) return;

    const direction =
      Number(active.number) > Number(previousRef.current) ? 1 : -1;

    gsap.killTweensOf([numberRef.current, nameRef.current]);

    gsap.fromTo(
      [numberRef.current, nameRef.current],
      {
        y: direction * 25,
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.65,
        stagger: 0.08,
        ease: "power4.out",
      },
    );

    previousRef.current = active.number;
  }, [active]);

  return (
    <aside className="section-indicator" aria-label="Current section">
      <div className="indicator-content" aria-live="polite">
        <span ref={numberRef} className="indicator-number">
          {active.number}
        </span>

        <span className="indicator-divider" />

        <span ref={nameRef} className="indicator-name">
          {active.name}
        </span>
      </div>

      <span className="indicator-line" />
    </aside>
  );
}
