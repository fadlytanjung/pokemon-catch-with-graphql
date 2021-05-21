import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowLeftJs from '../../icons/ArrowLeftJs';
import BurgerJs from '../../icons/BurgerJs';
import CrossJs from '../../icons/CrossJs';
import HomeJs from '../../icons/HomeJs';
import Typography from '../../elements/Typography';
import styles from './styles.scoped.css';
import SettingsJs from '../../icons/SettingsJs';
import ListJs from '../../icons/ListJs';

export default function Header(props) {
  const { back, to, label } = props;
  const [open, setOpen] = useState(false);
  const onCancel = () => {
    setOpen(false);
  };
  const openMenu = () => {
    setOpen(true);
  };
  const renderNav = () => {
    return (
      <nav>
        {<span onClick={onCancel}><CrossJs /></span>}
        {<Typography tag="p" variant="headline-small" weight="medium">Menu</Typography>}
      </nav>
    );
  };
  const renderSetting = () =>{
    return(
      <Link onClick={onCancel} to="/notfound" >
        <span className={styles.settingIcon}>
          <SettingsJs />
        </span>
      </Link>
    );
  };
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link to={to ? to : '/'}>
            {back ? <ArrowLeftJs /> : <img src={'./assets/tokomon.png'} />}
          </Link>
          {label !== '' && <Typography tag="p" variant="headline-small" weight="medium">{label}</Typography>}
          <div className={styles.rightIcon} onClick={openMenu}>
            <BurgerJs />
          </div>
        </nav>
      </header>
      <ProfileWrapper open={open}>
        <section className={[styles.profile, open ? styles.open : styles.close].join(' ')}>
          <header className={styles.headerMenus}>
            {renderNav()}
          </header>
          <div className={styles.profileAva}>
            <div className={styles.imgAva}>
              <img src={'./assets/ava.jpg'} />
            </div>
            <div className={styles.wrapName}>
              <Typography tag="h3" variant="button" weight="semibold">Muhammad Fadly Tanjung</Typography>
              <Typography tag="p" variant="caption">fadlysyah96@gmail.com</Typography>
            </div>
            {renderSetting()}
          </div>
          <div className={styles.borderBottom} />
          <Link onClick={onCancel} to="/">
            <div className={styles.backHome}>
              <HomeJs /> <Typography tag="p" variant="caption" weight="medium">Back to Home</Typography>
            </div>
          </Link>
          <div className={styles.borderBottom} />
          <div className={[styles.backHome, styles.pb0].join(' ')}>
            <Typography tag="p" variant="button" weight="semibold">My Pokemon</Typography>
          </div>
          <Link onClick={onCancel} to="/mypokemon">
            <div className={styles.backHome}>
              <ListJs /> <Typography tag="p" variant="caption" weight="medium">List My Pokemon</Typography>
            </div>
          </Link>
        </section>
      </ProfileWrapper>
    </>
  );
}

export function ProfileWrapper(props) {
  const { children, open } = props;
  return (
    <>
      {/* <div className={[styles.profileClose, open && styles.overlayClose].join(' ')}></div> */}
      <section className={[styles.profileOpen, open && styles.overlay].join(' ')}>
        {children}
      </section>
    </>
  );
}
ProfileWrapper.defaultProps = {
  children: undefined,
  open: false,
};
ProfileWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.any]),
  open: PropTypes.bool,
};
Header.defaultProps = {
  back: undefined,
  label: '',
  to: '/',
};
Header.propTypes = {
  back: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.any]),
  label: PropTypes.string,
  to: PropTypes.string,
};
