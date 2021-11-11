import React from "react";
import { NavbarContainer, NavbarItems, NavLinks, Logo } from "./Navbar.elements";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavLinks to="/" exact>
          <Logo src="./images/logo.png" alt="Atila Fitness" />
        </NavLinks>
        <NavbarItems>
          {/* <GiHamburgerMenu
            size="40px"
            className="Mobile-menu"
            onClick={console.log("push")}
          /> */}
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
