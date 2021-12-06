import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/jefflogo.png';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">All of your handyman needs!</p>
        <div className="input-areas">
          <div>Contact Me</div>
          <h1>Jeff</h1>
          <p>512-689-2605</p>
          <p>jafar_bayatii@yahoo.com</p>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">How it works</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img className="jeff-navbar-img" src={logo} alt="logo" />
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">JEFF © 2021</small>
          <div class="social-icons">
            <Link class="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
              <i class="fab fa-facebook-f" />
            </Link>
            <Link class="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
              <i class="fab fa-instagram" />
            </Link>
            <Link class="social-icon-link twitter" to="/" target="_blank" aria-label="LinkedIn">
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
