import React from 'react';
import styles from './SeeWaiter.scss';
import {Link } from 'react-router-dom';

const SeeWaiter=()=>(
  <div className={styles.component}>
    <h3>SeeWaiter viws</h3>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/waiter/ordering/new`}> New Order</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/ordering/edit`}>Edit</Link>
      <Link to={` ${process.env.PUBLIC_URL}/waiter/ordering/close`}>Close</Link>
    </div>
  </div>
);
export default SeeWaiter;
