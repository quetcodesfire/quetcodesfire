import React from 'react';
import { Link } from 'gatsby';
import { FaEnvelope, FaHome, FaLaptopCode, FaMicrophone,FaShoppingCart, FaUser } from 'react-icons/fa';

import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';

import logo from 'assets/images/quetcodesfire-laptop-transparent-logo.png'
import icon from 'assets/images/quetcodesfire-laptop-transparent-icon.png'

const Header = () => {
  return (
    <header>
      <Container>
        <Columns>
          <Column>
            <Link to="/"><img src={icon} className="nav-logo" alt="quet codes fire logo" /></Link>
            <Link to="/"><FaHome className="nav-icons" size={25} /></Link>
            <Link to="/about"><FaUser className="nav-icons" size={25} /></Link>
            {/* <Link to="/contact"><FaLaptopCode className="nav-icons" size={25} /></Link>
            <Link to="/contact"><FaShoppingCart className="nav-icons" size={25} /></Link>
            <Link to="/contact"><FaMicrophone className="nav-icons" size={25} /></Link> */}
            <Link to="/contact"><FaEnvelope className="nav-icons" size={25} /></Link>
          </Column>
          {/* <Column>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/page-2/">Page 2</Link>
              </li>
              <li>
                <a href="https://github.com/zurgbot/gatsby-starter-zurgbot">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </Column> */}
        </Columns>
      </Container>
    </header>
  );
};

export default Header;
