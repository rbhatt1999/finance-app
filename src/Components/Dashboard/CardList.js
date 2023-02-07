import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../../Redux/stocks/stocksThunks';
import Card from './Card';
import styles from '../Pages/dashboard.module.css';

const CardList = () => {
  const data = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState('');
  const searchFilter = (e) => {
    setSearchVal(e.target.value.toLowerCase());
  };

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  return (
    <>
      <input className="search-input" type="text" value={searchVal} placeholder="Search..." onChange={searchFilter} />

      <ul className={styles.stocklist}>

        {
              data.loading ? <h1 style={{ textAlign: 'center' }}>loading...</h1>
                : data.stocks.filter((filtered) => {
                  if (searchVal === '') {
                    return filtered;
                  }
                  return filtered.name.toLowerCase().includes(searchVal);
                }).map((item) => (
                  <Card
                    key={item.symbol}
                    change={item.change}
                    companyName={item.name}
                    price={item.price}
                    changesPercentage={item.changesPercentage}
                    symbol={item.symbol}
                  />
                ))
            }
      </ul>
    </>
  );
};

export default CardList;
