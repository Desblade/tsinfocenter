import {
  ERROR_ROUTE, LOGIN_ROUTE, MARKET_ROUTE, REGISTER_ROUTE,
} from './utils/consts';
import { ErrorPage } from './pages/ErrorPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { MarketPage } from './pages/MarketPage';

const publicRouters = [
  {
    path: ERROR_ROUTE,
    Component: ErrorPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTER_ROUTE,
    Component: RegisterPage,
  },
  {
    path: MARKET_ROUTE,
    Component: MarketPage,
  },
];

export {
  publicRouters,
};
