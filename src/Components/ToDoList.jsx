import React from 'react';
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

export default ToDoList;
