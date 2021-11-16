import React from "react";
import {
  CardContainer,
  CardElement,
  CardImage,
  CardTitle,
  CardSubtitle
} from "./CardElement";
import cardData from "../../fixtures/card.json";

const Card = () => {
  return (
    
    <CardContainer>
      {cardData.map((item) => (
        <CardElement key={item.id}>
          <CardImage src={item.image} alt={item.alt} />
          <CardTitle>{item.title}</CardTitle>
          <CardSubtitle>{item.subtitle}</CardSubtitle>
        </CardElement>
      ))}
    </CardContainer>
  );
};

export default Card;
