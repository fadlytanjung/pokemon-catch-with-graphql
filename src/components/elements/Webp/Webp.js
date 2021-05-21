import React from 'react';
import PropTypes from 'prop-types';

export default function Webp(props) {
  const { alt, className, name, style } = props;

  return (
    <picture className={className} style={style}>
      <source srcSet={`/assets/${name}.webp`} type="image/webp" />
      <source srcSet={`/assets/${name}.png`} type="image/png" />
      <img alt={alt} src={`/assets/${name}.png`} />
    </picture>
  );
}

Webp.defaultProps = {
  alt: '',
  className: '',
  name: '',
  style: {},
};

Webp.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
};
