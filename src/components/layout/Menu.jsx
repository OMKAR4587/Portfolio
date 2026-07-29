import React, { useRef, useEffect, useState } from "react";
import "../../stylesheets/Menu.css";
// import sideImage from '../assets/menu-sideimage.jpg'
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { MdMenuOpen } from "react-icons/md";
// import Lenis from "lenis";

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);

export const Menu = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setscrolled] = useState(false)
  const container = useRef(null);
  const lenis = useLenis();
  const isMenuOpenRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const handleClickRef = useRef(null);
  const [menuOpen, setmenuOpen] = useState(false)

  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "contact"];

    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(id),
        onEnterBack: () => setActive(id),
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  useGSAP(() => {

    CustomEase.create("hope", ".87,0,.13,1");

    const q = gsap.utils.selector(container);

    let splitTextByContainer = [];

    // Wait for fonts
    document.fonts.ready.then(() => {

      const textContainers = q(".menu-col");

      textContainers.forEach((col) => {

        const textElements = col.querySelectorAll("div,p,a");

        let containerSplits = [];

        textElements.forEach((el) => {

          const split = SplitText.create(el, {
            type: "lines",
            mask: "lines",
            linesclassName: "line"
          });

          containerSplits.push(split);

          gsap.set(split.lines, { y: "-110%" });

        });

        splitTextByContainer.push(containerSplits);

      });

    });

    const menuToggleBtn = q(".menu-toggle-button")[0];
    const menuOverlay = q(".menu-overlay")[0];
    const menuOverlayContainer = q(".menu-overlay-content")[0];
    const copyContainers = q(".menu-col");
    const menuToggleLabel = q(".menu-toggle-label")[0];
    const menuMediaWrapper = q(".menu-media-wrapper")[0];
    const pageContainer = document.querySelector(".menu-container");
    const hamburgerIcon = q(".menu-hamberger-icon")[0];

    if (!menuToggleBtn) return;



    const handleClick = () => {

      if (isAnimatingRef.current) return;

      isAnimatingRef.current = true;

      if (!isMenuOpenRef.current) {
        lenis?.stop();
        setmenuOpen(true)
        const tl = gsap.timeline({
          onComplete: () => {
            isAnimatingRef.current = false;
            isMenuOpenRef.current = true;
          }
        });

        tl.to(menuToggleBtn, {
          y: "-0%",
          duration: 1,
          ease: "hope"
        })

          .to(pageContainer, {
            y: "100vh",
            duration: 1,
            ease: "hope"
          }, "<")

          .to(menuOverlay, {
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            duration: 1,
            ease: "hope"
          }, "<")

          .to(menuOverlayContainer, {
            yPercent: 0,
            duration: 1,
            ease: "hope"
          }, "<")

          .to(menuMediaWrapper, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.4");

        splitTextByContainer.forEach((containerSplits) => {

          const copyLines = containerSplits.flatMap(split => split.lines);

          tl.to(copyLines, {
            y: "0%",
            duration: 1.4,
            ease: "hope",
            stagger: -0.07
          }, "-=0.6");

        });

        hamburgerIcon.classList.add("active");
        menuToggleLabel.classList.add("active")

      } else {
        setmenuOpen(false)
        const tl = gsap.timeline({
          onComplete: () => {

            splitTextByContainer.forEach((containerSplits) => {

              const copyLines = containerSplits.flatMap(split => split.lines);
              gsap.set(copyLines, { y: "-110%" });

            });

            gsap.set(copyContainers, { opacity: 1 });
            gsap.set(menuMediaWrapper, { opacity: 0 });

            lenis?.start();

            isAnimatingRef.current = false;
            isMenuOpenRef.current = false;

          }
        });

        hamburgerIcon.classList.remove("active");
        menuToggleLabel.classList.remove("active")

        tl.to(pageContainer, {
          y: "0vh",
          duration: 1,
          ease: "hope"
        })

          .to(menuOverlay, {
            clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
            duration: 1,
            ease: "hope"
          }, "<")

          .to(menuOverlayContainer, {
            yPercent: -50,
            duration: 1,
            ease: "hope"
          }, "<")

          .to(menuToggleLabel, {
            y: "0%",
            duration: 1,
            ease: "hope"
          }, "<")

          .to(copyContainers, {
            opacity: 0.25,
            duration: 1,
            ease: "hope"
          }, "<");

      }

    };

    menuToggleBtn.addEventListener("click", handleClick);
    handleClickRef.current = handleClick;

    return () => {
      menuToggleBtn.removeEventListener("click", handleClick);
    };

  }, { scope: container });

  useEffect(() => {
    if (!lenis) return;

    const onScroll = ({ scroll }) => {
      setscrolled(scroll > 600);
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);


  const handleNavClick = (target) => {
    if (!lenis) return;

    const el = document.querySelector(target);
    if (!el) return;

    // CLOSE MENU FIRST
    if (isMenuOpenRef.current && !isAnimatingRef.current) {
      handleClickRef.current(); // ✅ trigger close animation
    }

    // THEN SCROLL
    setTimeout(() => {
      lenis.scrollTo(el, {
        duration: 1.2,
      });
    }, 800); // slightly longer for smoothness
  };

  return (
    <>
      <nav ref={container}>

        <div className={`menu-bar ${scrolled ? "scrolled-menu-bar" : ""}`}>

          <div className="logo">⌘</div>

          <div className="menu-toggle-button">

            <div className="menu-toggle-label"></div>

            <button
              type="button"
              className={`menu-hamberger-icon ${menuOpen ? "active" : ""}`}
            >
              <span></span>
              <span></span>
            </button>

          </div>

        </div>

        <div className="menu-overlay">

          <div className="menu-overlay-content">


            <div className="menu-content-main">

              <div className="menu-col links">
                <h2 onClick={() => handleNavClick("#home")} className={`menu-link ${active === "home" ? "active" : ""}`}>Home</h2>
                <h2 onClick={() => handleNavClick("#about")} className={`menu-link ${active === "about" ? "active" : ""}`}>About</h2>
                <h2 onClick={() => handleNavClick("#projects")} className={`menu-link ${active === "projects" ? "active" : ""}`}>Projects</h2>
                <h2 onClick={() => handleNavClick("#skills")} className={`menu-link ${active === "skills" ? "active" : ""}`}>Skills</h2>
                <h2 onClick={() => handleNavClick("#contact")} className={`menu-link ${active === "contact" ? "active" : ""}`}>Contact</h2>
              </div>

              <div className="menu-bottom-content">
                <div className="menu-col left-side-menu-content">
                <div className="menu-tag">Web Animation</div>
                <div className="menu-tag">Responsive Website</div>
                <div className="menu-tag">Modern UI</div>
              </div>

              <div className="menu-footer right-side-menu-content">

                <div className="menu-col">
                  <p className="menu-p">Mumbai, Maharashtra</p>
                </div>

                <div className="menu-col">
                  <a href="https://wa.me/7021357156" className="menu-p">+91 7021357156</a>
                  <a href="mailto:omee5663@gmail.com?subject=Hello&body=I want to contact you" className="menu-p">omee5663@gmail.com</a>
                </div>

              </div>
              </div>

            </div>



          </div>

        </div>

      </nav>
    </>
  );
};

export default Menu;