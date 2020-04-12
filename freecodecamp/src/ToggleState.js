import React from 'react'
import {Component} from 'react'

class ToggleState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      }
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
      this.setState(state => ({
        visibility: !state.visibility
      }))
    }
    render() {
      if (this.state.visibility) {
        return (
          <div className='p_components'>
            <h3>Toggling Elements using State</h3>
            <p>The method toggleVisibility() toggles the state attribute visibility from true to false and vice versa</p>
            <p>The render code block has an if:else statement that renders depending on if visibility is true or false</p>
            <button onClick={this.toggleVisibility}>Toggle</button>
            <p className='c_components'>False</p>
          </div>
        )
      } else {
        return (
          <div className='p_components'>
            <h3>Toggling Elements using State</h3>
            <p>The method toggleVisibility() toggles the state attribute visibility from true to false and vice versa</p>
            <p>The render code block has an if:else statement that renders depending on if visibility is true or false</p>
            <button onClick={this.toggleVisibility}>Toggle</button>
            <p className='c_components'>True</p>
          </div>
        )
      }
    }
  }

  export default ToggleState;