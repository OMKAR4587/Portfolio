import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ProjectCardAnimation = (sectionRef, projectRef) => {
    const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

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

            gsap.set([
                ".project-detail-container-1",
                ".project-detail-container-2",
                ".project-detail-container-3",
            ], {
                opacity: 0,
            });

            // ---------------- MASTER TIMELINE ----------------

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".Project-section",
                    start: "14% bottom",
                    end: "bottom bottom",
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true,
                    // markers:true
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

                .to(
                    ".project-detail-container-1",
                    {
                        opacity: 1,
                        duration: 0.2,
                    },
                )

                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to(
                    ".project-container-overlay",
                    {
                        scale: 1.1,
                        duration: 2,
                        ease: "none",
                    },
                    "<"

                )
            tl.to(".my-project-2", {
                y: 0,
                height: "100%",
                duration: 1.5,
            }, "<")

                .to(".project-holder-2", {
                    scale: 1.1,
                    duration: 2,
                    ease: "none",
                }, "<")

                .to(
                    ".project-holder-2",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.5,
                        ease: "none",
                    },
                    "<"
                )
                .to(
                    ".project-detail-container-1",
                    {
                        opacity: 0,
                        duration: 0.5,
                    },
                    "<"
                )

                .to(
                    ".project-detail-container-2",
                    {
                        opacity: 1,
                        duration: 0.5,
                    },
                    "<"
                )
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to(".project-holder-2", {
                    scale: 1,
                    duration: 2,
                    ease: "none",
                }, "<")

                .to(
                    ".project-holder-3",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.5,
                        ease: "none",
                    },
                    "<"
                );

            tl.fromTo(".project-holder-3", { scale: 1.1 }, {
                scale: 1,
                duration: 2,
                ease: "none",
            }, "<")
            tl.to(
                ".project-detail-container-2",
                {
                    opacity: 0,
                    duration: 0.5,
                },
                "<"
            )

                .to(
                    ".project-detail-container-3",
                    {
                        opacity: 1,
                        duration: 0.5,
                    },
                    "<"
                )
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to(
                    ".project-detail-container-3",
                    {
                        opacity: 0,
                        duration: 2
                    },
                    "<"
                )
                .to(".Project-container", {
                    opacity: 0,
                    duration: 2,
                    ease: "none",
                }, "<")
                  .to(".projects-detail-section", {
                    display:"none",
                },)


        });

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

            gsap.set([
                ".project-detail-container-1",
                ".project-detail-container-2",
                ".project-detail-container-3",
            ], {
                opacity: 0,
            });

            // ---------------- MASTER TIMELINE ----------------

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".Project-section",
                    start: "14% bottom",
                    end: "bottom bottom",
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true,
                    // markers:true
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

                .to(
                    ".project-detail-container-1",
                    {
                        opacity: 1,
                        duration: 0.2,
                    },
                )

                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to(
                    ".project-container-overlay",
                    {
                        scale: 1.1,
                        duration: 2,
                        ease: "none",
                    },
                    "<"

                )
            tl.to(".my-project-2", {
                y: 0,
                height: "100%",
                duration: 1.5,
            }, "<")

                .to(".project-holder-2", {
                    scale: 1.1,
                    duration: 2,
                    ease: "none",
                }, "<")

                .to(
                    ".project-holder-2",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.5,
                        ease: "none",
                    },
                    "<"
                )
                .to(
                    ".project-detail-container-1",
                    {
                        opacity: 0,
                        duration: 0.5,
                    },
                    "<"
                )

                .to(
                    ".project-detail-container-2",
                    {
                        opacity: 1,
                        duration: 0.5,
                    },
                    "<"
                )
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to(".project-holder-2", {
                    scale: 1,
                    duration: 2,
                    ease: "none",
                }, "<")

                .to(
                    ".project-holder-3",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.5,
                        ease: "none",
                    },
                    "<"
                );

            tl.fromTo(".project-holder-3", { scale: 1.1 }, {
                scale: 1,
                duration: 2,
                ease: "none",
            }, "<")
            tl.to(
                ".project-detail-container-2",
                {
                    opacity: 0,
                    duration: 0.5,
                },
                "<"
            )

                .to(
                    ".project-detail-container-3",
                    {
                        opacity: 1,
                        duration: 0.5,
                    },
                    "<"
                )
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to(
                    ".project-detail-container-3",
                    {
                        opacity: 0,
                        duration: 2
                    },
                    "<"
                )
                .to(".Project-container", {
                    opacity: 0,
                    duration: 2,
                    ease: "none",
                }, "<")


        });

        mm.add("(max-width:768px)", () => {

             gsap.set(projectRef.current, {
                position: "absolute",
                top: "4.5%",
                left: "50%",
                xPercent: -50,
                yPercent: -50,
                transformOrigin: "center center",
            });

            gsap.set([
                ".project-detail-container-1",
                ".project-detail-container-2",
                ".project-detail-container-3",
            ], {
                opacity: 0,
            });

            // ---------------- MASTER TIMELINE ----------------

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".Project-section",
                    start: "14% bottom",
                    end: "bottom bottom",
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true,
                    // markers:true
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
                    y: -240,
                    duration: 2,
                    ease: "none",
                })

                .to(
                    ".project-detail-container-1",
                    {
                        opacity: 1,
                        duration: 0.2,
                    },
                )

                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to(
                    ".project-container-overlay",
                    {
                        scale: 1.1,
                        duration: 2,
                        ease: "none",
                    },
                    "<"

                )
            tl.to(".my-project-2", {
                y: 0,
                height: "100%",
                duration: 1.5,
            }, "<")

                .to(".project-holder-2", {
                    scale: 1.1,
                    duration: 2,
                    ease: "none",
                }, "<")

                .to(
                    ".project-holder-2",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.5,
                        ease: "none",
                    },
                    "<"
                )
                .to(
                    ".project-detail-container-1",
                    {
                        opacity: 0,
                        duration: 0.5,
                    },
                    "<"
                )

                .to(
                    ".project-detail-container-2",
                    {
                        opacity: 1,
                        duration: 0.5,
                    },
                    "<"
                )
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to(".project-holder-2", {
                    scale: 1,
                    duration: 2,
                    ease: "none",
                }, "<")

                .to(
                    ".project-holder-3",
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 1.5,
                        ease: "none",
                    },
                    "<"
                );

            tl.fromTo(".project-holder-3", { scale: 1.1 }, {
                scale: 1,
                duration: 2,
                ease: "none",
            }, "<")
            tl.to(
                ".project-detail-container-2",
                {
                    opacity: 0,
                    duration: 0.5,
                },
                "<"
            )

                .to(
                    ".project-detail-container-3",
                    {
                        opacity: 1,
                        duration: 0.5,
                    },
                    "<"
                )
                .to({}, {
                    duration: 2
                })
                .to({}, {
                    duration: 2
                })
                .to(
                    ".project-detail-container-3",
                    {
                        opacity: 0,
                        duration: 2
                    },
                    "<"
                )
                .to(".Project-container", {
                    opacity: 0,
                    duration: 2,
                    ease: "none",
                }, "<")

        });

        // ---------------- INITIAL STATE ----------------


    }, sectionRef);
    return () => ctx.revert();
}

export default ProjectCardAnimation