import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Timer(props) {
  const { className, time } = props;
  const customClass = [styles.root, className].filter(Boolean).join(' ');
  return (
    <span className={customClass}>
      <img alt="" src="/assets/ic_timer.svg" />{time[1]}:{time[2]}
    </span>
  );
}

Timer.defaultProps = {
  className: '',
  time: ['', '', ''],
};

Timer.propTypes = {
  className: PropTypes.string,
  time: PropTypes.arrayOf(PropTypes.string),
};
