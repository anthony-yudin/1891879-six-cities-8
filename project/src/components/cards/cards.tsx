import React from 'react';
import Card from '../card/card';
import { TOffer } from '../../types/offer';

type TCardProps = {
  offers: TOffer[];
  isPremium: boolean;
}

function Cards({offers, isPremium}: TCardProps): JSX.Element {
  return (
    <>
      {offers.map((item) => (
        <Card
          key={item.id}
          card={item}
          isPremium={isPremium}
        />
      ))}
    </>
  );
}

export default Cards;
