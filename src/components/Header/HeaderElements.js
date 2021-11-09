import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: auto;
`;

export const Logo = styled.img`
  width: 250px;
  color: white;
  height: 100px;
  transition-duration: 0.365s;
  margin-top: 10px;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const NavbarItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12vh;
`;

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  width: 30%;
  color: white;
  font-weight: bolder;
  line-height: 60px;
  letter-spacing: 4px;
  font-style: italic;
`;

export const HeaderButton = styled.button`
  font-size: 16px;
  padding: 20px 30px;
  border-radius: 8px;
  border: 1px solid #333;
  background: #000;
  cursor: pointer;
  color: var(--primary);
  transition: 0.365s;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
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

  &:not(:first-of-type) {
    &:hover{
    opacity: 0.5;
    transition: 0.165s;
    }
  }
  
  &.active {
    color: #a9db3f;
  }
  
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${`./images/header-image.jpg`});
  background-size: cover;
  background-repeat: no-repeat;
`;
