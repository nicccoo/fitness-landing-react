import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { Container, HeaderButton, Title, Text } from "./Header.elements";

const Header = () => {
  return (
    <>
      <Container id='home'>
        <Navbar />
        <Text>
          <Title>
            EL EJERCICIO NO SOLO CAMBIA TU CUERPO, CAMBIA TU MENTE, TU ACTITUD Y
            TU HUMOR
          </Title>
            <Link to={{
              pathname:
                "https://wa.me/5493364594483?text=¡Hola,%20quiero%20comenzar%20a%20entrenar!"
            }}target="_blank">
          <HeaderButton>
            COMIENZA AHORA
            </HeaderButton>
            </Link>      
        </Text>
      </Container>
      
    </>
  );
};


export default Header;
