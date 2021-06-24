import React, { Component } from 'react';
import './App.css';
import { movies } from './fakeData';

class App extends Component {
  constructor(props) {
    super(props);

    // let movieRows = [];
    // movies.forEach((movie) => {
    //   const movieRow = (
    //     <div key={movie.id}>
    //       <img alt="poster" src={movie.poster_src}></img>
    //       {movie.title}
    //     </div>
    //   );
    //   movieRows.push(movieRow);
    // });

    // state set to an object
    this.state = {
      // default data is empty array
      rows: []
    }
  }

  performSearch(searchTerm) {
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
      // setState accepts an object
      this.setState({
        rows: movieRows
      })
    })
    .catch()
  }

  searchChangeHandler = (event) => {
    // console.log(event.target.value)
    // if input value is empty (does not exist) do not perform this function
    if(!event.target.value) return false;
    this.performSearch(event.target.value)
  }

  render() {
    return (
      <div>
        <h1>Movie Search</h1>
        <input 
        id="inputField" 
        type="text" 
        placeholder="enter a movie"
        onChange = {this.searchChangeHandler}/>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
