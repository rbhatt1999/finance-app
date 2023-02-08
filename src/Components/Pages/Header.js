import React from 'react';
import { Row } from 'react-bootstrap';
import { AiFillAudio } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import styles from './dashboard.module.css';

const Header = () => (
  <div className={styles.navbar}>
    <div className={styles.brand}>
      <h1>Stock Metrics</h1>
    </div>
    <Row className={styles.settings}>
      <div className={styles.audio}>
        <AiFillAudio size={25} />
      </div>
      <div>
        <IoMdSettings size={25} />
      </div>
    </Row>
  </div>
);
export default Header;
