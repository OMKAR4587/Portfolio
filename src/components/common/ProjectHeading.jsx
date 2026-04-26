import React, { useEffect, useLayoutEffect, useRef } from "react";
import "../../stylesheets/Project.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import titleImg from "../../assets/images/title-decoration.png";

const ProjectHeading = ({boxRef}) => {
  // 🔥 Mouse animation
  useEffect(() => {
    const letters = gsap.utils.toArray(".timeline span");

    const handleMouseMove = (e) => {
      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const center = rect.left + rect.width / 2;

        const distance = Math.abs(e.clientX - center);
        const scale = gsap.utils.clamp(1, 1.6, 1.6 - distance / 500);

        gsap.to(letter, {
          scaleY: scale,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);





  return (
      <div className="project-heading-wraper" ref={boxRef}>
        <img className="uppertext-project-heading" src={titleImg} alt="" />
        
        <h1 className="timeline">
          {"TIMELINE".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </h1>

        <div className="line-box"></div>
      </div>
  );
};

export default ProjectHeading;