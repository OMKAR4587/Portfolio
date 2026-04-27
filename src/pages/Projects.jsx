import React, { useRef,useEffect } from "react";
import "../stylesheets/Project.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const imageRef=useRef([])
  const projectData =[
  {
    "id": 1,
    "title": "CareLink",
    "description": "Unified Healthcare Platform",
    "image": "https://images.unsplash.com/photo-1774575285735-f58aacba9a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    "link": "https://github.com/OMKAR4587/CareLink"
  },
  {
    "id": 2,
    "title": "EduTrack",
    "description": "Student Performance Dashboard",
    "image": "https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDZ8fHxlbnwwfHx8fHw%3D",
    "link": "https://github.com/OMKAR4587/EduTrack"
  },
  {
    "id": 3,
    "title": "ShopEase",
    "description": "E-commerce Analytics System",
    "image": "https://images.unsplash.com/photo-1773332585749-5146862ba746?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTN8fHxlbnwwfHx8fHw%3D",
    "link": "https://github.com/OMKAR4587/ShopEase"
  },
  {
    "id": 4,
    "title": "WorkForce",
    "description": "Employee Management System",
    "image": "https://images.unsplash.com/photo-1761850648640-2ee5870ee883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D",
    "link": "https://github.com/OMKAR4587/WorkForce"
  }
]

useEffect(() => {
  const cntx = gsap.context(() => {
    const images = imageRef.current;

    if (!images || images.length < 4) return;

    gsap.fromTo(
      [images[0], images[1]],
      { scale: 1.3 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: images[0].closest(".project-card"),
          start: "top 60%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      [images[2], images[3]],
      { scale: 1.3 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: images[2].closest(".project-card"),
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });

  return () => cntx.revert(); // 🔥 cleanup
}, []);


  return (
    <div className="projects">
      <div className="section-title">
        Projects
      </div>
      {projectData.map((data,index)=>(
        <div key={data.id} className="project-card">
        <div className="overlay">
        </div>
        <div className="img-container">
          <img src={data.image}
          ref={(el)=>imageRef.current[index]=el}
           alt="CareLink" />
           <a href={data.link} className="view">View Project</a>
        </div>
 
          
        <div className="info">
          <h2 className="title yellow">{data.title}</h2>
          <p className="desc">{data.description}</p>
         
        </div>
      </div>
      ))}
    </div>
  );
}