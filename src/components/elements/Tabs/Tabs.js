import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Tabs(props) {
  const { className, value, activeTab, setActiveTab } = props;
  const customClass = [styles.root, className].filter(Boolean).join(' ');
  return (
    <nav className={customClass}>
      {value.map((val, idx) => (
        <a
          className={activeTab === idx ? styles.active : ''}
          key={idx}
          onClick={() => setActiveTab(idx)}>
          {val}
        </a>
      ))}
    </nav>
  );
}

Tabs.defaultProps = {
  activeTab: 0,
  className: '',
  setActiveTab: () => {},
  value: [''],
};

Tabs.propTypes = {
  activeTab: PropTypes.number,
  className: PropTypes.string,
  setActiveTab: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.string),
};
