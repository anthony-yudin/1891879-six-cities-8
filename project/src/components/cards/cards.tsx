import React from 'react';
//import { useState } from 'react';
import Card from '../card/card';
import { TOffer } from '../../types/offer';

type TCardProps = {
  offers: TOffer[];
}

function Cards({offers}: TCardProps): JSX.Element {
  return (
    <>
      {offers.map((item) => (
        <Card
          key={item.id}
          card={item}
        />
      ))}
    </>
  );
}

export default Cards;
