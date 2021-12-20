import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 10vh;
  }
`;

export const Jumbo = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${({ direction }) => direction};
  width: 100%;
  height: 67.65vh;
  padding: 15px;
  align-items: center;


  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 85vh;
    padding: 40px 0;
  }
`;

export const JumboText = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 50vh;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const JumboImage = styled.img`
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  object-fit: cover;

  @media screen and (max-width: 768px) {
    
    
    ;
  }

`;

export const Inner = styled.div`
  width: 45%;
  max-width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
  }
`;

export const JumboTitle = styled.h2`
  height: 100px;
  font-size: 40px;
  font-weight: 800;
  color: #444444  ;
  margin-bottom: 50px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0;
  }
`;

export const JumboTextInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ directionText }) => directionText};
  padding: 20px;
`;

export const JumboSubTitle = styled.p`
  font-size: 14px;
  font-weight: 200;
  margin-top: 40px 0;
  line-height: 23.5px;
  color: #777777;
  opacity: 0.7;
`;


export const JumboPreTitle = styled.p`
  font-size: 16px;
  color: #777777;
  padding: 10px 0;
  opacity: 0.4;
`;