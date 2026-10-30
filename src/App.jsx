
"use client";

import React, { useEffect, useRef } from "react";
import "./stylesheets/App.css";

import { Toaster } from "react-hot-toast";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";

import Hero from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";
import SectionIndicator from "./components/common/SectionIndicator";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const parentRef = useRef(null);
  const boxRef = useRef(null);
  const lenis = useLenis();

  // GSAP scroll animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { scale: 0.1 },
        {
          scale: 1,
          ease: "none",
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

    return () => ctx.revert();
  }, []);

  // Handle navigation to hash links with Lenis
  useEffect(() => {
    if (!lenis) return;

    const hash = window.location.hash;
    if (!hash) return;

    const element = document.querySelector(hash);
    if (!element) return;

    const timeout = setTimeout(() => {
      lenis.scrollTo(element, {
        duration: 1.2,
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [lenis]);

  return (
    <>
      <ReactLenis root />

      <SectionIndicator />

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

      <div className="marimba-grid-bg" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="grid-line" key={index} />
        ))}
      </div>

      <main ref={parentRef}>
        <Menu />

        <section className="one">
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
