import React from "react";
import { IconContext } from "react-icons";
import {
  FooterContainer,
  FooterInfo,
  FooterTitle,
  FooterText,
  FooterContacto,
} from "./FooterElement";
import footerData from "../../fixtures/footer.json";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer id="footer">
      {footerData.map((item) => (
        <FooterInfo key={item.id}>
          <FooterTitle>{item.title}</FooterTitle>
          <FooterText>{item.text}</FooterText>
        </FooterInfo>
      ))}
      <FooterContacto>
        <IconContext.Provider
          value={{ style: { color: "var(--primary)", fontSize: "50px" } }}
        >
          <Link
            to={{
              pathname:
                "https://wa.me/5493364594483?text=¡Hola,%20quiero%20empezar%20a%20entrenar!",
            }}
            target="_blank"
          >
            <FaWhatsapp />
          </Link>
          <Link
            to={{ pathname: "https://instagram.com/atila_fit" }}
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </IconContext.Provider>
      </FooterContacto>
    </FooterContainer>
  );
};

export default Footer;
