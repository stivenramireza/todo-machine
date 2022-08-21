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
import { TodoMessage } from '../TodoMessage';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

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
    synchronizeTodos,
  } = useTodos();

  return (
    <Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter total={total} completed={completed} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        totalTodos={total}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() =>
          Array.from({ length: 4 }).map((_, index) => (
            <TodoLoading key={index} />
          ))
        }
        onEmptyTodos={() => <TodoMessage message="Create your first TODO" />}
        onEmptySearchResults={(searchText) => (
          <TodoMessage message={`There are not results for ${searchText}`} />
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlertWithStorageListener synchronize={synchronizeTodos} />
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
