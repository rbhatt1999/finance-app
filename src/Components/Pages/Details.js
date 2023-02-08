import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { AiOutlineArrowLeft, AiFillAudio } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import styles from './details.module.css';
import { LoadPayload } from '../../Redux/stocks/stocksActions';
// import { fetchStockDetails } from '../../Redux/stocks/stocksThunks';

const Details = () => {
  const {
    details,
    companyName,
    price,
    loading,
  } = useSelector(({ singleStockReducer }) => singleStockReducer);
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(LoadPayload());
  };

  return (
    <section className="pb-5">
      { loading ? <h1 style={{ textAlign: 'center' }}>loading...</h1>
        : (
          <>
            <div className={styles.nav}>
              <div className={styles.navbrand}>
                <NavLink to="/" onClick={handler}>
                  <div className={styles.navi}>
                    {loading}
                    <AiOutlineArrowLeft color="white" size={25} />
                  </div>
                </NavLink>

                <div>
                  <h1>Stock Metrics</h1>
                </div>
              </div>
              <Row className={styles.sethead}>
                <div className={styles.mic}>
                  <AiFillAudio size={25} />
                </div>
                <div>
                  <IoMdSettings size={25} />
                </div>
              </Row>
            </div>
            <h2 className={styles.dataheading}>{`${companyName} $${price}`}</h2>
          </>
        )}

      {
        details.map((item) => (
          <li className={styles.items} key={item.date}>
            <span>
              {item.calendarYear}
            </span>
            <br />

            <div>
              <span>
                Total Revenue:
                {item.revenue}
                billion
              </span>
              <br />
              <span>
                Net Income:
                {item.netIncome}
                billion
              </span>
              <br />
              <span>
                Gross Profit:
                {item.grossProfit}
                billion
              </span>
            </div>
          </li>
        ))

      }

    </section>
  );
};

export default Details;
