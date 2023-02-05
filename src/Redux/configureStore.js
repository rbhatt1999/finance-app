import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { Reducer, singleStockReducer } from './stocks/stocksActions';

// combine one or more reducers
const reducer = combineReducers({
  Reducer,
  singleStockReducer,
});

// create the store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
