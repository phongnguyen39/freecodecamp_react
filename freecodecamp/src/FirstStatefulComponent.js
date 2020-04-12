import React from 'react'
import {Component} from 'react'


class FirstStatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateType: 'Stateful with this.state.data written directly into the return statement',
      stateType2: 'Stateful with this.state.data written in the render before the return statement. Writing it this way allows you to perform Javascript functions.  The this.state.data is assigned to avariable without curly braces'
    }
  }

  render() {
    return (
      <div className='p_components'>
        <h3>Stateful Components</h3>
        <p>State syntax is within the constructor.  this.state = key value object</p>
        <p className='c_components'>{this.state.stateType}</p>
        <p>The state is encapsulated to it's own component.  It can be passed as props to another component though.</p>
        <p>When the state data of a component is updated then it updates the virtual DOM which then updates the DOM.  This allows the UI to change only where needed</p>
        <p className='c_components'>{this.state.stateType2}</p>

      </div>
    )
  }
}

export default FirstStatefulComponent;