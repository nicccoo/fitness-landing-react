import styled from "styled-components/macro";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 50vh;
  background-color: white;
`;

export const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 300px;
  margin-top: -50vh;
  background-color: white;
  border-radius: 5px;
`;

export const CardImage = styled.img`
  width: 65px;
  height: 60px;
  margin: auto;
`;

export const CardTitle = styled.h1`
  font-size: 22px;
  margin: auto;
  font-weight: 200;
  font-style: italic;
  
`;

export const CardSubtitle = styled.p`
  font-size: 18px;
  text-align: center;
  margin: auto;
  font-weight: 200;
`;
