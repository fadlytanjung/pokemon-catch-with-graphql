import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../contexts';
import styles from './styles.scoped.css';

export default function Modal(props) {
  const { setModal, setOnCloseModal } = useContext(AppContext);
  const { open, className, children, onClose } = props;

  useEffect(() => {
    return () => setModal(null);
  }, []);

  useEffect(() => {
    setModal(open ? <Content children={children} className={className} /> : null);
    open && setOnCloseModal(() => onClose);
  }, [open]);

  useEffect(() => {
    open && setOnCloseModal(() => onClose);
  }, [onClose]);

  useEffect(() => {
    open && setModal(<Content children={children} className={className} />);
  }, [children, className]);

  return null;
}

Modal.defaultProps = {
  children: null,
  className: '',
  onClose: () => { },
  open: false,
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node,PropTypes.string,PropTypes.object, PropTypes.any]),
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export function Content({ className, children }) {
  const customClass = [styles.root, className].filter(Boolean).join(' ');
  return (
    <section className={customClass}>
      {children}
    </section>
  );
}

Content.defaultProps = {
  children: null,
  className: '',
};

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
