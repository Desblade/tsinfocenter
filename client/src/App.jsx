import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { AppRouter } from './Components/AppRouter';
import { Header } from './Components/Header';
import { Context } from './index';
import './App.css';

const App = observer(() => {
  const { userStore } = useContext(Context);

  useEffect(() => {
    userStore.resignToken()
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
});

export {
  App,
};
