import React from 'react';
import PropTypes from 'prop-types';
import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Enter a word"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

TodoSearch.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export { TodoSearch };
