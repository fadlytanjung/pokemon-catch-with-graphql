import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Autocomplete(props) {
  const { className, input, inputProps, meta, onSearch, options } = props;
  const { error } = meta;
  const isInitialMount = useRef(true);
  const [search, setSearch] = useState('');
  const [timer, setTimer] = useState(0);
  const [value, setValue] = useState('');
  const [display, setDisplay] = useState('none');
  const isError = !!error && !inputProps.disabled;
  const classes = [
    styles.root,
    isError && styles.error,
    className,
  ].filter(Boolean).join(' ');

  const onClickItem = item => () => {
    setSearch(item.text);
    setValue(item.value);
    setDisplay('none');
  };

  const onBlur = () => {
    (!options.length) && setDisplay('none');
  };

  const onChange = e => {
    const targetValue = e.target.value;
    setSearch(targetValue);
    setValue('');
    setDisplay('block');
  };

  const onFocus = () => {
    setDisplay('block');
  };

  const inputEvents = { onBlur, onChange, onFocus };

  useEffect(() => {
    (!input.value) && setSearch('');
  }, [input.value]);

  useEffect(() => {
    input.onChange(value);
  }, [value]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      clearTimeout(timer);
      const timeout = setTimeout(() => {
        onSearch(search);
      }, 500);
      setTimer(timeout);
    }
  }, [search]);

  return (
    <>
      <label className={styles.label}>{inputProps.label}</label>
      <input type="hidden" {...input} />
      <input className={classes} value={search} {...inputEvents} {...inputProps} />
      <div className={styles.options}>
        <ul style={{ display }}>
          {options.map((item, key) => (
            <li key={key} onClick={onClickItem(item)}>
              <ItemText search={search} text={item.text} />
            </li>
          ))}
        </ul>
      </div>
      {isError && <small className={styles.error}>{error}</small>}
    </>
  );
}

Autocomplete.defaultProps = {
  className: '',
  input: { onChange: () => {} },
  inputProps: {},
  meta: {},
  onSearch: () => { },
  options: [],
};

Autocomplete.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  meta: PropTypes.object,
  onSearch: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  })),
};

export function ItemText(props) {
  const { search, text } = props;
  const match = text.match(new RegExp(search.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'i'));
  if (!match) {
    return text;
  }
  return (
    <>
      {text.substring(0, match.index)}
      {<span>{text.substring(match.index, match.index + search.length)}</span>}
      {text.substring(match.index + search.length)}
    </>
  );
}

ItemText.defaultProps = {
  search: '',
  text: '',
};

ItemText.propTypes = {
  search: PropTypes.string,
  text: PropTypes.string,
};
