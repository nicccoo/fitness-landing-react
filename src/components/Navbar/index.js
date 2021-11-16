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
import * as ROUTES from '../../constants/routes'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleIsMobile = () => {
    setIsMobile(!isMobile);
  }

  return (
    <>
      <NavbarContainer bg={isMobile}>
        <NavLinks to={ROUTES.HOME} exact>
          <Logo src="./images/logo.png" alt="Atila Fitness" />
        </NavLinks>
        <MobileIcon onClick={toggleIsMobile}>
          {isMobile ? <AiOutlineClose /> : <FaBars />}
        </MobileIcon>
        <NavbarItems show={isMobile} onClick={toggleIsMobile} >
          <NavLinks activeClassName="active" to={ROUTES.HOME} exact>
            HOME
          </NavLinks>
          <NavLinks activeClassName="active" to={ROUTES.ENTRENAMIENTO}>
            ENTRENAMIENTO
          </NavLinks>
          <NavLinks activeClassName="active" to={ROUTES.CONTACTO}>
            CONTACTO
          </NavLinks>
        </NavbarItems>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
