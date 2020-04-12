import React from 'react'
import {Component} from 'react'

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render(){
    return(
    <div className = 'p_components'>
      <h3>Controlled Inputs</h3>
      <p>React allows you to control the state of form inputs - making them mutable.  Normally, they maintain their own state in the DOM</p>
      <p>Typing in the input field below demonstrates a state change using React controllable inputs</p>
        <input style={{textAlign:'center'}} value={this.state.input} onChange={this.handleChange.bind(this)} placeholder='type something here'></input>
        <p className='c_components'>{this.state.input}</p>
    </div>
    )
  }
}

export default ControlledInput;