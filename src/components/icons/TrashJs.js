import React from 'react';
import PropTypes from 'prop-types';

export default function TrashJs(props) {
  const { fill } = props;
  return (
    <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <path d="M15 5.833v10c0 .917-.75 1.667-1.667 1.667H6.667C5.75 17.5 5
        16.75 5 15.833v-10h10zM11.667 2.5c.458 0 .833.375.833.833H15c.458 0
        .833.375.833.834V5H4.167v-.833c0-.459.375-.834.833-.834h2.5c0-.458.375-.833.833-.833z"
        fill={fill ? fill : '#6C727C'} fillRule="nonzero" />
      </g>
    </svg>
  );
}

TrashJs.defaultProps = {
  fill: undefined,
};
TrashJs.propTypes = {
  fill: PropTypes.string,
};
