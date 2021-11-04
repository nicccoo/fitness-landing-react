import React from "react";
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
          <NavLinks to="/" exact>
            <Logo src="./images/logo.png" alt="" />
          </NavLinks>
          <NavbarItems>
            <NavLinks activeClassName='active' to="/" exact>
              Home
            </NavLinks>
            <NavLinks activeClassName='active' to="/entrenamiento">
              Entrenamiento
            </NavLinks>
            <NavLinks activeClassName='active' to="/contact">
              Contacto
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
