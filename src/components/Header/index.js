import React from "react";
import Navbar from "../Navbar";
import { Container, HeaderButton, Title, Text } from "./Header.elements";

const Header = () => {
  return (
    <>
      <Container>
        <Navbar />
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
