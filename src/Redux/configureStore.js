import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { Reducer, singleStockReducer, loadingReducer } from './stocks/stocksActions';
import { fetchApiData } from './stocks/stocksThunks';

// combine one or more reducers
const reducer = combineReducers({
  Reducer,
  singleStockReducer,
  loadingReducer,
});

// create the store
const store = createStore(reducer, applyMiddleware(logger, thunk));
store.dispatch(fetchApiData());

export default store;
