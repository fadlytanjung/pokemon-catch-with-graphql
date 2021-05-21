import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scoped.css';

export default function Card(props) {
  const { children, className, disabled, onClick, style, to, variant } = props;
  const customClass = [styles[variant], className].filter(Boolean).join(' ');

  if (to && /^https?:\/\//.test(to)) {
    return (<a className={customClass} disabled={disabled} href={to} style={style}>{children}</a>);
  }

  if (to) {
    return (<Link className={customClass} disabled={disabled} onClick={onClick}
      style={style} to={to}>{children}</Link>);
  }

  if (onClick) {
    return (<button className={customClass} disabled={disabled}
      onClick={onClick} style={style}>{children}</button>);
  }

  return <div className={customClass} disabled={disabled} style={style}>{children}</div>;
}

Card.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  onClick: null,
  style: undefined,
  to: '',
  variant: 'bordered',
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  variant: PropTypes.oneOf(['bordered', 'hover']),
};
