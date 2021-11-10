import React from 'react';
import { TReview } from '../../types/offer';
import Review from '../review/review';

type TReviews = {
  reviews: TReview[];
}

function Reviews({reviews}: TReviews): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((item) => (
        <Review
          key={item.id}
          review={item}
        />
      ))}
    </ul>
  );
}

export default Reviews;
