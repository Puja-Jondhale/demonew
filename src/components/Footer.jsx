
import React from "react";
import { FiPhone, FiMail, FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiLinkedin
} from "react-icons/fi";
import { FaPinterestP, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "EPC Projects", href: "#ecp" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact Us", href: "#contact" }
];

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">

    {/* LEFT SIDE */}
    <div className="footer-left">
      <nav className="footer-nav">
        {NAV_LINKS.map((link, index) => (
          <a key={index} href={link.href}>{link.name}</a>
        ))}
      </nav>

      <div className="footer-bottom">
        © 2026 Padmatech Industries Pvt. Ltd. | All Rights Reserved
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="footer-right">

      <div className="footer-contact">
        <p><FiPhone className="footer-icon" /> +91 9146140044</p>
        <p><FiMail className="footer-icon" /> padmatechindustries@gmail.com</p>
      </div>

      <div className="footer-social">
        <a href="#"><FiLinkedin /></a>
        <a href="#"><FiInstagram /></a>
        <a href="#"><FiFacebook /></a>
        <a href="#"><FiTwitter /></a>
        <a href="#"><FiYoutube /></a>
        <a href="#"><FaPinterestP /></a>
      </div>

    </div>

  </div>
</footer>
  );
};

export default Footer;
