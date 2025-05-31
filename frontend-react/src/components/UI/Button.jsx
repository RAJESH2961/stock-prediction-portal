// import React from 'react';
import styles from './Button.module.css'; // Import CSS Module properly
import { Link } from 'react-router-dom';
const Button = ({ text, href }) => {
  return (
    <Link to={href} className={styles.fancyButton}>
      <span className={styles.text}>{text}</span>
      <span className={styles.sparkle} />
    </Link>
  );
};

export default Button;
