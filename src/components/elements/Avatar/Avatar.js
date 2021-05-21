import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Avatar(props) {
  const { className, src } = props;
  const customClass = [styles.root, className].filter(Boolean).join(' ');

  return <figure className={customClass} style={{ backgroundImage: `url('${src}')` }} />;
}

Avatar.defaultProps = {
  className: '',
  src: '',
};

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};
