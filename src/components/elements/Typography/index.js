import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Typography(props) {
  const { 'class-name': classNameProps, tag: Tag, variant, weight } = props;
  const className = [
    classNameProps,
    (variant.split('-').pop() !== 'bold') ? styles[`typography-${variant}`]
      : variant.substring(0, variant.lastIndexOf('-')),
    styles['typography'],
    styles[`${weight}`]
  ].join(' ');

  return (
    (Tag === 'body' || Tag === 'caption')
      ? <label className={className} {...props} />
      : <Tag className={className} {...props} />
  );
}

Typography.defaultProps = {
  'class-name': undefined,
  tag: 'p',
  variant: 'body',
  weight: 'reguler',
};

Typography.propTypes = {
  'class-name': PropTypes.string,
  tag: PropTypes.string,
  variant: PropTypes.string,
  weight: PropTypes.string,
};
