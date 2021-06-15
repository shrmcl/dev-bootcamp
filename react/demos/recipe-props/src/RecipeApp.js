import React, { Component } from 'react';
// import logo from './logo.svg';
// import './RecipeApp.css';
import Recipe from './Recipe';
import Navbar from './Navbar';

class RecipeApp extends Component {
 render() {
   return (
     <div className="App">
       <Navbar />
       <Recipe 
       title="pasta" 
        ingredients={['flour', 'water']} 
        instructions="Mix ingredients"
        img="https://i.imgur.com/2q2OgnC.jpg"
      />
     </div>
   );
 }
}

export default RecipeApp;