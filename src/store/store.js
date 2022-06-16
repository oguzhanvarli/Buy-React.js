import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './slices/categoriesSlice'
import cartReducer from './slices/cartSlice'
import throttle from 'lodash.throttle';
import { saveState, loadState } from '../localStroage/localStroage';

export const store = configureStore({
    reducer:{
        categories: categoriesReducer,
        cart : cartReducer,
    },
    preloadedState: loadState()
})
store.subscribe(throttle( () => saveState(store.getState()), 1000)
);