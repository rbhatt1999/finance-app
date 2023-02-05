import {
  retrieveAllStocks,
  retrieveSingleStock,
  startLoadingData,
  stopLoadingData,
} from './stocksActions';

const Endpoint = 'https://financialmodelingprep.com/api/v3/';
const ApiKey = '5359bdf31c45879aa972450bd6e2275e';

export const fetchApiData = () => async (dispatch) => {
  try {
    dispatch(startLoadingData(true));
    const response = await fetch(`${Endpoint}stock_market/actives?apikey=${ApiKey}`);
    const info = await response.json();
    dispatch(retrieveAllStocks(info));
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(stopLoadingData(false));
  }
};

export const fetchStockDetails = (payload) => async (dispatch) => {
  try {
    dispatch(startLoadingData(true));
    const response = await fetch(`${Endpoint}/income-statement/${payload.symbol}?limit=120&apikey=${ApiKey}`);
    const info = await response.json();
    dispatch(retrieveSingleStock({ info, name: payload.companyName, price: payload.price }));
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(stopLoadingData(false));
  }
};
