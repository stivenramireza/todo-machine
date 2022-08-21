import React from 'react';
import './ChangeAlert.css';

import PropTypes from 'prop-types';

import { useStorageListener } from './useStorageListener';

const ChangeAlert = ({ synchronize }) => {
  const { show, toggleShow } = useStorageListener(synchronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>It seems you change your TODOs in another tab or browser.</p>
          <p>Do you want to synchronize your TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

ChangeAlert.propTypes = {
  synchronize: PropTypes.func,
};

export { ChangeAlert };
