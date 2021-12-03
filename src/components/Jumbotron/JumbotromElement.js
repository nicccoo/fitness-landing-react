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
  height: 40%;
  padding: 15px;
  align-items: center; ;

  &:last-of-type {
      margin: 100px 0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;


}
`;

export const JumboText = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 400px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

  @media (max-width: 768px) { 
    width: 100%;
    height: auto;   
  }

`;

export const JumboImage = styled.img`
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);

  object-fit: cover;
`;

export const Inner = styled.div`
  width: 30%;

  @media (max-width: 768px) { 
    width: 90%;
  } 
`;

export const JumboTitle = styled.h2`
  height: 100px;
  font-size: 35px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 50px;
  
  @media (max-width: 768px) { 
   font-size: 20px; 
   margin: 0;  
  }

`;

export const JumboTextInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({directionText}) => directionText};
  padding: 20px;

`;

export const JumboSubTitle = styled.p`
    font-size: 14px;
    margin-top: 40px 0;
    line-height: 23.5px;
    color: white;
    opacity: 0.7;
    
`;
