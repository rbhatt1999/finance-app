const GET_STOCK_METRICS = 'stockMetrics/stock/GET_STOCK_METRICS';
const GET_SINGLE_STOCK = 'stockMetrics/stock/GET_SINGLE_STOCK';
const START_LOADING = 'stockMetrics/stock/START_LOADING';
const END_LOADING = 'stockMetrics/stock/END_LOADING';

export const retrieveAllStocks = (payload) => ({
  type: GET_STOCK_METRICS,
  payload,
});

export const retrieveSingleStock = (payload) => ({
  type: GET_SINGLE_STOCK,
  payload,
});

export const startLoadingData = (payload) => ({
  type: START_LOADING,
  payload,
});

export const stopLoadingData = (payload) => ({
  type: END_LOADING,
  payload,
});

const initialMetrics = {
  stocks: [],
};

const initialInfoState = {
  details: [],
};

const initialLoading = { loading: false };

// reducer for fetching all companies stock listing
export const Reducer = (state = initialMetrics, { type, payload }) => {
  switch (type) {
    case GET_STOCK_METRICS:
      return { stocks: [...payload] };
    default:
      return state;
  }
};

// reducer for fetching single company's stock listing
export const singleStockReducer = (state = initialInfoState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_STOCK:
      return { details: [...payload.info], companyName: payload.name, price: payload.price };
    default:
      return state;
  }
};

// the reducer function for the loaders
export const loadingReducer = (state = initialLoading, { type, payload }) => {
  switch (type) {
    case START_LOADING:
      return { ...state, loading: payload };
    case END_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
