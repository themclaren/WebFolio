import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { DiUbuntu } from 'react-icons/di';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/WebFolio">
          <DiUbuntu size="3em" color="purple" />
          Bilal Ahmed
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <Link
                to="homepage"
                spy
                smooth
                hashSpy
                offset={50}
                duration={500}
                activeClass="active"
              >
                <button type="button" className="btn" id="home-btn">
                  Home
                </button>
              </Link>
            </NavItem>

            <NavItem>
              <Link
                to="aboutme"
                spy
                smooth
                hashSpy
                offset={50}
                duration={500}
              >
                <button type="button" className="btn" id="about-btn">
                  About
                </button>
              </Link>
            </NavItem>

            <NavItem>
              <Link
                to="skills"
                spy
                smooth
                hashSpy
                offset={50}
                duration={500}
              >
                <button type="button" className="btn" id="skills-btn">
                  Skills
                </button>
              </Link>
            </NavItem>

            <NavItem>
              {/* <Link
                to="experience"
                spy
                smooth
                hashSpy
                offset={50}
                duration={500}
              > */}
                <a href="mailto:muhammad.ba19999@gmail.com"><button type="button" className="btn" id="exp-btn">
               
                  Contact
                </button></a>
              {/* </Link> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
