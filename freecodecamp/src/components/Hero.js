import React from 'react'
import {Component} from 'react'
import ParentComponent from './ParentComponent';

class Hero extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div className="hero"> 
          <h3>Below are examples of various React concepts.  I followed FreeCodeCamps React tutorial.  
          </h3>
        <br />
        <h4>All examples will follow the basic component structure</h4>
          <p>Outer boxes are <i>parent components</i></p>
          <p>Gray boxes represents <i>child components</i></p>
          <ParentComponent />
        </div>
      )
    }
  }

  export default Hero;
  