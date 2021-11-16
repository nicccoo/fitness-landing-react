import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai'
import {
  NavbarContainer,
  NavbarItems,
  NavLinks,
  Logo,
  MobileIcon,
} from "./Navbar.elements";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <NavbarContainer bg={isMobile}>
        <NavLinks to="/" exact>
          <Logo src="./images/logo.png" alt="Atila Fitness" />
        </NavLinks>
        <MobileIcon onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <AiOutlineClose /> : <FaBars /> }
        </MobileIcon>
        <NavbarItems show={isMobile} onClick={() => setIsMobile(false)}>
          <NavLinks activeClassName="active" to="/" exact>
            HOME
          </NavLinks>
          <NavLinks activeClassName="active" to="/entrenamiento">
            ENTRENAMIENTO
          </NavLinks>
          <NavLinks activeClassName="active" to="/contact">
            CONTACTO
          </NavLinks>
        </NavbarItems>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
