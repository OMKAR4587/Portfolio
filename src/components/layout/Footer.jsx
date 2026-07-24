import "../../stylesheets/Footer.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <span className="footer-tag">
          THANKS FOR VISITING
        </span>

        <h2>
          Let's build something
          <br />
          people remember.
        </h2>

      </div>

      <div className="footer-content">

        <div className="footer-about">
          <h3>OMKAR YEVALE</h3>

          <p>
            Full Stack Developer crafting fast,
            scalable and thoughtfully designed
            web applications.
          </p>
        </div>

        <div className="footer-nav">

          <h4>Navigation</h4>

          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-connect">

          <h4>Connect</h4>

          <a
            href="mailto:omee5663@gmail.com"
          >
            Email
            <FaArrowRightLong />
          </a>

          <a
            href="https://github.com/OMKAR4587"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <FaArrowRightLong />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <FaArrowRightLong />
          </a>

        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Omkar Yevale.
          All rights reserved.
        </p>

        <p>
          Designed & Developed with React + GSAP
        </p>

      </div>

      <h2 className="footer-bg-text">
        YEVALE
      </h2>

    </footer>
  );
}