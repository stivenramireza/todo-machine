import React from 'react';
import PropTypes from 'prop-types';
import { TodoIcon } from './';

const DeleteIcon = ({ onDelete }) => {
  return <TodoIcon type="delete" onClick={onDelete} />;
};

DeleteIcon.propTypes = {
  onDelete: PropTypes.func,
};

export { DeleteIcon };
