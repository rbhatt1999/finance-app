import store from '../Redux/configureStore';
import { retieveData, retieveSingleData } from '../__mocks__/MockData';

describe('get all data', () => {
  it('should load data from the mock api', () => {
    store.dispatch(retieveData(['mock data 1', 'mock data 2']));
    expect(store.getState().Reducer.stocks.length).toBe(2);
  });

  it('change loading status to false', () => {
    expect(store.getState().Reducer.loading).toBe(false);
  });
});

describe('get Single data', () => {
  it('should single load data from the mock api', () => {
    store.dispatch(retieveSingleData(['mock data 1', 'mock data 2'], 'Google', 454));
    expect(store.getState().singleStockReducer.details.length).toBe(2);
  });

  it('get single data company name', () => {
    expect(store.getState().singleStockReducer.companyName).toBe('Google');
  });

  it('get single data Price', () => {
    expect(store.getState().singleStockReducer.price).toBe(454);
  });
  it('change loading status to false', () => {
    expect(store.getState().singleStockReducer.loading).toBe(false);
  });
});
