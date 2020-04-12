import React from 'react'
import {Component} from 'react'


class UsingThis extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className='p_components'>
          <h3>Passing Props from ES6 Class Component to ES6 Class Components</h3>
          <p>Previous examples have been passing from ES6 Class to stateless function components</p>
          <p>Major difference is the use of "this" in front of the prop. </p>
          <p className="c_components">{this.props.thisExample}</p>
        </div>
      )
    }
  }

export default UsingThis;