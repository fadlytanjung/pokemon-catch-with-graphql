import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function CheckBox(props) {
  const { className, input, inputProps, meta } = props;
  const { dirty, error, touched } = meta;
  const classes = [
    styles.root,
    error &&  (dirty || touched) && styles.error,
    className,
  ].filter(Boolean).join(' ');

  return (
    <>
      <label className={styles.label}>
        <input {...inputProps} {...input} className={classes} type="checkbox"/>
        <span>{inputProps.label}</span>
      </label>
      {error &&  (dirty || touched) && <small className={styles.error}>{error}</small>}
    </>
  );
}

CheckBox.defaultProps = {
  className: '',
  input: {},
  inputProps: {},
  meta: {}
};

CheckBox.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  meta: PropTypes.object
};
