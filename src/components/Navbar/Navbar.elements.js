import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: auto;
 
  

  @media screen and (max-width: 768px) {
   display: flex;
   justify-content: space-between;
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
    display: none;
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
