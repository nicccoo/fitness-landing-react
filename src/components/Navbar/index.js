import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {
  NavbarContainer,
  NavbarItems,
  NavLinks,
  Logo,
  MobileIcon,
} from "./Navbar.elements";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleIsMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <NavbarContainer bg={isMobile}>
        <NavLinks         
          to="home"
          spy={true}
          smooth={true}
          hashSpy={true}
          exact
        >
          <Logo src="./images/logo.png" alt="Atila Fitness" />
        </NavLinks>
        <MobileIcon onClick={toggleIsMobile}>
          {isMobile ? <AiOutlineClose /> : <FaBars />}
        </MobileIcon>
        <NavbarItems show={isMobile} onClick={toggleIsMobile}>
          <NavLinks
            to="home"
            spy={true}
            smooth={true}
            hashSpy={true}
            exact
          >
            HOME
          </NavLinks>
          <NavLinks
            to="entrenamiento"
            spy={true}
            smooth={true}
            hashSpy={true}
          >
            ENTRENAMIENTO
          </NavLinks>
          <NavLinks
            to="footer"
            spy={true}
            smooth={true}
            hashSpy={true}
          >
            CONTACTO
          </NavLinks>
        </NavbarItems>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
