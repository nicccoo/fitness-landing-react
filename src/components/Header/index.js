import React, { useState } from "react";
import { Link } from "react-router-dom";
import  {GiHamburgerMenu} from 'react-icons/gi'
import {
  Container,
  HeaderButton,
  Navbar,
  NavbarItems,
  NavLinks,
  Logo,
  Title,
  Text,
} from "./HeaderElements";

const Header = () => {

  return (
    <>
      <Container> 
        <Navbar>
          <Link to="/" exact>
            <Logo src="./images/logo.png" alt="Atila Fitness" />
          </Link>
          <NavbarItems>
            <GiHamburgerMenu 
            size='40px'
          
            className="Mobile-menu" onClick={console.log('push')}/>
            <NavLinks activeClassName='active' to="/" exact>
              HOME
            </NavLinks>
            <NavLinks activeClassName='active' to="/entrenamiento">
              ENTRENAMIENTO
            </NavLinks>
            <NavLinks activeClassName='active' to="/contact">
              CONTACTO
            </NavLinks>
          </NavbarItems>
        </Navbar>
        <Text>
          <Title>
            EL EJERCICIO NO SOLO CAMBIA TU CUERPO, CAMBIA TU MENTE, TU ACTITUD Y
            TU HUMOR
          </Title>
          <HeaderButton>COMIENZA AHORA</HeaderButton>
        </Text>
      </Container>
    </>
  );
};

export default Header;
