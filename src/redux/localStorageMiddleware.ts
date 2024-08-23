import { Middleware } from '@reduxjs/toolkit';

const localStorageMiddleware: Middleware = store => next => action => {
  const result = next(action);

  const state = store.getState();
  const currentFavorites = JSON.stringify(state.favorites.movies);

  if (localStorage.getItem('favorites') !== currentFavorites) {
    localStorage.setItem('favorites', currentFavorites);
  }
  return result;
};

export default localStorageMiddleware;
