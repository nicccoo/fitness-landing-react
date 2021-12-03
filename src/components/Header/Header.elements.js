import styled from "styled-components/macro";

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

  @media (max-width: 768px) {
    font-size: 20px;
    width: 70%;
    line-height: 30px;
    margin-top: 20%;
  }
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
  z-index: 0;
  margin: 30px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${`./images/header-image.jpg`});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);


  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    background-size: cover;
  }
`;
