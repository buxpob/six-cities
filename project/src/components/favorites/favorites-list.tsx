import { Offers } from '../../types/types';

type FavoritesListProps = {
  offers: Offers
}

export default function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  const listCityName = [...new Set(offers.map((offer) => offer.city.name))];

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {listCityName.map((city) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="/">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offers.map((offer) =>
                offer.city.name === city ?
                  <article className="favorites__card place-card" key={offer.id}>
                    <div className="place-card__mark">
                      <span>Premium</span>
                    </div>
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <a href="/">
                        <img className="place-card__image" src={offer.previewImage} width={150} height={110} alt="Place" />
                      </a>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">€180</b>
                          <span className="place-card__price-text">/&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg className="place-card__bookmark-icon" width={18} height={19}>
                            <use xlinkHref="#icon-bookmark" />
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '100%' }} />
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="/">Nice, cozy, warm big bed apartment</a>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article> : '')}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
