import React from 'react'
import { useEffect } from 'react';
import img from '../assets/images/boy.avif'
import '../stylesheets/About.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

 

const About = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

 gsap.fromTo(".About-Img",
  { x: -100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".about-container",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  }
);
  gsap.fromTo(".about-text-container", 
    {
      x:100,
      opacity:0
    },
    {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".about-container",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
  })
  }, [])
  
  return (
    <div className="about-container">
      <div className="about-text-container">
        <h1>Designer. Builder. <br />
          <span>Lifelong learner.</span></h1>
        <p>Hey! I'm Omkar Yevale, a passionate frontend developer focused on building clean and responsive web experiences. My journey started with an interest in visual design, which eventually led me to explore how things work behind the scenes through code.
          <br />
          <br />

          As a fresher, I’m constantly learning and improving my skills by developing responsive websites to creating interactive user interfaces using modern technologies. I enjoy turning ideas into functional products and am excited to grow as a developer while building meaningful digital experiences.</p>
        <button className='resume-btn'>View Resume</button>
      </div>
      <div className="profile-image-container">
        <img className='About-Img' src={img} alt="" />
      </div>
    </div>
  )
}

export default About