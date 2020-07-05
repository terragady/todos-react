import React from 'react';
import PropTypes from 'prop-types';
import ToDoCard from './ToDoCard';

const ToDoList = ({ tasks, onToggle, onRemove }) => {
  const todos = tasks.map(todo => (
    <ToDoCard
      text={todo.text}
      key={todo.id}
      id={todo.id}
      done={todo.done}
      onToggle={() => onToggle(todo.id)}
      onRemove={onRemove}
    />
  ));

  return (
    <ul className="todo__list">
      {todos}
    </ul>
  );
};

ToDoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ToDoList;
