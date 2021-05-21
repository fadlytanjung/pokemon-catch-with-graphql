import React from 'react';
import PropTypes from 'prop-types';

export default function InfoJs(props){
  const { stroke } = props;
  return(
    <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093
        16.9875C17.7182 18.7147 15.9033 19.9782 13.8354 20.5896C11.7674
        21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 3.78465
        18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938
        1.02168 10.342C1.16356 8.19029 1.99721 6.14205 3.39828
        4.5028C4.79935 2.86354 6.69279 1.72111 8.796191.24587C10.8996
        0.770634 13.1003 0.988061 15.07 1.86572" stroke={stroke ? stroke : '#009CC8'}
      strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M21 3.00586L11 13.0159L8 10.0159" stroke={stroke ? stroke :  '#009CC8'}
        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

InfoJs.defaultProps = {
  stroke: undefined,
};
InfoJs.propTypes = {
  stroke: PropTypes.string,
};
