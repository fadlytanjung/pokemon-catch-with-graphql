import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Typography from '../Typography';
import Modal from '../Modal';
import styles from './styles.scoped.css';

export default function ModalConfirmation(props) {
  const { buttonCancel, buttonConfirm, children, onCancel, open, onConfirm, title, subtitle } = props;
  return (
    <Modal className={styles.root} onCancel={onCancel} open={open}>
      <Typography tag="h1" variant="headline-medium" weight="bold">{title}</Typography>
      <Typography tag="p" variant="caption">{subtitle}</Typography>
      {children}
      <footer>
        {onConfirm &&
          <Button onClick={onConfirm}>
            {onConfirm ? buttonConfirm : buttonCancel}
          </Button>
        }
        <Button onClick={onCancel} variant="outline">{buttonCancel}</Button>
      </footer>
    </Modal>
  );
}

ModalConfirmation.defaultProps = {
  buttonCancel: 'Close',
  buttonConfirm: 'Confirm',
  children: undefined,
  onCancel: undefined,
  onConfirm: undefined,
  open: false,
  reverseBtn: false,
  subtitle: '',
  title: '',
};

ModalConfirmation.propTypes = {
  buttonCancel: PropTypes.string,
  buttonConfirm: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object, PropTypes.any]),
  onCancel: PropTypes.func,
  onConfirm: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  open: PropTypes.bool,
  reverseBtn: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};
