import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/elements/Button';
import Typography from '../../components/elements/Typography';
import MainBase from '../../components/layouts/MainBase';
import styles from './styles.scoped.css';
import texts from './texts';

export default function Error404() {
  const TEXTS = texts['EN'];
  return (
    <MainBase back>
      <section className={styles.wrapper}>
        <img src={'./assets/notfound.png'}/>
        <Typography tag="h3" variant="headline-medium" weight="semibold">{TEXTS.TITLE}</Typography>
        <Typography tag="h4" variant="button" weight="reguler">We cannot find your request page</Typography>
        <Link to="/">
          <Button variant="primary">
            {TEXTS.BUTTON}
          </Button>
        </Link>
      </section>
    </MainBase>
  );
}
