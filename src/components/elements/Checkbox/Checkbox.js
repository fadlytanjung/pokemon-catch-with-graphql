import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Checkbox(props) {
  const { className, onChange, checked, disabled } = props;
  const customClass = [styles.root, className].filter(Boolean).join(' ');
  return <input checked={checked} className={customClass} disabled={disabled} onChange={onChange} type="checkbox" />;
}

Checkbox.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  onChange: () => {},
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
