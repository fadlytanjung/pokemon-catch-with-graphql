import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Select(props) {
  const { className, input, inputProps, meta, options } = props;
  const { dirty, error, touched } = meta;
  const classes = [
    styles.root,
    !!input.value || styles.empty,
    !!error && (dirty || touched) && styles.error,
    className,
  ].filter(Boolean).join(' ');

  return (
    <>
      <label className={styles.label}>{inputProps.label}</label>
      <select className={classes} {...input} {...inputProps}>
        <option disabled value="">{inputProps.placeholder}</option>
        {options.map((i, idx) => (
          <option key={idx} value={i.value}>{i.text}</option>
        ))}
      </select>
      {!!error && (dirty || touched) && <small className={styles.error}>{error}</small>}
    </>
  );
}

Select.defaultProps = {
  className: '',
  input: {},
  inputProps: {},
  meta: {},
  options: [],
};

Select.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  meta: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  })),
};
