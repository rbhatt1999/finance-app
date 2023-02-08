import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { BsArrowRightCircle, BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import graph from '../../images/chart-graph.png';
import styles from '../Pages/dashboard.module.css';
import { fetchStockDetails } from '../../Redux/stocks/stocksThunks';

const Card = ({
  change, companyName, price, changesPercentage, symbol,
}) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(fetchStockDetails({ symbol, companyName, price }));
  };

  return (
    <Col className={styles.card} onClick={onClick}>
      <div className={styles.navigation}>
        <NavLink to="/details">
          <BsArrowRightCircle className={styles.direct} onClick={onClick} />
        </NavLink>
        <p className={styles.cName}>
          {companyName}
        </p>
        <div className={styles.priceContainer}>
          <p className={styles.price}>
            $
            {price}
          </p>
          <Row>
            <Col>
              <div className={styles.changeContainer}>
                <p className={styles.changev}>
                  <BsArrowUp color="green" />
                  {changesPercentage}
                </p>
                <p className={styles.changev}>
                  <BsArrowDown color="red" />
                  {change}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.topCard}>
        <Col>
          <img src={graph} className={styles.chart} alt="chart" />
        </Col>
      </div>
    </Col>
  );
};

export default Card;

Card.propTypes = {
  change: PropTypes.number.isRequired,
  companyName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  changesPercentage: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};
