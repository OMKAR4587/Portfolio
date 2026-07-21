import React, { useRef,useEffect } from "react";
import "../stylesheets/Project.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import overlayImg from '../assets/images/project-one-bg.png'

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectRef = useRef();
  useEffect(() => {
    gsap.set(projectRef.current, {
      position: "absolute",
      top: "4%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "center center"
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Project-section",
        start: "14% bottom",
        end: "50% 80%",
        pin: true,
        scrub: true,
        // markers: true,
      },
    });

    // 1. Move to center
    tl.to(".Project-container", {
      y: -40,
      duration: 1,
    })


      // 2. Scale while staying in place
      .to(".project-container-overlay", {
        clipPath: "inset(0% 0% round 30px)",
        duration: 13,
        ease: "none",
      })

      // 3. Move left
      .to(".Project-container", {
        x: -265,
        ease: "none",
        duration: 3,
      });

  }, []);

  useEffect(() => {

    gsap.to(".project-container-overlay", {
      scale: 1.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".Project-section",
        start: "34% bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".Project-section",
        start: "34% bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    timeline.to(".project-holder-2", {
      scale: 1.2,
      ease: "none",
    })
      .to(".project-holder-2", {
        scale: 1,
        ease: "none",
      })
      .fromTo(
        ".project-holder-3",
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
        },
        "<"
      );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Project-section",
        start: "14.2% bottom",
        end: "bottom bottom",
        pin: true,
        scrub: true,
        // markers: true,
      },
    });
    tl.to(".my-project-2", {
      height: "100%",
      y: 0,
      duration: 1,
    })

    tl.to(".project-holder-2", {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "none",
      duration: 1,
    })

      .to(".my-project-3", {
        y: 0,
        height: "100%",
        duration: 1,
      })

    tl.to(".project-holder-3", {
      clipPath: "inset(0% 0 0 0)",
      ease: "none",
      duration: 1
    })
  }, []);

  useEffect(() => {
    gsap.set(".project-detail-container-1",{
      top:"22.5%",
      opacity:0
    }),
     gsap.set(".project-detail-container-2",{
      top:"41.1%",
      opacity:0
    })
     gsap.set(".project-detail-container-3",{
      top:"70.5%",
      opacity:0
    })
    
    // project-1
     gsap.to(".project-detail-container-1", {
      // y:0,
      opacity:1,
      duration:0.5,
      scrollTrigger: {
        trigger: ".Project-wraper",
        start: "40% top",
        end: "52% top",
        scrub: true,
        pin:".project-detail-container-1",
        // markers:true
      }
    })
     gsap.to(".project-detail-container-1", {
      opacity:0,
      duration:0.2,
      scrollTrigger: {
        trigger: ".Project-wraper",
        start: "52% top",
        end: "55% top",
        scrub: true,
        pin:".project-detail-container-1",
        // markers:true
      }
    })
    // project-2
   gsap.to(".project-detail-container-2", {
      opacity:1,
      duration:0.15,
      ease:"none",
      scrollTrigger: {
        trigger: ".Project-wraper",
        start: "54% top",
        end: "75% top",
        scrub:true,
        pin:".project-detail-container-2",
      }
    })
    gsap.to(".project-detail-container-2", {
      opacity:0,
      duration:1,
      scrollTrigger: {
        trigger: ".Project-wraper",
        start: "75% top",
        end: "76% top",
        scrub: true,
        pin:".project-detail-container-2",
      }
    })
     gsap.to(".project-detail-container-3", {
      opacity:1,
      duration:1,
      scrollTrigger: {
        trigger: ".Project-wraper",
        start: "76% top",
        end: "95.5% bottom",
        scrub: true,
        pin:".project-detail-container-3",
      }
    })
  }, [])
  
  

  return (
    <>
      <div className="project-wraper">

        <section className='project-detail-container-1'>
          <div className="project-left">
            <div className="project-count">
              <h1 className='project-count-index'>01</h1>
              <span className='total-project-count'>/ 03</span>
            </div>

            <div className="project-content">

              <h1 className="project-title">
                Mercer Mass Timber
              </h1>
              <button className="case-study-btn">
                View case study
              </button>
            </div>
            <div className="project-description">
              <p className='project-description-text'>
                A three-year collaboration evolving a
                complex, technical website into a
                scalable digital platform.
              </p>
            </div>
          </div>
        </section>
        <section className='project-detail-container-2'>
          <div className="project-left">
            <div className="project-count">
              <h1 className='project-count-index'>02</h1>
              <span className='total-project-count'>/ 03</span>
            </div>

            <div className="project-content">

              <h1 className="project-title">
                Mercer Mass Timber
              </h1>
              <button className="case-study-btn">
                View case study
              </button>
            </div>
            <div className="project-description">
              <p className='project-description-text'>
                A three-year collaboration evolving a
                complex, technical website into a
                scalable digital platform.
              </p>
            </div>
          </div>
        </section>
        <section className='project-detail-container-3'>
          <div className="project-left">
            <div className="project-count">
              <h1 className='project-count-index'>03</h1>
              <span className='total-project-count'>/ 03</span>
            </div>

            <div className="project-content">

              <h1 className="project-title">
                Mercer Mass Timber
              </h1>
              <button className="case-study-btn">
                View case study
              </button>
            </div>
            <div className="project-description">
              <p className='project-description-text'>
                A three-year collaboration evolving a
                complex, technical website into a
                scalable digital platform.
              </p>
            </div>
          </div>
        </section>

        <div className='Project-section'>
          <div className='Project-container' ref={projectRef}>
            <img className='project-container-overlay' src={overlayImg} alt="" />

            <div className='my-project-2'>
              <div className="one-color">
                <div className="project-holder-2"></div>
              </div>
            </div>

            <div className='my-project-3'>
              <div className="two-color">
                <div className="project-holder-3"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
          
    </>
  )
}