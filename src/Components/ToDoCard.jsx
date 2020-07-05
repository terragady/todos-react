import React from 'react';
import PropTypes from 'prop-types';

const ToDoCard = ({
  text, done, id, onToggle, onRemove,
}) => {
  const removeHandler = e => {
    e.stopPropagation();
    onRemove(id);
  };

  return (
    <li
      onClick={onToggle}
      onKeyUp={onToggle}
      role="presentation"
      className={`todo__item ${done ? 'done' : ''}`}
      id={id}
    >
      <p className="todo__text">{text}</p>
      <button onClick={removeHandler} className="todo__remove-btn" type="button">
        remove
      </button>
    </li>
  );
};

ToDoCard.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ToDoCard;
