import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRouters } from '../../routers';

function AppRouter() {
  return (
    <Routes>
      {
        publicRouters.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} />
        ))
      }
    </Routes>
  );
}

export {
  AppRouter,
};
