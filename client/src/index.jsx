import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import { App } from './App';
import { UserStore } from './stores/UserStore';
import { FoodStore } from './stores/FoodStore';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null);

root.render(
  <StyledEngineProvider>
    <Context.Provider value={{
      userStore: new UserStore(),
      foodStore: new FoodStore(),
    }}
    >
      <App />
    </Context.Provider>
  </StyledEngineProvider>
);
