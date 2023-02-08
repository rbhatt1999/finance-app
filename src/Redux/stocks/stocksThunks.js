import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  GET_STOCK_METRICS,
  GET_SINGLE_STOCK,
} from './stocksActions';

const Endpoint = 'https://financialmodelingprep.com/api/v3/';
const ApiKey = '73caddf626930ab0cbb3003782a8eb81';

export const fetchApiData = createAsyncThunk(GET_STOCK_METRICS, async () => {
  try {
    const response = await fetch(`${Endpoint}stock_market/actives?apikey=${ApiKey}`);
    const info = await response.json();
    return info;
  } catch (err) {
    throw new Error(err);
  }
});

export const fetchStockDetails = createAsyncThunk(GET_SINGLE_STOCK, async (payload) => {
  try {
    const response = await fetch(`${Endpoint}/income-statement/${payload.symbol}?limit=120&apikey=${ApiKey}`);
    const info = await response.json();
    return { info, name: payload.companyName, price: payload.price };
  } catch (err) {
    throw new Error(err);
  }
});
