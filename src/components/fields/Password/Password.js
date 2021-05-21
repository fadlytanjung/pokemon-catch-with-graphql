import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Password(props) {
  const { className, info, input, inputProps, message, meta } = props;
  const [focus, setFocus] = useState(false);
  const [show, setShow] = useState(false);
  const { dirty, error, touched } = meta;
  const isRed = error &&  (dirty || touched);
  const classes = [
    styles.root,
    isRed && styles.error,
    focus && styles.focus,
    className,
  ].filter(Boolean).join(' ');
  const infoClass = isRed ? styles.error : styles.info;
  const validation = (typeof error === 'string') && error;

  const events = {
    onBlur: e => {
      setFocus(false);
      input.onBlur(e);
    },
    onFocus: e => {
      setFocus(true);
      input.onFocus(e);
    },
  };

  return (
    <>
      <label className={styles.label}>{inputProps.label}</label>
      <div className={classes}>
        <input {...input} {...inputProps} {...events} type={show ? 'text' : 'password'} />
        <button onClick={() => setShow(!show)} type="button">
          <img alt="" src={`/assets/icon_pw_${show ? 'show' : 'hide'}.svg`} />
        </button>
      </div>
      {info ?
        <small className={infoClass}>{message}</small>:
        isRed && <small className={styles.error}>{validation || message}</small>
      }
    </>
  );
}

Password.defaultProps = {
  className: '',
  info: false,
  input: {},
  inputProps: {},
  message: '',
  meta: {},
};

Password.propTypes = {
  className: PropTypes.string,
  info: PropTypes.bool,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  message: PropTypes.string,
  meta: PropTypes.object,
};
