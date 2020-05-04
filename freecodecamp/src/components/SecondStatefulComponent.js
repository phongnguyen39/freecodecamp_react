import React from 'react'
import {Component} from 'react'

class SecondStatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        initialState: 'Initial State'
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        initialState: 'Bloop!'
      })
      console.log('SecondStatefulComponent.this.handleCLick method called')
    }
  
    render() {
      return (
        <div className='p_components'>
          <h3>Updating the initial state</h3>
          <p>This is done by using this.setState(). This method updates the value in the state object initially set in the constructor</p>
          <button onClick={this.handleClick}>Click to Update Initial State</button>
          <p className='c_components'>{this.state.initialState}</p>
          <p>Note: Binding of 'this' to a Class Method was used to set the state.  When the user clicks on the onClick atttribute it calls this.handleClick variable that is assigned to this.handleClick.bind(this).  </p>
          <code>this.handleClick = this.handleClick.bind(this)</code>
        </div>
      )
    }
  }
  

export default SecondStatefulComponent;