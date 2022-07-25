import React from 'react';
import Proptypes from 'prop-types';

const TodoMessage = ({ message }) => {
  return <p>{message}</p>;
};

TodoMessage.propTypes = {
  message: Proptypes.string,
};

export { TodoMessage };
