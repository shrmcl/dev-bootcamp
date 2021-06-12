import React, { Component } from 'react';

class FeelingsList extends Component {
    render() {
      const theStyles = {fontSize: "24px"};
      return (
                 <ul style={theStyles}>
                 <li>Happy</li>
                 <li>Sad</li>
                 <li>He wanted to <b>accomplish</b> something</li>
                 </ul>
             );
      }
  }

  export default FeelingsList;