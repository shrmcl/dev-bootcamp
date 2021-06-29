// import the state hook from react
import { useState } from 'react';
import './App.css';

export function App() {

  const initialState = {
    todos: [
      {
        id: 354,
        description: "call mom",
        isComplete: false
      }, {
        id: 570,
        description: "pickup groceries",
        isComplete: true
      }
    ]
  }
  // destructure state and setState from the array provided by useState hook / function
  // state is a copy of the state
  // first property is a copy of the state; second property is a method to change the orig.
  const [state, setState] = useState(initialState);

  // UPDATE todo to toggle completion status
  const onClickMarkTodoComplete = id => {
    let t_index = state.todos.findIndex(t => t.id === id)
    let this_t = state.todos[t_index];
    this_t.isComplete = !this_t.isComplete;
    setState({...state})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todomatic</h1>     
      <ol>
        {
          state.todos.map(t => (
            <li
              key={t.id}
              // change text CSS class if task is completed
              className={t.isComplete ? "completed" : "not"}
              onClick={
                () => {
                  onClickMarkTodoComplete(t.id)
                }
              }
            >
              {t.description}
            </li>
          ))
        }
      </ol>
      </header>
    </div>
  );
}

export default App;
