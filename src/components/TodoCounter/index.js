import React from 'react';
import PropTypes from 'prop-types';
import './TodoCounter.css';

const TodoCounter = ({ total, completed }) => {
  return (
    <h2 className="TodoCounter">
      You have completed {completed} of {total} TODOs
    </h2>
  );
};

TodoCounter.propTypes = {
  total: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};

export { TodoCounter };
