// useState is a hook (a function that is programmed to "hook" into React)
import {useCallback, useState} from 'react';
import './App.css';

function App() {
  // initial state is created so we have something to display

  // In the final version, this app would receive data from the backend API
  // and load it into the state.

  // it is a POJO (plain old javascript object)
  const initialState = {
    todos: [
      {
        id: 302,
        description: "call mom",
        isComplete: false
      }, {
        id: 420,
        description: "Pickup groceries",
        isComplete: true
      }
    ],
    newTodo: ""
  }

  // useState returns an array whose first element
  // is a true copy of the state object.

  // the second element in the array returned is a function
  // that is the sole updater of the state.

  // any number of such state objects are allowed.

  const [state, setState] = useState(initialState) 
  // const[counter,setCounter] = useState(1);

  //Update todo - toggle completion status
  const onclickMarkTodoComplete = id =>{
    // does this function fire? console.log to check
    console.log(id)
    // create a copy of the state object using the "state" handle
    let newstate = {...state}
    // this_t is a reference to the specific todo that the user
    // wishes to toggle.  the reference points to the click'ed
    // todo object within the array within the state
    let this_t = newstate.todos.find(t => t.id === id)
    // flip the status
    this_t.isComplete = !this_t.isComplete;
    // now make a copy of the state and replace the state with
    // the new state.  The spread operator helps to create a new
    // copy of the state
    setState(newstate)
  }

  //CREATE
  const onAddTodo = useCallback(event => {
    event.preventDefault();
    if (!state.newTodo) return false;
    let newState = {
      ...state,         // capture the existing state
      todos: [          // overwrite the todos property in state
        ...state.todos, // capture existing todos
        {               // add the new todo
          id: Date.now(),
          description: state.newTodo,
          isComplete: false
        }
      ],
      newTodo: ""
    }
    setState(newState) // swap out the old state for the new state
  }, [state, setState])

  // CONTROLLED COMPONENT
  const onChange = event => {
    let newState = {
      ...state,
      newTodo: event.target.value
    }   // do we need a deep or shallow copy?
    setState(newState)
  }

  // DELETE
  const removeTodo = event => {
    event.stopPropagation();

    let newState = {
      ...state,
      todos: state.todos.filter(t => {
        return t.id !== parseInt(event.target.id)
      })
    }
    setState(newState)
  }

  // RENDER
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todomatic</h1>
        
        <form onSubmit={onAddTodo}>
          <input 
            type="text"
            placeholder="enter todo" 
            onChange={onChange}
            value={state.newTodo}
          />
        </form>

        <ol className="container">
          {/* loop over the todos array to create the li's */}
          { state.todos.map(t => (
              <li 
                key={t.id}
                className={t.isComplete ? "completed": "not"}
                // with onClick provide a function that will run,
                // instead of actually running the function
                onClick={
                  () => {
                    onclickMarkTodoComplete(t.id)
                  }
                }
              >
                {t.description}
                <button className="right" onClick={removeTodo} id={t.id}>
                  DELETE
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