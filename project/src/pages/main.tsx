import {useState} from 'react';
import HeaderNav from '../components/header/header-nav';
import HeaderLogo from '../components/header/header-logo';
import MainPlaces from '../components/main/main-places';
import MainTabs from '../components/main/main-tabs';
import Map from '../components/map/map';
import { CITY } from '../mocks/city';
// import MainEmpty from '../components/main/main-empty';
import { Offers, Offer } from '../types/types';

type MainScreenProps = {
  offers: Offers;
}

export default function MainScreen({ offers }: MainScreenProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const onListItemHover = (id: number) => {
    const currentPoint = offers.find((offer) => offer.id === id);
    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo />
            </div>
            <HeaderNav />
          </div>
        </div>
      </header>
      <main className={`page__main page__main--index ${offers.length < 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainTabs />
        <div className="cities">
          <div className={`cities__places-container container ${offers.length < 0 ? 'cities__places-container--empty' : ''}`}>
            <MainPlaces
              offers={offers}
              onListItemHover={onListItemHover}
            />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={CITY}
                  points={offers}
                  selectedPoint={selectedPoint}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
