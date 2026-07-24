import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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

const data = [
  {
    title: "Frontend",
    skills: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <SiRedux />, name: "Redux Toolkit" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: <SiGit />, name: "Git" },
      { icon: <SiGithub />, name: "GitHub" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <SiGreensock />, name: "GSAP" },
      { icon: <SiFramer />, name: "Framer Motion" },
    ],
  },
];

export default function Skills() {

  const skillCardRef = useRef([])

  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 40%",
        end: "bottom bottom",
        scrub: true,
      }
    });
    t1.fromTo(".skills-header", { opacity: 0, }, {
      opacity: 1,
      duration: 2
    }, "<")

    t1.fromTo(skillCardRef.current.slice(0,2),{opacity:0,y:30},{
      opacity: 1,
      y: 0,
      duration: 2,
      stagger:0.2
    },"<");

    t1.to(".skills-header", {
      opacity: 0,
      duration: 0.3
    })
     t1.fromTo(skillCardRef.current.slice(2,4),{opacity:0,y:30},{
      opacity: 1,
      y: 0,
      duration: 2,
      stagger:0.2
    },);

    // return () => ctx.revert();

    console.log(skillCardRef)

  }, []);

  return (
    <section className="skills-section">

      <div className="skills-header">

        <p className="eyebrow">TECH STACK</p>

        <h2>Technologies I Work With</h2>

        <p className="subtitle">
          Modern technologies for creating fast, scalable and
          delightful digital experiences.
        </p>

      </div>

      <div className="skills-grid">

        {data.map((group,index) => (
          <div ref={(el)=>(skillCardRef.current[index]=el)} className="skill-box" key={group.title}>

            <h3>{group.title}</h3>

            <div className="skill-list">

              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}