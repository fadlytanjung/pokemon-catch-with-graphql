import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Spinner(props) {
  const { className, color, size } = props;
  const customClass = [styles.root, className].filter(Boolean).join(' ');
  const style = { height: size, width: size };
  const childStyle = { borderColor: `${color} transparent transparent transparent` };
  // animation from https://loading.io/css/
  return (
    <div className={customClass} style={style}>
      {[...Array.from({ length: 4 }).keys()].map(i => (
        <div key={i} style={childStyle} />
      ))}
    </div>
  );
}

Spinner.defaultProps = {
  className: '',
  color: '#ffffff',
  size: '0.9rem',
};

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};
