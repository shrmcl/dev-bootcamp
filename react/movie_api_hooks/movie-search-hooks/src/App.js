// we import the hook useState for functional components
// functional components are otherwise stateless
import React, {useState} from 'react';
import './App.css';

function App() {
  // useState returns 2 values:
    // 1. the current state
    // 2. the function to update the state
  // here we assign inital state (rows) the value of "" (empty string)
  const [rows, setRows] = useState("")

  const performSearch = (searchTerm) => {
    const url = `https://api.themoviedb.org/3`
    const movieRoute = `/search/movie?api_key=4655033f7ad9bef3342338a2c91e15ae&query=${searchTerm}`
    const endpoint = url + movieRoute;
    fetch(endpoint)
    .then(response => response.json())
    .then(searchResults => {
      console.log(searchResults.results);
      let movieRows = [];
      searchResults.results.forEach((movie) => {
        const movieRow = (
          <div key={movie.id}>
            <img alt="poster" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}></img>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        );
        movieRows.push(movieRow);
      });
      // set state via useState hook's second arg (setRows function)
      setRows(movieRows)
    })
    .catch()
  }

  const searchChangeHandler = (event) => {
    if(!event.target.value) return false;
    performSearch(event.target.value)
  }

  return (
    <div>
    <h1>Movie Search With Hooks</h1>
    <input 
      id="inputField" 
      type="text" 
      placeholder="enter a movie"
      // function components have no "this"; used in class components only
      onChange={searchChangeHandler}
      // onChange = {this.searchChangeHandler}
    />
     {rows}
  </div>
  );
}

export default App;
