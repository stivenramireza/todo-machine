import React from 'react';
import PropTypes from 'prop-types';
import './CreateTodoButton.css';

const CreateTodoButton = ({ setOpenModal }) => {
  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};

CreateTodoButton.propTypes = {
  setOpenModal: PropTypes.func,
};

export { CreateTodoButton };
