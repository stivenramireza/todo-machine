import React from 'react';
import PropTypes from 'prop-types';
import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Enter a word"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
};

TodoSearch.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  loading: PropTypes.bool,
};

export { TodoSearch };
