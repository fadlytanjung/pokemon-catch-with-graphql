import React from 'react';
import PropTypes from 'prop-types';

export default function BurgerJs(props) {
  const { fill } = props;
  return (
    <svg fill={fill ? fill : '#525867'} height="24" viewBox="0 0 24 24" width="24" >
      <path clipRule="evenodd" d="M19.1 7H4.9a.9.9 0 01-.9-.9v-.2a.9.9 0 01.9-.9H19a.92.92 0 011 .9V6a.92.92
      0 01-.9 1zM19.1 13H4.9a.9.9 0 01-.9-.9V12a.92.92 0 01.9-1H19a.9.9 0 01.9.9v.1a.81.81 0 01-.8 1zM19.1 19H4.9a.9.9 0 01-.9-.9V18a.92.92
      0 01.9-1H19a.9.9 0 01.9.9v.1a.81.81 0 01-.8 1z" fillRule="evenodd" />
    </svg>
  );
}

BurgerJs.defaultProps = {
  fill: undefined,
};
BurgerJs.propTypes = {
  fill: PropTypes.string,
};
