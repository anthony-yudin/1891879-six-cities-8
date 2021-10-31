import React from 'react';
//import { useState } from 'react';
import Card from '../card/card';
import { Offer } from '../../types/offer';

type TCardProps = {
  offers: Offer[];
}

function Cards({offers}: TCardProps): JSX.Element {
  //const [sortActiveId, setSortActiveId] = useState<number | null>(null);

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
