import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const github = <a href='https://www.github.com' target='_blank' >Github</a>

const URLs = () => {
  return (
    <div>
      <a href='https://www.github.com' target='_blank' >Github</a>
      <a href='https://www.linkedin.com/in/phongnguyenmha' target='_blank' >Linkedin</a>
      <a href='mailto: developer.phong@gmail.com' target='_blank' >Email</a>
    </div>
  )
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='footer'>
        {/* <h1>FOoter</h1> */}
        <URLs></URLs>
      </div>
    )
  }
}

// class SVGs extends React.Component {

//   constructor(props){
//     super(props);
//   }

//   render(){
//     return (
//       <div>

//         <svg>
//           <circle cx='50' cy='50' r='20' stroke='green' stroke-width='1' fill='yellow' />
//         </svg>
//       </div>
//     );
//   }
// }


// const jax =()=>{
//   console.log("jax")
//   return(
//     <div><h1>Slap</h1>></div>
//   )
// }



class Descriptions extends React.Component {
  render() {
    return (
      <div className='p_components'>
        <h3>What are you seeing on this webpage?</h3>
        <p>Outer boxes are <i>parent components</i></p>
        <p>Gray boxes represents <i>child components</i></p>
        <p>They were applied with <i>classNames</i></p>
        <br />
        {/* <svg>
          <circle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' />
        </svg> */}
      </div>
    )
  }
}

const MyComponent = function () {
  return (
    <div>
      <h1>MyComponent</h1>
    </div>
  )
}

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

const ChildComponent = () => {
  return (
    <div className='c_components'>
      <p>I'm a child component</p>

    </div>
  )
}

const ParentComponent = () => {
  return (
    <div className='p_components'>
      <p1>I'm a parent component</p1>
      <ChildComponent />
    </div>
  )
}

const CurrentDate = (props) => {
  return (
    <div className='c_components'>
      <p>Current Date: {props.date}</p>
    </div>
  )
}




const DaysOfWeek = (props) => {
  return (
    <div className='c_components'>
      <p>{props.dow.join(' | ')}</p>
    </div>
  )
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='p_components'>
        <h3>This is an example of passing properties between components</h3>
        <h3>Calendar Component</h3>
        <CurrentDate date={Date()} />
        <p>This Calendar component consist of two parts:</p>
        <ul>
          <li>ES6 class component</li>
          <li>Stateless functional component</li>
        </ul>
        <p>The ES6 class component has the constructor, super, and props.  .   The stateless functional component has the props and date attribute.  It is nested in the ES6 component.</p>
        <DaysOfWeek dow={["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]} />
      </div>
    )
  }
}

const DefaultProp = (props) => {
  return (
    <div className='p_components'>
      <p>Default Prop</p>
      <p>.defaultProps passes a default value as a prop through a component if none is provided.   It can be overidden when another value is explicitly passed.</p>
      <p className='c_components'>{props.someKey}</p>
      <p>Type something below to override the default</p>
    </div>
  )
}

DefaultProp.defaultProps = {
  someKey: "I'm a default prop value"
}

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

const AboutState = () => {
  return (
    <div className='p_components'>
      
        <p>A stateless functional component is any function you write which accepts props and returns JSX.</p>
        <p>A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge).</p> 
        <p>Finally, a stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.</p>
      <a href='https://www.freecodecamp.org/learn/front-end-libraries/react/review-using-props-with-stateless-functional-components'>Ref: freecodecamp</a>
    </div>
  )
}

class FirstStatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      stateType: 'Stateful with this.state.data written directly into the return statement',
      stateType2: 'Stateful with this.state.data written in the render before the return statement. Writing it this way allows you to perform Javascript functions.  The this.state.data is assigned to avariable without curly braces'
    }
  }
  
  render() {
    return (
    <div className ='p_components'>
      <h3>Stateful Components</h3>
    <p>State syntax is within the constructor.  this.state = key value object</p>
      <p className= 'c_components'>{this.state.stateType}</p>
      <p>The state is encapsulated to it's own component.  It can be passed as props to another component though.</p>
      <p>When the state data of a component is updated then it updates the virtual DOM which then updates the DOM.  This allows the UI to change only where needed</p>
      <p className= 'c_components'>{this.state.stateType2}</p>

    </div>
    )
  }
}

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
      name: 'Bloop!'
    })
  }

  render() {
    return (
      <div className='p_components'>
        <h3>Updating the initial state</h3>
        <p>This is done by using this.setState(). This method updates the value in the state object initially set in the constructor</p>
        <button onClick={this.handleClick}>Click to Update Initial State</button>
        <p className='c_components'>Something</p>
      </div>
    )
  }
}

class MainApp extends React.Component {
  // constructor() {
  //   super(props)
  // }

  render() {
    return (
      <div className='container'>
        <div>
          <h1 className='header'>React Playground</h1>
          <a href='https://github.com/phongnguyen39/freecodecamp_react' alt="Github link to readme" target='_blank'>For full notes see Github repo</a>
          {/* <SVGs /> */}
          <Descriptions array={['rate', 'fart']} />
          <CompTypes />
          <ParentComponent />
          {/* <PassingProps /> */}
          <Calendar />
          <DefaultProp />
          <DefaultProp someKey='Overidden Prop' />
          <UsingThis thisExample='this.props.data' />
          <AboutState />
          <FirstStatefulComponent />
          <SecondStatefulComponent />

          <Footer />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
