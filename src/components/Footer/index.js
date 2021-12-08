import React from "react";
import {
  FooterContainer,
  FooterInfo,
  FooterTitle,
  FooterText,
  FooterContacto,
  FooterTelefono,
  FooterHorarios,
  FooterRedes,
  FooterContactoHorarios,
  FooterContactoTitle,
} from "./FooterElement";
import footerData from "../../fixtures/footer.json";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import {HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <FooterContainer>
      {footerData.map((item) => (
        <FooterInfo key={item.id}>
          <FooterTitle>{item.title}</FooterTitle>
          <FooterText>{item.text}</FooterText>
        </FooterInfo>
      ))}
      <FooterContacto>
        <FooterContactoTitle>Telefono</FooterContactoTitle>
        <FooterTelefono>+598 2712 3045</FooterTelefono>
        <FooterContactoHorarios>Horarios</FooterContactoHorarios>
        <FooterHorarios>
          Lunes-Viernes <br />
          9:00-13:00 y 15:00-19:00
        </FooterHorarios>
      </FooterContacto>
      <FooterRedes>
        <FaWhatsapp />
        <FaFacebookF />
        <HiOutlineMail />
      </FooterRedes>
    </FooterContainer>
  );
};

export default Footer;
