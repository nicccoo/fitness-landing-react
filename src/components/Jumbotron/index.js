import React from "react";
import {
  Container,
  Jumbo,
  Inner,
  JumboImage,
  JumboText,
  JumboTextInner,
  JumboPreTitle,
  JumboTitle,
  JumboSubTitle,
} from "./JumbotromElement";
import jumboData from "../../fixtures/jumbotron.json";

const Jumbotron = () => {
  return (
    <Container>
      {jumboData.map((item) => (
        <Jumbo key={item.id} direction={item.direction}>
          <Inner>
            <JumboImage src={item.image} alt={item.alt} />
          </Inner>
          <JumboText>
            <JumboTextInner directionText={item.directionText} >
              <JumboPreTitle>Atila Fit</JumboPreTitle>
              <JumboTitle >{item.title}</JumboTitle>
              <JumboSubTitle>{item.subTitle}</JumboSubTitle>
            </JumboTextInner>
          </JumboText>
        </Jumbo>
      ))}
    </Container>
  );
};

export default Jumbotron;
