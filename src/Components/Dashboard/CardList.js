import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import styles from '../Pages/dashboard.module.css';

const CardList = () => {
  const data = useSelector((state) => state.Reducer);

  const [searchVal, setSearchVal] = useState('');
  const searchFilter = (e) => {
    setSearchVal(e.target.value.toLowerCase());
  };

  return (
    <>
      <input type="text" value={searchVal} placeholder="Search..." onChange={searchFilter} />

      <ul className={styles.stocklist}>

        {
              data.length === 0 ? <h1>Loading...</h1>
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
