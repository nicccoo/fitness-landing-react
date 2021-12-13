import styled from "styled-components/macro";
import { Link } from "react-scroll";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: auto;
  transition: 0.75s;
  
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    background: ${({bg}) => bg ? "var(--primary)" : "" };
    z-index: 999;

  }
`;

export const Logo = styled.img`
  width: 250px;
  color: white;
  height: 100px;
  transition-duration: 0.365s;

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    width: 180px;
    height: 80px;
  }
`;

export const NavbarItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  z-index: 999;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    flex-direction: column;
    left: ${({show}) => show ? '0' : '-100%'};
    justify-content: space-evenly;
    height: 90vh;
    opacity: 0.962;
    background: #000;
    align-items: center;
    transition: 0.365s;

  }
`;

export const NavLinks = styled(Link)`
  font-size: 16px;
  padding: 15px;
  color: white;
  text-decoration: none;
  transition: 0.365s;
  font-weight: 200;
  letter-spacing: 0.5px;
  font-style: italic;
  cursor: pointer;
  
  &:not(:nth-child(0)) {
    &:hover {
      color: var(--primary);
      transition: 0.165s;
    }
  }

  @media screen and (max-width: 768px) { 
    padding: 24px;

  }


`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    align-items: center;
    padding: 20px;

    svg {
      fill: #000;
      width: 35px;
      height: 35px;

    }
  }
`;
