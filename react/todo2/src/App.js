// import the state hook from react
import { useCallback, useState } from 'react';
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
    let this_t = state.todos[t_index]
    this_t.isComplete = !this_t.isComplete
    setState({...state})
  }

  // CREATE 
  const onAddTodo = event => {
    event.preventDefault()
    if(!state.newTodo) return false;
    let newState = {
      // capture existing state
      ...state,
      // overwrite the todos property in state
      todos: [
        // capture existing todos in the state
        ...state.todos,
        // add the new todo
        {
          id: Date.now(),
          description: state.newTodo,
          isComplete: false
        }
      ],
      // empty the newTodo
      newTodo: ""
    }
    // swap old state with new state
    setState(newState)
  }
  // , [state, setState])

  const onChange = useCallback(event=>{
    let newState = {
      ...state,
      // add newTodo to state
      newTodo: event.target.value
    }
    setState(newState)
    // useCallback's 2nd argument is an array of objects the callback uses
  }, [state, setState])

  // DELETE
  const removeTodo = useCallback(event=>{
    // don't pass event up to parent elements
    event.stopPropagation();
    let newState = {
      ...state,
      // remove only the target todo being deleted
      todos: [state.todos.filter(t => t.id !== event.target.id)]
    }
    setState(newState)
  }, [state, setState])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Todomatic</h1>     
        <form onSubmit={onAddTodo}>
          <input 
            type="text"
            placeholder="new todo" 
            onChange={onChange}
          />
        </form>
        
      <ol className="container">
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
              <button className="right" onClick={removeTodo} id={t.id}>
                Delete
                </button>
            </li>
          ))
        }
      </ol>
      </header>
    </div>
  );
}

export default App;
