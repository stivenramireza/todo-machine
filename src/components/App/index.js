import React, { Fragment } from 'react';
import { useTodos } from './useTodos';
import PropTypes from 'prop-types';

import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';

const App = () => {
  const {
    error,
    loading,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos: total,
    completedTodos: completed,
    searchValue,
    setSearchValue,
  } = useTodos();
  return (
    <Fragment>
      <TodoHeader>
        <TodoCounter total={total} completed={completed} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList>
        {error && <TodoError error={error} />}
        {loading &&
          Array.from({ length: 4 }).map((_, index) => (
            <TodoLoading key={index} />
          ))}
        {!loading && !searchedTodos.length && <TodoEmpty />}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </Fragment>
  );
};

App.defaultProps = {
  error: false,
  loading: false,
  openModal: false,
  totalTodos: 0,
};

App.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  searchedTodos: PropTypes.func,
  completeTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func,
  totalTodos: PropTypes.number.isRequired,
  completedTodos: PropTypes.func,
  searchValue: PropTypes.func,
  setSearchValue: PropTypes.func,
};

export default App;