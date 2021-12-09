import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background: #444444;
  height: 35vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 50vh;
    margin-top: 100px;

  }

`;

export const FooterInfo = styled.div`
  width: 15%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }  
`;

export const FooterTitle = styled.h2`
  text-transform: uppercase;
  color: var(--primary);
  padding: 15px 0;
`;

export const FooterText = styled.p`
  color: white;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.7;
`;

export const FooterContacto = styled.div`
    display: flex;
    width: 300px;
    flex-direction: row;
    justify-content: space-evenly;  
    margin-top: 20px;
`;


