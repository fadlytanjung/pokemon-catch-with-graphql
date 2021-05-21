import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Switch(props) {
  const { className, inputProps, text } = props;
  const customClass = [styles.root, className].filter(Boolean).join(' ');
  return (
    <input
      {...inputProps}
      className={customClass}
      data-no={text[1]}
      data-yes={text[0]}
      type="checkbox"
    />
  );
}

Switch.defaultProps = {
  className: '',
  inputProps: {},
  text: [],
};

Switch.propTypes = {
  className: PropTypes.string,
  inputProps: PropTypes.object,
  text: PropTypes.arrayOf(PropTypes.string),
};
