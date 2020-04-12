import React from 'react';
import { Component } from 'react';

class CompTypes extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div className='p_components'>
          <h3>Different types of components in React</h3>
          <h5 className='c_components' >pure JSX element syntax <pre><code>const JsxELement = </code></pre></h5>
          {/* <h5 className='c_components' onClick={jax}>pure JSX element syntax {jax}</h5> */}
          <h5 className='c_components'>Stateless Functional component syntax <pre><code>const FunctionalComponent =()=> {}</code></pre></h5>
          <h5 className='c_components'>ES6 class component syntax <pre><code>class Es6ClassComponent extends React.Component{}</code></pre></h5>
        </div>
      )
    }
  }

  export default CompTypes;