import React, { Component } from 'react';
import { v1 as uuid1 } from 'uuid';
import ToDoList from './Components/ToDoList';
import ToDoForm from './Components/ToDoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.clearDone = this.clearDone.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  componentDidMount() {
    this.loadList();
  }

  componentDidUpdate() {
    this.saveList();
  }

  onRemove(id) {
    let { tasks } = this.state;
    tasks = tasks.filter(e => e.id !== id);
    this.setState({ tasks });
  }

  onToggle(id) {
    let { tasks } = this.state;
    tasks = tasks.map(e => {
      if (e.id === id) e.done = !e.done;
      return e;
    });
    this.setState({ tasks });
  }

  saveList() {
    const { tasks } = this.state;
    const stringified = JSON.stringify(tasks);
    window.localStorage.setItem('todo', stringified);
  }

  loadList() {
    const saved = window.localStorage.getItem('todo');
    if (saved) {
      this.setState({ tasks: JSON.parse(saved) });
    }
  }

  addTask(task) {
    const { tasks } = this.state;
    this.setState({ tasks: [...tasks, { text: task, done: false, id: uuid1() }] });
  }

  clearDone() {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter(e => !e.done) });
  }

  clearAll() {
    this.setState({ tasks: [] });
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <header className="header"><h1>ToDo App</h1></header>
        <main>
          <div className="todo">
            <ToDoForm addTask={this.addTask} />
            {tasks.length
              ? (
                <>
                  <ToDoList tasks={tasks} onToggle={this.onToggle} onRemove={this.onRemove} />
                  <div className="todo__buttons">
                    <button onClick={this.clearDone} className="todo__button" type="button">Clear Done</button>
                    <button onClick={this.clearAll} className="todo__button" type="button">Clear All</button>
                  </div>
                </>
              )
              : (
                <div className="todo__empty">
                  <h2>ToDo list is empty</h2>
                  <p>Add items in the form above</p>
                </div>
              )}
          </div>
        </main>
      </>
    );
  }
}

export default App;
