import React from 'react';
import PropTypes from 'prop-types';

const TodoHeader = ({ children }) => {
  return <header>{children}</header>;
};

TodoHeader.propTypes = {
  children: PropTypes.any,
};

export { TodoHeader };
