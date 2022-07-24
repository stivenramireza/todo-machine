import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

const TodoList = ({ children }) => {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
};

TodoList.propTypes = {
  children: PropTypes.any,
};

export { TodoList };
