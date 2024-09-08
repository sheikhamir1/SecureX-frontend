import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <label className="footer-logo">DesignX</label>
          <p>&copy; 2024 DesignX. All rights reserved.</p>
          <p className="footer-description">
            Secure & Share Govt Document with Family Members - Revolutionizing
            document management and security.
          </p>
          <a href="/about" className="footer-link">
            About Us
          </a>
        </div>
        <div className="footer-right">
          <h4>Contact Us</h4>
          <p className="setp">
            Email: <a href="mailto:info@designx.com">info@designx.com</a>
          </p>
          <p>Phone: +123 456 7890</p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
