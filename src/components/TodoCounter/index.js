import React from 'react';
import PropTypes from 'prop-types';
import './TodoCounter.css';

const TodoCounter = ({ total, completed, loading }) => {
  return (
    <h2 className={`TodoCounter ${loading && 'TodoCounter--loading'}`}>
      You have completed {completed} of {total} TODOs
    </h2>
  );
};

TodoCounter.propTypes = {
  total: PropTypes.number,
  completed: PropTypes.number,
  loading: PropTypes.bool,
};

export { TodoCounter };
