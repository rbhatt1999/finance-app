export const GET_STOCK_METRICS = 'stockMetrics/stock/GET_STOCK_METRICS';
export const GET_SINGLE_STOCK = 'stockMetrics/stock/GET_SINGLE_STOCK';
export const LOADING = 'stockMetrics/stock/LOADING';

const initialMetrics = {
  stocks: [],
  loading: true,
};

const initialInfoState = {
  details: [],
  loading: true,
};

export const LoadPayload = () => ({
  type: LOADING,
});

// reducer for fetching all companies stock listing
export const Reducer = (state = initialMetrics, { type, payload }) => {
  switch (type) {
    case `${GET_STOCK_METRICS}/fulfilled`:
      return { stocks: [...payload], loading: false };
    default:
      return state;
  }
};

// reducer for fetching single company's stock listing
export const singleStockReducer = (state = initialInfoState, { type, payload }) => {
  switch (type) {
    case `${GET_SINGLE_STOCK}/fulfilled`:
      return {
        details: [...payload.info], companyName: payload.name, price: payload.price, loading: false,
      };
    case LOADING:
      return {
        details: [],
        loading: true,
      };
    default:
      return state;
  }
};
