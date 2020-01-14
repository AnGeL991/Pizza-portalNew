import React from 'react';
import styles from './FreeTables.scss';
import {Link } from 'react-router-dom';

const FreeTable =()=>(
  <div className={styles.component}>
    <h3>Tables viws</h3>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/FreeTable/event`}>
        Event
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/FreeTable/reservation`}>
      reservation
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/FreeTable/edit`}>
      edit
      </Link>
    </div>
  </div>
);
export default FreeTable;
