import React from 'react';
import { TReview } from '../../types/offer';
import {MONTH_NAMES} from '../../constants/constants';

type TPropsReview = {
  review: TReview;
}

function Review({review}: TPropsReview): JSX.Element {
  const stars = `${Math.floor(Number(review.stars)) * 20}%`;
  const date = new Date(review.date);
  const MonthDay = `${MONTH_NAMES[date.getUTCMonth()]} ${date.getDay()}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.img} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: stars}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.text}</p>
        <time className="reviews__time" dateTime={review.date}>{MonthDay}</time>
      </div>
    </li>
  );
}

export default Review;
