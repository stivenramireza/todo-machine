import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

const TodoList = ({
  error,
  loading,
  totalTodos,
  searchedTodos,
  searchText,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  render,
  children,
}) => {
  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}

      {!loading && !totalTodos && onEmptyTodos()}

      {totalTodos > 0 &&
        !searchedTodos.length &&
        onEmptySearchResults(searchText)}

      {!loading && !error && searchedTodos.map(children || render)}

      <ul>{children}</ul>
    </section>
  );
};

TodoList.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  totalTodos: PropTypes.number,
  searchedTodos: PropTypes.array,
  searchText: PropTypes.string,
  onError: PropTypes.func,
  onLoading: PropTypes.func,
  onEmptyTodos: PropTypes.func,
  onEmptySearchResults: PropTypes.func,
  render: PropTypes.func,
  children: PropTypes.any,
};

export { TodoList };
