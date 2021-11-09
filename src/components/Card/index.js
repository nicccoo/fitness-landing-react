import React from 'react';
import { IoIosFitness } from 'react-icons/io'
import { CardContainer, CardElement, CardImage, CardTitle, CardSubtitle } from './CardElement';
import { cardData } from '../fixtures/card.json'

const Card = ({ children }) => {
    return (
      <>
        <CardContainer>
            <CardElement>
                <CardImage>        
                </CardImage>
                <CardTitle>Hola</CardTitle>
                <CardSubtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, labore!</CardSubtitle>
            </CardElement>
        </CardContainer>


      </>
    )
}

export default Card
