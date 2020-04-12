import React from 'react'
import Component from 'react'

class ClickCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      }
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }
    increment() {
      this.setState(state => ({
        count: state.count + 1
        // count: state.count++  // doesn't work
      }))
    }
    decrement() {
      this.setState(state => ({
        count: state.count - 1
        // count: state.count--  // doesn't work
      }))
    }
    reset() {
      this.setState(state => ({
        count: 0
      }))
    }
    render() {
      return (
        <div className='p_components'>
          <h3>Click Counter</h3>
          <p>These three buttons each have its own method that modifies the state.</p>
          <p className='c_components'>{this.state.count}</p>
          <button onClick={this.increment}>Increment+</button>
          <button onClick={this.decrement}>Decrement-</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      )
    }
  }

  export default ClickCounter;