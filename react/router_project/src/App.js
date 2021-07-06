import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React, { Component } from 'react';
import Home from './HomeComponent'
import About from './AboutComponent'
import Contact from './ContactComponent'

// <Link> tags provided by react-router
// <Link> is used in React to prevent a browser refresh when clicked.
// <Link> must be used inside <Router>
// <Link> is paired to a <Route> to render a specific component

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         <div className="container">
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/contact">Contact</Link></li>
           </ul>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
         </div>
       </div>
      </Router>
    )
  }
}

export default App;
