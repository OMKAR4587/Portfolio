"use client";

import React, { useRef, useEffect } from "react";
import "./stylesheets/App.css";
import { Toaster } from "react-hot-toast";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Hero from "./pages/Home";
import Menu from "./components/layout/Menu";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer"

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const parentRef = useRef()
  const containerRef = useRef();
  const boxRef = useRef();

  // 🔥 GSAP Scroll Animation

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { scale: 0.1 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: parentRef.current,
            start: "-=10 top",
            end: "bottom bottom",
            scrub: 2,
            // markers: true,
          },
        }
      );
    }, parentRef);
    return () => ctx.revert()
  }, [])


  return (
    <>
      <ReactLenis root />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#111",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
          },
        }}
      />
      <div className="marimba-grid-bg">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>
      <main ref={containerRef}>

        <Menu />

        <section id="home" className="one">
          <div className="container">
            <Hero />
          </div>
        </section>

        <section id="projects" className="two">
          <div className="container">
            <Projects />
          </div>
        </section>
        
        <section id="skills" className="five">
          <div className="container">
            <Skills />
          </div>
        </section>

        <section id="contact" className="six">
          <div className="container">
            <Contact />
          </div>
        </section>

       <Footer />
      </main>
        
    </>
  );

};

export default App;