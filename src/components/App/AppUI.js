import React, { Fragment, useContext } from 'react';
import { TodoContext } from '../TodoContext';
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

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos: total,
    completedTodos: completed,
    searchValue,
    setSearchValue,
  } = useContext(TodoContext);

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
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </Fragment>
  );
};

export { AppUI };
