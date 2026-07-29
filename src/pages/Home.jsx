import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Profile from '../assets/images/My-Profile.jpeg'
import ProjectImg from "../assets/images/Project-Thumbnail.jpg"
import "../stylesheets/Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);


  useEffect(() => {
    gsap.fromTo(".quick-link", {
      width: "0px",
      duration: 1,
      ease: "power4.out"
    },
      {
        delay: 1,
        width: "85px",
        duration: 1.5,
        ease: "power4.out"
      })
    gsap.to(".circles", {
      // gap: 20,
      rotation: 1080,
      scrollTrigger: {
        trigger: ".home-container",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        // markers:true
      },
    });
    gsap.fromTo(
      ".mid-content",
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: -20,
        scrollTrigger: {
          trigger: ".home-container",
          start: "top top",
          end: "8% 0%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".blob",
      {
        filter: "blur(100px)"
      },
      {
        filter: "blur(3px)",
        scrollTrigger: {
          trigger: ".hero-bg",
          start: "top bottom",
          end: "80% 80%",
          scrub: true
        }
      }
    );
    let spinTween;

    ScrollTrigger.create({
      trigger: ".home-container",
      start: "65% center",
      end: "+=300",
      onEnter: () => {
        spinTween = gsap.to(".circles", {
          rotation: "+=360",
          marker: true,
          duration: 30,
          ease: "none",
          repeat: -1,
          onUpdate: function () {
            // 1. Get the exact live rotation value of the parent container (.circles)
            const parentRotation = gsap.getProperty(".circles", "rotation");

            // 2. Force the text elements to rotate in the exact opposite direction.
            // If the parent is at 45deg, the text shifts to -45deg. 
            // This keeps the text completely upright relative to the screen.
            gsap.set(".inside-buble-text", {
              rotation: -parentRotation
            });
          }
        });
      },
      onLeaveBack: () => {
        if (spinTween) {
          spinTween.kill();
          // Reset text rotation back to normal when the animation clears
          gsap.set(".inside-buble-text", { rotation: 0 });
        }
      }
    });
    gsap.to(".middle-name", {
      opacity: 1,
      color: "#3e3d3d",
      scrollTrigger: {
        trigger: ".home-container",
        start: "85% 85%",
        end: "bottom bottom",
        scrub: true,

      },
    });
    gsap.to(".inside-buble-text", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".home-container",
        start: "90% 90%",
        end: "bottom bottom",
        scrub: true,
        // markers:true
      },
    });
    gsap.to(".circles", {
      borderWidth: "2px",
      borderColor: "#ccc",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".home-container",
        start: "80% 70%",
        end: "bottom bottom",
        scrub: true,
        // markers:true
      },
    });
    gsap.fromTo(
      ".hero-bg",
      {
        scale: 10,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: ".home-container",
          start: "top bottom",
          end: "80% 80%",
          scrub: true,
        },
      }
    );
    gsap.to(".circles", {
      borderWidth: "2px",
      borderColor: "#ccc",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".home-container",
        start: "90% 90%",
        end: "bottom bottom",
        scrub: true,
        // markers:true
      },
    });
    gsap.to(".hero-bg", {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".home-container",
        start: "bottom bottom",
        end: "+=300",
        scrub: true,
      }
    });

  }, []);
  const sectionRef = useRef(null);

  return (

    <div ref={heroRef}>
      {/* Background */}
      <div className="home-container">
        <div className="top-bar">
          <span>Digital Developer</span>
          <span>Based in Mumbai, Maharashtra</span>
        </div>

        <div className="mid-content">
          <p className="dev-tag">Welcome — I'm Omkar Yevale.</p>

          <h1 className="hero-heading">
            <span className="line">
              I <Link to="/Portfolio/about" className="quick-link quick-link-1"> <img className="about-profile-img" src={Profile} alt="profile-img" /> </Link> create thoughtful web experiences 
            </span>

            <span className="line">
              for people <a href="#projects" className="quick-link quick-link-2"><img className="about-profile-img" src={ProjectImg} alt="work-image" /></a> who value impact,
            </span>

            <span className="line">
             not just appearance.
            </span>
          </h1>
        </div>
      </div>

      <div className="section-wrapper" ref={sectionRef}>
        <div className="hero-bg">
          <h3 className="middle-name">My craft</h3>
          <div className="circles">

            <div className="blob blob1"></div>
            <div className="blob blob2"></div>
            <div className="blob blob3"></div>
            <p className="inside-buble-text-1 inside-buble-text">Frontend</p>
            <p className="inside-buble-text-2 inside-buble-text">Backend</p>
            <p className="inside-buble-text-3 inside-buble-text">Cloud</p>
          </div>

        </div>


      </div>

    </div>
  );
}

export default Home;