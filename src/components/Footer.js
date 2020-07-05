import React from 'react';
import { FaTwitter, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container className="footer-container">
        {/* <p>&copy; { new Date().getFullYear() }, My Gatsby Site</p> */}
        <div className="footer-icons">
          <a href="http://youtube.com/quetcodesfire" className="footer-icon" target="_blank"><FaYoutube /></a>
          <a href="http://twitter.com/quetcodesfire" className="footer-icon" target="_blank"><FaTwitter /></a>
          <a href="http://instagram.com/quetcodesfire_" className="footer-icon" target="_blank"><FaInstagram /></a>
          <a href="http://github.com/quetcodesfire_" className="footer-icon" target="_blank"><FaGithub /></a>
        </div>
      </Container>

      </footer>
  );
};

export default Footer;
