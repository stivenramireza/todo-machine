import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const TodoCounter = () => {
  const { totalTodos: total, completedTodos: completed } =
    useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      You have completed {completed} of {total} TODOs
    </h2>
  );
};

export { TodoCounter };
