import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

export default function MainBase(props) {
  const { back, children, label, to } = props;
  return (
    <>
      <Header back={back} label={label} to={to}/>
      {children}
    </>
  );
}

MainBase.defaultProps = {
  back: undefined,
  children: undefined,
  label: '',
  to: '/',
};
MainBase.propTypes = {
  back: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.any]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.any]),
  label: PropTypes.string,
  to: PropTypes.string,
};
