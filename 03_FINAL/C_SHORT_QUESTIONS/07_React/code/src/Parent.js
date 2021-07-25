import React from 'react'
import Child from './Child'

class Parent extends React.Component {

  constructor(props){
    super(props)
    this.state = {stuff: ''}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('test');
    this.setState({stuff: event.target.value})
  }
                                
  render(){
    return (
      <div>
        <h1>Hello {this.state.stuff}</h1>
        <Child searcher={this.handleChange}/>
      </div>
    )
  }

} 

export default Parent