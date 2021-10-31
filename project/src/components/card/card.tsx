import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoutes} from '../../constants/constants';

type TCardProps = {
  card: Offer;
}

function Card({card}: TCardProps): JSX.Element {
  const stars = `${Math.floor(Number(card.stars)) * 20}%`;

  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>{card.isPremium}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={{pathname: generatePath(AppRoutes.Room, card)}}>
          <img className="place-card__image" src={card.img} width="260" height="200" alt={card.name} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: stars}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: generatePath(AppRoutes.Room, card)}}>
            {card.name}
          </Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}

export default Card;
