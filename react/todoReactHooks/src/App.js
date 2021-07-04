// useState is a hook (a function that is programmed to "hook" into React)
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  // initial state is created so we have something to display

  // In the final version, this app would receive data from the backend API
  // and load it into the state.

  // it is a POJO (plain old javascript object)
  const initialState = {
    todos: [],
    newTodo: ""
  }

  // useState returns an array whose first element
  // is a true copy of the state object.

  // the second element in the array returned is a function
  // that is the sole updater of the state.

  // any number of such state objects are allowed.

  const [state, setState] = useState(initialState) 
  // const[counter,setCounter] = useState(1);

  // api url 
  let url = 'http://localhost:3001/todos';

  // READ 
  // call the api
  // useEffect 
  useEffect(() => {
    fetch(url, {method: 'GET'})
    // parse response from api into json
    .then(res => res.json())
    .then(data => {
      // s represents previous state
      setState(s => {
        return {
          // copy previous state
          ...s,
          // override todos from previous state with new data
          todos: data,
          newTodo: ""
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }, [url])

  // UPDATE - toggle completion status
  const onclickMarkTodoComplete = id => {
    // console.log("id: ", id)
    fetch(`${url}/${id}`, {method: 'PUT'})
      .then(() => {
        setState(s => {
          let this_t = s.todos.find(t => t.id === id)
          this_t.isComplete = !this_t.isComplete;
          return s;
        })
      })
    }

  // CREATE
  const onAddTodo = event => {
    // prevent form from refreshing page upon submit
    event.preventDefault();
    // if no new todo, exit the function / return nothing
    if (!state.newTodo) return false;

  fetch(url, {
    method: 'POST',
    body: `description=${state.newTodo}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    // (Cross-Origin Resource Sharing)
    mode: 'cors'  // client origin: http://localhost:3000
                  // server origin: https://accsoftwarebootcamp-todos.herokuapp.com/todos
  })
  .then(res => res.json())
  .then(data => {
    setState(s => {
      return {
        ...s,
        todos: [...s.todos, data],
        newTodo: ""
      }
    })
  })
  .catch(err => {console.log(err)})
  }

  // controlled component
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
                className={t.isComplete ? "completed" : "not"}
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