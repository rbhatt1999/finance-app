export const retieveData = (data)=> ({
  type: 'stockMetrics/stock/GET_STOCK_METRICS/fulfilled',
  payload : [...data],
})

export const retieveSingleData = (info, name, price)=> ({
  type: 'stockMetrics/stock/GET_SINGLE_STOCK/fulfilled',
  payload : {info, name, price},
})