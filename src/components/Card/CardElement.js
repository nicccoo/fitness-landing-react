import styled from "styled-components/macro";

export const CardContainer = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 50vh;



  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;
    width: 200px;
    margin-top: 10vh;

  }
`;

export const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 300px;
  background-image: linear-gradient(to bottom, #a9db3f, #96c03e, #83a53c, #718b39, #5f7236);
  border-radius: 8px;
  /* box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); */
  /* box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8); */
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);

  opacity: 0.8;

  @media (max-width: 768px) {
   margin: 10px auto;
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
  font-family: "Montserrat", sans-serif !important;
  font-weight: 200;
  font-style: italic;
  text-transform: uppercase;
  color: #000;

  @media (max-width: 768px) {
    font-size: 20px;
  }


`;

export const CardSubtitle = styled.p`
  font-size: 13px;
  text-align: center;
  margin: auto;
  padding: 0 10px;
  color: #000;
  font-weight: 200; 


`;
