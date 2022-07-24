import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById('modal')
  );
};

Modal.propTypes = {
  children: PropTypes.any,
};

export { Modal };
