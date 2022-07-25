import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './TodoForm.css';

const TodoForm = ({ addTodo, setOpenModal }) => {
  const [newTodoValue, setNewTodoValue] = useState('');

  const onChange = event => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = event => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Enter the new TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cut the onion for lunch"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Add
        </button>
      </div>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func,
  setOpenModal: PropTypes.func,
};

export { TodoForm };
