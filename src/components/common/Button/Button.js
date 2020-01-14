import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = props => (
  <h2 className={styles.component}>{props.title}</h2>
);

Button.propTypes={
  title: PropTypes.any,
};
export default Button;
