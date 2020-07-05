import React from 'react';

const ToDoCard = ({ text, done, id, onToggle, onRemove }) => {
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
      key={id}
    >
      <p className="todo__text" key={`p${id}`}>{text}</p>
      <button onClick={removeHandler} className="todo__remove-btn" type="button">
        remove
      </button>
    </li>
  );
};

export default ToDoCard;
