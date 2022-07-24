import React from 'react';
import PropTypes from 'prop-types';
import { TodoIcon } from './';

const CompleteIcon = ({ completed, onComplete }) => {
  return (
    <TodoIcon
      type="check"
      color={completed ? '4CAF50' : 'gray'}
      onClick={onComplete}
    />
  );
};

CompleteIcon.propTypes = {
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func,
};

export { CompleteIcon };
