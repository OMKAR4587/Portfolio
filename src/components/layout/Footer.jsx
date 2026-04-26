import "../../stylesheets/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-left">
          <h2>OMKAR YEVALE</h2>
          <p>Building clean and modern web experiences.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social */}
        <div className="footer-social">
          <a href="https://github.com/OMKAR4587" target="_blank" rel="noreferrer" className="link">
            GitHub →
          </a>
          <a href="mailto:omee5663@example.com" className="link">
            Email →
          </a>
          <a href="https://wa.me/7021357156" target="_blank" rel="noreferrer" className="link">
            WhatsApp →
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Omkar. All rights reserved.</p>
      </div>
    </footer>
  );
}