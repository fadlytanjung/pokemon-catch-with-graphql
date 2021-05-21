import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Image(props) {
  const { className, input, src } = props;
  const [ preview, setPreview ] = useState('');
  const classes = [
    styles.root,
    className,
  ].filter(Boolean).join(' ');

  const onChange = e => {
    const { files } = e.target;
    const reader = new FileReader();
    reader.onload = e => {
      setPreview(e.target.result);
      input.onChange(files[0]);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <label className={classes} style={{ backgroundImage: `url('${preview ? preview : src}')` }}>
      <input accept="image/png, image/jpeg, image/jpg" onChange={onChange} style={{ display: 'none' }} type="file" />
      <input {...input} type="hidden" />
    </label>
  );
}

Image.defaultProps = {
  className: '',
  input: {},
  src: '',
};

Image.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  src: PropTypes.string,
};
