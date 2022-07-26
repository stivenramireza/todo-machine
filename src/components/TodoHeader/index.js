import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

const TodoHeader = ({ children, loading }) => {
  return (
    <header>
      {Children.toArray(children).map((child) =>
        cloneElement(child, { loading })
      )}
    </header>
  );
};

TodoHeader.propTypes = {
  children: PropTypes.array,
  loading: PropTypes.bool,
};

export { TodoHeader };
