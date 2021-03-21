import {configureStore} from '@reduxjs/toolkit';
import {lazyReducerEnhancer} from 'pwa-helpers';
import {LazyStore} from 'pwa-helpers/lazy-reducer-enhancer';
import {combineReducers} from 'redux';
import {counterReducer} from './slices/counter';
import routerReducer from 'lit-redux-router/lib/reducer';
import {connectRouter} from 'lit-redux-router';

// The state tree and which reducer is responsible for that part of the tree.
const stateAndReducers = {
  counter: counterReducer,
  router: routerReducer,
};

export const _store = configureStore({
  reducer: stateAndReducers,
  enhancers: [lazyReducerEnhancer(combineReducers)],
});

type BaseStore = typeof _store;
export const store = _store as BaseStore & LazyStore;

// Need to add reducers here again because lazyReducerEnhancer does not pick up
// the initial set of reducers.
store.addReducers(stateAndReducers);
connectRouter(store);

const state = store.getState();
export type RootState = typeof state;
