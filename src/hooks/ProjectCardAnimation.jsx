import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCardAnimation = (sectionRef, projectRef) => {
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // TEXT ANIMATION
    const animatePanelText = (tl, panelNumber) => {
      const panel = `.project-detail-container-${panelNumber}`;

      tl.fromTo(
        `${panel} .project-count,
         ${panel} .project-title,
         ${panel} .case-study-btn,
         ${panel} .project-description`,
        {
          y: 25,
          autoAlpha: 0,
          filter: "blur(6px)",
        },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "filter",
          immediateRender: false,
        },
        "<"
      );
    };

    // DESKTOP
    mm.add("(min-width:1025px)", () => {
      console.log("Desktop");

      gsap.set(projectRef.current, {
        position: "absolute",
        top: "4.5%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "center center",
      });

      gsap.set(
        [
          ".project-detail-container-1",
          ".project-detail-container-2",
          ".project-detail-container-3",
        ],
        {
          autoAlpha: 0,
          display: "none",
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Project-section",
          start: "14% bottom",
          end: "bottom bottom",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      tl.to(".Project-container", {
        y: -40,
        duration: 1,
      })

        .to(".project-container-overlay", {
          clipPath: "inset(0% 0% round 30px)",
          duration: 2,
          ease: "none",
        })

        .to(".Project-container", {
          xPercent: -80,
          duration: 2,
          ease: "none",
        })

        // PANEL 1 SHOW
        .set(".project-detail-container-1", {
          display: "flex",
        })
        .to(".project-detail-container-1", {
          autoAlpha: 1,
          duration: 0.5,
        });

      animatePanelText(tl, 1);

      tl.to({}, { duration: 2 })
        .to({}, { duration: 1 })

        .to(
          ".project-container-overlay",
          {
            scale: 1.1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        .to(
          ".my-project-2",
          {
            y: 0,
            height: "100%",
            duration: 1.5,
          },
          "<"
        )

        .to(
          ".project-holder-2",
          {
            scale: 1.1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        .to(
          ".project-holder-2",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "none",
          },
          "<"
        )

        // PANEL 1 HIDE, PANEL 2 SHOW
        .to(
          ".project-detail-container-1",
          {
            autoAlpha: 0,
            duration: 0.5,
          },
          "<"
        )
        .set(".project-detail-container-2", {
          display: "flex",
        })
        .to(".project-detail-container-2", {
          autoAlpha: 1,
          duration: 0.5,
        });

      animatePanelText(tl, 2);

      tl.to({}, { duration: 2 })
        .to({}, { duration: 1 })

        .to(
          ".project-holder-2",
          {
            scale: 1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        .to(
          ".project-holder-3",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "none",
          },
          "<"
        )

        .fromTo(
          ".project-holder-3",
          { scale: 1.1 },
          {
            scale: 1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        // PANEL 2 HIDE, PANEL 3 SHOW
        .to(
          ".project-detail-container-2",
          {
            autoAlpha: 0,
            duration: 0.5,
          },
          "<"
        )
        .set(".project-detail-container-3", {
          display: "flex",
        })
        .to(".project-detail-container-3", {
          autoAlpha: 1,
          duration: 0.5,
        });

      animatePanelText(tl, 3);

      tl.to({}, { duration: 2 })
        .to({}, { duration: 1 })

        .to(
          ".project-detail-container-3",
          {
            autoAlpha: 0,
            duration: 2,
          },
          "<"
        )

        .to(
          ".Project-container",
          {
            opacity: 0,
            display: "none",
            duration: 2,
            ease: "none",
          },
          "<"
        )

        .to(".projects-detail-section", {
          display: "none",
        });
    });

    // TABLET
    mm.add("(min-width:769px) and (max-width:1024px)", () => {
      console.log("Tablet");

      gsap.set(projectRef.current, {
        position: "absolute",
        top: "4.5%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "center center",
      });

      gsap.set(
        [
          ".project-detail-container-1",
          ".project-detail-container-2",
          ".project-detail-container-3",
        ],
        {
          autoAlpha: 0,
          display: "none",
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Project-section",
          start: "14% bottom",
          end: "bottom bottom",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      tl.to(".Project-container", {
        y: -20,
        duration: 1,
      })

        .to(".project-container-overlay", {
          clipPath: "inset(0% 0% round 30px)",
          duration: 2,
          ease: "none",
        })

        .to(".Project-container", {
          x: -150,
          duration: 2,
          ease: "none",
        })

        // PANEL 1 SHOW
        .set(".project-detail-container-1", {
          display: "flex",
        })
        .to(".project-detail-container-1", {
          autoAlpha: 1,
          duration: 0.5,
        });

      animatePanelText(tl, 1);

      tl.to({}, { duration: 2 })
        .to({}, { duration: 2 })
        .to({}, { duration: 2 })
        .to({}, { duration: 2 })

        .to(
          ".project-container-overlay",
          {
            scale: 1.1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        .to(
          ".my-project-2",
          {
            y: 0,
            height: "100%",
            duration: 1.5,
          },
          "<"
        )

        .to(
          ".project-holder-2",
          {
            scale: 1.1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        .to(
          ".project-holder-2",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "none",
          },
          "<"
        )

        // PANEL 1 HIDE, PANEL 2 SHOW
        .to(
          ".project-detail-container-1",
          {
            autoAlpha: 0,
            duration: 0.5,
          },
          "<"
        )
        .set(".project-detail-container-2", {
          display: "flex",
        })
        .to(".project-detail-container-2", {
          autoAlpha: 1,
          duration: 0.5,
        });

      animatePanelText(tl, 2);

      tl.to({}, { duration: 2 })
        .to({}, { duration: 2 })
        .to({}, { duration: 2 })

        .to(
          ".project-holder-2",
          {
            scale: 1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        .to(
          ".project-holder-3",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "none",
          },
          "<"
        )

        .fromTo(
          ".project-holder-3",
          { scale: 1.1 },
          {
            scale: 1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        // PANEL 2 HIDE, PANEL 3 SHOW
        .to(
          ".project-detail-container-2",
          {
            autoAlpha: 0,
            duration: 0.5,
          },
          "<"
        )
        .set(".project-detail-container-3", {
          display: "flex",
        })
        .to(".project-detail-container-3", {
          autoAlpha: 1,
          duration: 0.5,
        });

      animatePanelText(tl, 3);

      tl.to({}, { duration: 2 })
        .to({}, { duration: 2 })

        .to(
          ".project-detail-container-3",
          {
            autoAlpha: 0,
            duration: 2,
          },
          "<"
        )

        .to(
          ".Project-container",
          {
            opacity: 0,
            duration: 2,
            ease: "none",
          },
          "<"
        );
    });

    // MOBILE
    mm.add("(max-width:768px)", () => {
      gsap.set(projectRef.current, {
        position: "absolute",
        top: "4.5%",
        left: "50%",
        xPercent: -50,
        yPercent: -60,
        transformOrigin: "center center",
      });

      gsap.set(
        [
          ".project-detail-container-1",
          ".project-detail-container-2",
          ".project-detail-container-3",
        ],
        {
          autoAlpha: 0,
          display: "none",
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Project-section",
          start: "14% bottom",
          end: "bottom bottom",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      tl.to(".Project-container", {
        y: -60,
        duration: 1,
      })

        .to(".project-container-overlay", {
          clipPath: "inset(0% 0% round 30px)",
          duration: 2,
          ease: "none",
        })

        .to(".Project-container", {
          y: -220,
          duration: 2,
          ease: "none",
        })

        // PANEL 1 SHOW
        .set(".project-detail-container-1", {
          display: "flex",
        })
        .to(".project-detail-container-1", {
          autoAlpha: 1,
          duration: 0.5,
        });

      animatePanelText(tl, 1);

      tl.to({}, { duration: 2 })
        .to({}, { duration: 2 })
        .to({}, { duration: 2 })
        .to({}, { duration: 2 })

        .to(
          ".project-container-overlay",
          {
            scale: 1.1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        .to(
          ".my-project-2",
          {
            y: 0,
            height: "100%",
            duration: 1.5,
          },
          "<"
        )

        .to(
          ".project-holder-2",
          {
            scale: 1.1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        .to(
          ".project-holder-2",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "none",
          },
          "<"
        )

        // PANEL 1 HIDE, PANEL 2 SHOW
        .to(
          ".project-detail-container-1",
          {
            autoAlpha: 0,
            duration: 0.5,
          },
          "<"
        )
        .set(".project-detail-container-2", {
          display: "flex",
        })
        .to(".project-detail-container-2", {
          autoAlpha: 1,
          duration: 0.5,
        });

      animatePanelText(tl, 2);

      tl.to({}, { duration: 2 })
        .to({}, { duration: 2 })
        .to({}, { duration: 2 })

        .to(
          ".project-holder-2",
          {
            scale: 1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        .to(
          ".project-holder-3",
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "none",
          },
          "<"
        )

        .fromTo(
          ".project-holder-3",
          { scale: 1.1 },
          {
            scale: 1,
            duration: 2,
            ease: "none",
          },
          "<"
        )

        // PANEL 2 HIDE, PANEL 3 SHOW
        .to(
          ".project-detail-container-2",
          {
            autoAlpha: 0,
            duration: 0.5,
          },
          "<"
        )
        .set(".project-detail-container-3", {
          display: "flex",
        })
        .to(".project-detail-container-3", {
          autoAlpha: 1,
          duration: 0.5,
        });

      animatePanelText(tl, 3);

      tl.to({}, { duration: 2 })
        .to({}, { duration: 2 })

        .to(
          ".project-detail-container-3",
          {
            autoAlpha: 0,
            duration: 2,
          },
          "<"
        )

        .to(
          ".Project-container",
          {
            opacity: 0,
            display: "none",
            duration: 2,
            ease: "none",
          },
          "<"
        );
    });
  }, sectionRef);

  return () => ctx.revert();
};

export default ProjectCardAnimation;