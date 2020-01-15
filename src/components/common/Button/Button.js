import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = props => (
  <button className={styles.component}>
    <span className={styles.title}>title</span>
  </button>
);

Button.propTypes={
  title: PropTypes.any,
};
export default Button;
