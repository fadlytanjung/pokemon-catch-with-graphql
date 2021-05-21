import React from 'react';
import PropTypes from 'prop-types';

export default function ArrowLeftJs(props) {
  const { fill } = props;
  return (
    <svg fill={fill ? fill : '#525867'} height="24" viewBox="0 0 24 24" width="24">
      <path d="M20 11H5.39l5.3-5.29a1.004 1.004 0 00-1.42-1.42l-7.1 7.1a1 1 0 000 1.42l7.1 7.1a1 1
      0 00.71.29.998.998 0 00.71-1.71L5.19 13H20a1 1 0 100-2z"/>
    </svg>
  );
}

ArrowLeftJs.defaultProps = {
  fill: undefined,
};
ArrowLeftJs.propTypes = {
  fill: PropTypes.string,
};
