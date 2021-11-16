import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: auto;
  transition: 0.75s;
  position: sticky;
  top: 0;
  
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    background: ${({bg}) => bg ? "var(--primary)" : "" };
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

export const NavLinks = styled(NavLink)`
  font-size: 16px;
  padding: 15px;
  color: white;
  text-decoration: none;
  transition: 0.365s;
  font-weight: 200;
  margin: 0 5px;
  letter-spacing: 0.5px;
  font-style: italic;

  &:not(:nth-child(1)) {
    &:hover {
      opacity: 0.5;
      transition: 0.165s;
    }
  }

  &.active {
    color: #a9db3f;
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
