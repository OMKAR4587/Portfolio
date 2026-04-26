import React from 'react';
import '../stylesheets/Skills.css';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiPostman,
  SiMysql,
  SiFigma,
  SiGreensock,
  SiFramer
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";

const Skills = () => {

   useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".tech", 
      {
        y:80,
        opacity:0,
      },
      {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1, // 🔥 one by one animation
      scrollTrigger: {
        trigger: ".tech-stack",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

  }, []);

  const techList = [
  // Frontend
  { name: "React", icon: <SiReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Next.js", icon: <SiNextdotjs /> },

  // Backend
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },

  // Database
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },

  // Tools
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Figma", icon: <SiFigma /> },

   // Animation
  { name: "GSAP", icon: <SiGreensock /> },
  { name: "Framer Motion", icon: <SiFramer /> }
];

  return (
    <div className="stack-container">
      <h1 className="skill-heading">Skills</h1>

      <div className="tech-stack">
        {techList.map((tech) => (
          <div key={tech.name} className="tech">
            <div className="icon">{tech.icon}</div>
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;