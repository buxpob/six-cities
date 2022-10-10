import React from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';

type CardProps = {
  offer: Offer;
  onListItemHover: (id: number) => void;
}

export default function Card(props: CardProps): JSX.Element {
  const { offer, onListItemHover } = props;
  const { id, previewImage } = offer;

  const listItemHoverHandler = () => {
    onListItemHover(offer.id);
  };

  return (
    <article className="cities__card place-card" key={id} onMouseEnter={listItemHoverHandler}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€120</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>Beautiful &amp; luxurious apartment at great location</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

