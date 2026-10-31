import React, { useEffect, useRef } from "react";
import Profile from "../assets/images/My-Profile.jpeg";
import ProjectImg from "../assets/images/Project-Thumbnail.jpg";
import "../stylesheets/Home.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quick image links
      gsap.fromTo(
        ".quick-link",
        { width: "0px" },
        {
          width: "85px",
          delay: 1,
          duration: 1.5,
          ease: "power4.out",
        },
      );

      // Circle rotation on scroll
      gsap.to(".circles", {
        rotation: 1080,
        scrollTrigger: {
          trigger: ".wrapper-hero",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Hero content fade-out
      gsap.to([".mid-content", ".bottom-tag"], {
        opacity: 0,
        y: -20,
        scrollTrigger: {
          trigger: ".wrapper-hero",
          start: "top top",
          end: "8% 0%",
          scrub: true,
        },
      });

      // Blob blur animation
      gsap.fromTo(
        ".blob",
        { filter: "blur(30px)" },
        {
          filter: "blur(1px)",
          scrollTrigger: {
            trigger: ".hero-bg",
            start: "30% bottom", // Start later
            end: "90% 80%", // Finish later
            scrub: true,
          },
        },
      );

      // Continuous circle rotation
      let spinTween;

      ScrollTrigger.create({
        trigger: ".wrapper-hero",
        start: "65% center",
        end: "+=300",

        onEnter: () => {
          spinTween?.kill();

          spinTween = gsap.to(".circles", {
            rotation: "+=360",
            duration: 30,
            ease: "none",
            repeat: -1,

            onUpdate: () => {
              const rotation = gsap.getProperty(".circles", "rotation");

              gsap.set(".inside-buble-text", {
                rotation: -rotation,
              });
            },
          });
        },

        onLeaveBack: () => {
          spinTween?.kill();
          spinTween = null;

          gsap.set(".inside-buble-text", {
            rotation: 0,
          });
        },
      });

      // Middle heading
      gsap.to(".middle-name", {
        opacity: 1,
        color: "#3e3d3d",
        scrollTrigger: {
          trigger: ".wrapper-hero",
          start: "85% 85%",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Inner circle labels
      gsap.to(".inside-buble-text", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".wrapper-hero",
          start: "90% 90%",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Circle border
      gsap.to(".circles", {
        borderWidth: "2px",
        borderColor: "#ccc",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".wrapper-hero",
          start: "80% 70%",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Background scale
      gsap.fromTo(
        ".hero-bg",
        { scale: 10 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: ".wrapper-hero",
            start: "top bottom",
            end: "80% 80%",
            scrub: true,
          },
        },
      );

      // Background fade-out
      gsap.to(".hero-bg", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".wrapper-hero",
          start: "bottom+=300 bottom", // Delay disappearance
          end: "bottom+=700 bottom", // Fade out more gradually
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={heroRef} className="portfolio-home">
      <section className="wrapper-hero" id="home" aria-label="Introduction">
        <div className="home-container">
          <header className="top-bar">
            <span>Digital Developer</span>
            <p>Based in Mumbai, Maharashtra</p>
          </header>

          <div className="mid-content">
            <p className="dev-tag">
              <span className="status-dot" aria-hidden="true" />
              Welcome — I'm Omkar Yevale.
            </p>

            <p className="hero-heading">
              <span className="line">
                I{" "}
                <a
                  href="/Portfolio/about"
                  className="quick-link quick-link-1"
                  aria-label="Learn more about Omkar"
                >
                  <img
                    className="about-profile-img"
                    src={Profile}
                    alt="Portrait of Omkar Yevale"
                  />
                </a>{" "}
                create thoughtful web experiences
              </span>

              <span className="line">
                for people{" "}
                <a
                  href="#projects"
                  className="quick-link quick-link-2"
                  aria-label="Explore selected projects"
                >
                  <img
                    className="about-profile-img"
                    src={ProjectImg}
                    alt="Preview of a selected web project"
                  />
                </a>{" "}
                who value impact,
              </span>

              <span className="line">not just appearance.</span>
            </p>
          </div>

          <div className="bottom-tag">
            <div className="bottom-specialty">
              <span className="bottom-label">WHAT I DO</span>
              <p>
                WEB <i>✳</i> DESIGN <i>✳</i> MOTION
              </p>
            </div>

            <a href="#craft" className="mouse-scroll" aria-label="Scroll down">
              <span className="mouse-icon">
                <span className="mouse-wheel" />
              </span>
              <span>SCROLL</span>
              <span>↓</span>
            </a>

            <div className="bottom-message">
              <span className="bottom-label">LET'S CREATE</span>
              <p         id="craft">
                Something <em>meaningful.</em> ↗
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-wrapper"
        ref={sectionRef}
        aria-label="My skills and craft"
      >
        <div className="hero-bg">
          <h2 className="middle-name">My craft</h2>

          <figure className="circles" aria-label="My development skills">
            <div className="blob blob1" aria-hidden="true" />
            <div className="blob blob2" aria-hidden="true" />
            <div className="blob blob3" aria-hidden="true" />

            <figcaption className="inside-buble-text-1 inside-buble-text">
              <div>Frontend</div>
            </figcaption>

            <figcaption className="inside-buble-text-2 inside-buble-text">
              <div>Backend</div>
            </figcaption>

            <figcaption className="inside-buble-text-3 inside-buble-text">
              <div>Cloud</div>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

export default Home;
