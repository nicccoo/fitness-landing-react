import styled from "styled-components/macro";

export const CardContainer = styled.div`
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  width: 70%;
  margin-left: 15%;
  height: 50vh;
  opacity: 0.9;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;
    width: 100%;
    margin-top: 10vh;
    margin-left: 0;
  }
`;

export const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 280px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);

  background: var(--primary);

  @media (max-width: 768px) {
    margin: 10px auto;
    width: 100%;
  }
`;

export const CardImage = styled.img`
  width: 65px;
  height: 60px;
  margin: auto;

  @media (max-width: 768px) {
    height: 50px;
    width: 55px;
  }
`;

export const CardTitle = styled.h1`
  font-size: 22px;
  font-weight: 200;
  font-style: italic;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CardSubtitle = styled.p`
  font-size: 13px;
  text-align: center;
  margin: auto;
  padding: 0 10px;
  color: #777777;
  font-weight: 200;
`;
