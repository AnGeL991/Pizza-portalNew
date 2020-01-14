import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.scss';


const PageNav=()=>(
  <nav className={styles.component}>
    <NavLink
      className={styles.NavLink}
      exact
      to={`${process.env.PUBLIC_URL}/`}
      activeClassName="active"
    >Home</NavLink>
    <NavLink
      className={styles.NavLink}
      exact
      to={`${process.env.PUBLIC_URL}/Dashboard`}
      activeClassName="active"
    >Dashboard</NavLink>
    <NavLink
      className={styles.NavLink}
      to={`${process.env.PUBLIC_URL}/login`}
      activeClassName="active"
    >Login</NavLink>
    <NavLink
      className={styles.NavLink}
      to={`${process.env.PUBLIC_URL}/FreeTables`}
      activeClassName="active"
    >FreeTables</NavLink>
    <NavLink
      className={styles.NavLink}
      to={`${process.env.PUBLIC_URL}/SeeWaiter`}
      activeClassName="active"
    >SeeWaiter</NavLink>
    <NavLink
      className={styles.NavLink}
      to={`${process.env.PUBLIC_URL}/Kitchen`}
      activeClassName="active"
    >Kitchen</NavLink>
  </nav>
);
export default PageNav;
