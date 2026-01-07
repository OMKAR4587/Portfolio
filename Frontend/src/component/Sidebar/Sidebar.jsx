import React from 'react';
import '../../Stylesheet/sidebar.css';
import Navlinks from "./Navlinks";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
const Sidebar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/omee" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/omee" },
    { icon: <FaTwitter />, url: "https://twitter.com/omee" },
    { icon: <FaInstagram />, url: "https://instagram.com/omee" },
  ];

  return (
    <div className="sidebar">
      <div className="heading">
        <h1 className='text-5xl font-bold mt-10 ml-9'>Omee.</h1>
      </div>

      <div className="flex flex-col items-start justify-center mt-10 nav-links">
        {navLinks.map((link, index) => (
          <Navlinks key={index} path={link.path} linkName={link.name} />
        ))}
      </div>

      <div className="footer mt-10">
      <h4 className="text-gray-600 mb-3">omee5663@gmail.com</h4>
      <ul className="flex gap-4">
        {socialLinks.map((social, index) => (
          <li key={index}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-xl transition-colors duration-300"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;
