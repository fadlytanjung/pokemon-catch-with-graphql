import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '../Typography';
import styles from './styles.scoped.css';

export default function Button(props) {
  const { children, className, disabled, icon: Icon, onClick, to, type, variant, width } = props;
  const customClass = [styles['button'], styles[variant], className].filter(Boolean).join(' ');

  return to ?
    (<Link className={customClass} disabled={disabled} to={to}><Typography>{children}</Typography></Link>) :
    (<button className={customClass} disabled={disabled}
      onClick={onClick} style={{ width: width }} type={type} >
      {typeof Icon === 'function' ? <Icon /> : Icon}
      <Typography variant="button" weight="semibold">{children}</Typography>
    </button>);
}

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  height: 48,
  icon: undefined,
  onClick: null,
  to: '',
  type: 'button',
  variant: 'primary',
  width: 168,
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.node, PropTypes.any]),
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
