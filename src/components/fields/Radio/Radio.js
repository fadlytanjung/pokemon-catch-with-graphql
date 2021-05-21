import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Radio(props) {
  const { data, input } = props;
  const labelChecked = [styles.root, styles['label-checked']].filter(Boolean).join(' ');

  return (
    <label className={data.value === input.value ? labelChecked : styles.root}>
      {data.text}
      <input {...input} type="radio" value={data.value} />
    </label>
  );
}

Radio.defaultProps = {
  className: '',
  data: {},
  input: {},
};

Radio.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  }),
  input: PropTypes.object,
};
