import React from 'react';
import styles from './styles.scoped.css';

export default function LazyFallback() {
  const src = `./assets/icon144.png`;

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.spinner} />
        <img src={src} />
      </div>
    </div>
  );
}
