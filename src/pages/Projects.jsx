import React, { useRef, useEffect } from "react";
import "../stylesheets/Project.css";
import ProjectCardAnimation from "../hooks/ProjectCardAnimation";
import overlayImg from '../assets/images/project-one-bg.png'

export default function Projects() {
  const sectionRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    ProjectCardAnimation(sectionRef,projectRef)
  }, []);

  // useEffect(() => {
  //   ScrollTrigger.refresh();
  // }, []);


  // useEffect(() => {

  //   const ctx = gsap.context(() => {

  //     gsap.set(".project-detail-container-1", {
  //       opacity: 0,
  //     });

  //     gsap.set(".project-detail-container-2", {
  //       opacity: 0,
  //     });

  //     gsap.set(".project-detail-container-3", {
  //       opacity: 0,
  //     });

  //   }, sectionRef);

  //   return () => ctx.revert();

  // }, []);


  return (
    <>
      <div className="project-wraper" ref={sectionRef}>

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