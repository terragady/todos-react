import React from 'react';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { addTask } = this.props;
    const { todo } = this.state;
    event.preventDefault();
    if (todo === '') return;
    addTask(todo);
    this.setState({ todo: '' });
    document.querySelector('.todo__input').focus();
  }

  render() {
    const { todo } = this.state;
    return (
      <form className="todo__form" onSubmit={this.handleSubmit}>
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          type="text"
          className="todo__input"
          placeholder="Enter a new ToDo"
          value={todo}
          onChange={event => this.setState({ todo: event.target.value })}
        />
        <button className="todo__submit" type="submit">Add</button>
      </form>
    );
  }
}

export default ToDoForm;
