import React, { Component } from 'react';
import FeelingsList from './FeelingsList';



class Garfield extends Component {
    render() {
      return (<div className="theimage">
                  <h1 className="name">Life</h1>
                  <img src="https://i.pinimg.com/564x/76/6f/0c/766f0c72caba3d7f1d599f844a5f0d04.jpg"></img>
                  <h3>How does he feel?</h3>
                  <FeelingsList />
              </div>);
    }
  }




export default Garfield;