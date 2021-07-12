import React, { Component } from 'react';
import './App.css';


const TodoItem = ({text}) => (
  <li>{text}</li>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: ''
    }
    // bind "this" to App instead of global (which constructor belongs to)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    const todos = [...this.state.todos, this.state.newTodo]
    // shortened 'todos: todos' to 'todos':
    this.setState({todos, newTodo: ''})
  }

  render() {
    const todoList = this.state.todos.map((todo, index) => (
      <TodoItem key={index} text={todo} />
    ))
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newTodo"
            placeholder="what needs to be done?"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button type="submit" className="save-button">SAVE</button>
        </form>
        <div className="todo-content">
          <ol>
              {todoList}
          </ol>
        </div>
      </div>
    )
  }
    
}

export default App;
