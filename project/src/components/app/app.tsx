import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import MainScreen from '../../pages/main';
import ErrorScreen from '../../pages/error';
import LoginScreen from '../../pages/login';
import FavoritesScreen from '../../pages/favorites';
import PropertyScreen from '../../pages/property';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen cardsCount={5} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen />
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
