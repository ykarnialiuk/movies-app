import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../sevices/moviesApi";
import searchReducer from "../slices/searchSlice";
import filterReducer from "../slices/filterSlice";
import favoritesReducer from '../slices/favoritesSlice';
import { TypedUseSelectorHook, useSelector } from "react-redux";
import localStorageMiddleware from "./localStorageMiddleware";

const loadFavorites = () => {
    const serializedFavorites = localStorage.getItem('favorites');
    return serializedFavorites ? JSON.parse(serializedFavorites) : []
};

const preloadedState = {
    favorites: { movies: loadFavorites() }
};

const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        search: searchReducer,
        filter: filterReducer,
        favorites: favoritesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware, moviesApi.middleware),
    preloadedState,
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;

export default store;