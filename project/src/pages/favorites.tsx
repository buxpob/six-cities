import HeaderNav from '../components/header/header-nav';
import HeaderLogo from '../components/header/header-logo';
import FavoritesList from '../components/favorites/favorites-list';
import { Offers } from '../types/types';
// import EmptyFavorites from '../components/favorites/empty-favorites';

type FavoritesScreenProps = {
  offers: Offers;
}

export default function FavoritesScreen({ offers }: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page page--favorites-empty">
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
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList offers={offers}/>
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
}
