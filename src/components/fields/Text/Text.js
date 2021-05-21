import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Text(props) {
  const { className, input, inputProps, message, meta } = props;
  const { dirty, error, touched } = meta;
  const classes = [
    styles.root,
    error &&  (dirty || touched) && styles.error,
    className,
  ].filter(Boolean).join(' ');
  const validation = (typeof error === 'string') && error;

  return (
    <>
      {(inputProps.type !== 'hidden') && <label className={styles.label}>{inputProps.label}</label>}
      <input className={classes} {...input} {...inputProps} />
      {error &&  (dirty || touched) && <small className={styles.error}>{validation || message}</small>}
    </>
  );
}

Text.defaultProps = {
  className: '',
  input: {},
  inputProps: {},
  message: '',
  meta: {},
};

Text.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  message: PropTypes.string,
  meta: PropTypes.object,
};
