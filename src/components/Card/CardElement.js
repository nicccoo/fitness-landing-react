import styled from "styled-components/macro";

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

export const CardElement = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  width: 350px;
  height: 250px;
  margin: auto;
`;

export const CardImage = styled.img`
  width: 50px;
  height: 50px;
  margin: auto;
  color: black;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  margin: auto;
`;

export const CardSubtitle = styled.p`
  font-size: 10px;
  margin: auto;
`;
