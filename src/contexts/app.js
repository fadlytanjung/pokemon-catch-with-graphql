import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const AppContext = createContext({});

export default function AppContextProvider({ children }) {
  const [modal, setModal] = useState(null);
  const [onCloseModal, setOnCloseModal] = useState(() => () => { });
  const [overlay, setOverlay] = useState(false);

  const value = {
    setModal,
    setOnCloseModal,
    setOverlay,
  };


  return (
    <AppContext.Provider value={value}>
      {children}
      <Modal modal={modal} onClose={onCloseModal} setModal={setModal} />
      <div className={['overlay', overlay && 'open'].filter(Boolean).join(' ')} />
    </AppContext.Provider>
  );
}

AppContextProvider.defaultProps = {
  children: null,
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};


export function Modal({ modal, onClose, setModal }) {
  const { pathname } = useLocation();

  const closeModal = e => {
    (e.target === e.currentTarget) && onClose();
  };

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    modal ? body.classList.add('modal-open') : body.classList.remove('modal-open');
  }, [!!modal]);

  useEffect(() => {
    document.getElementsByTagName('html')[0].scrollTo(0, 0);
    setModal(null);
  }, [pathname]);

  return <div className="modal" onClick={closeModal}>{modal}</div>;
}

Modal.defaultProps = {
  modal: null,
};

Modal.propTypes = {
  modal: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};
