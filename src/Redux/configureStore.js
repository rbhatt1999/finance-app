import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { Reducer, singleStockReducer } from './stocks/stocksActions';

// create the store
const store = configureStore(
  {
    reducer: {
      Reducer,
      singleStockReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  },
);

export default store;
