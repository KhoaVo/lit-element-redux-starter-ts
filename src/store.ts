import {configureStore,} from '@reduxjs/toolkit'
import {lazyReducerEnhancer } from 'pwa-helpers';
import {combineReducers} from 'redux';
import {counterReducer} from './slices/counter';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  enhancers: [lazyReducerEnhancer(combineReducers)]
});

const state = store.getState();
export type RootState = typeof state;