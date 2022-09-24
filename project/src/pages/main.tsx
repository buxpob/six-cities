import HeaderNav from '../components/header/header-nav';
import HeaderLogo from '../components/header/header-logo';
import MainPlaces from '../components/main/main-places';
// import MainEmpty from '../components/main/main-empty';
import { Offers, Offer } from '../types/types';

type MainScreenProps = {
  offers: Offers;
  onFocusCard: (offer: Offer) => void;
}

export default function MainScreen({ offers, onFocusCard }: MainScreenProps): JSX.Element {
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
      <MainPlaces offers={offers} onFocusCard={onFocusCard} />
    </div>
  );
}
