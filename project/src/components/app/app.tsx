import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import MainScreen from '../../pages/main';
import ErrorScreen from '../../pages/error';
import LoginScreen from '../../pages/login';
import FavoritesScreen from '../../pages/favorites';
import PropertyScreen from '../../pages/property';
import PrivateRoute from '../private-route/private-route';
import { Reviews } from '../../types/types';
import { Offers } from '../../types/types';

type AppProps = {
  reviews: Reviews;
  offers: Offers;
}

function App({ reviews, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              offers={offers}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen
                offers={offers}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen />}
        />
        <Route
          path='*'
          element={<ErrorScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// fetch('https://10.react.pages.academy/six-cities/hotels/2')
//   .then((resolve) => resolve.json())
//   .then((data) => console.log(data));
