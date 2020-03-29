import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class JSX extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  render(){
    console.log('JSX called');
    return (
      <div>
        <p> Paragraph One</p>
        <p>Paragraph Two</p>
        <p>Paragraph Three</p>
        <svg>
          <circle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' />
        </svg>
      </div>
    );
  }
    
}


// const jax =()=>{
//   console.log("jax")
//   return(
//     <div><h1>Slap</h1>></div>
//   )
// }



class Descriptions extends React.Component {
  render() {
    return (
      <div>
        <h3>What are you seeing on this webpage?</h3>
        <p>Red border boxes represents <i>parent components</i></p>
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
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className ='p_components'>
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
  return(
    <div>
      <p>Current Date: {props.date}</p>
    </div>
  )
}

class Calendar extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className='p_components'>
        <h3>This is an example of passing properties between components</h3>
        <h3>Calendar Component</h3>
        <CurrentDate date={Date()}/>
        <p>This Calendar component consist of two parts:</p>
        <ul>
          <li>ES6 class component</li>
          <li>Stateless functional component</li>
          </ul>
          <p>The ES6 class component has the constructor, super, and props.   The stateless functional component has the props and date attribute.</p>
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
          <h1>React Playground</h1>
          <a href='https://github.com/phongnguyen39/freecodecamp_react' alt="Github link to readme" target='_blank'>For full notes see Github repo</a>
          <Descriptions array={['rate', 'fart']} />
          <CompTypes />
          <ParentComponent />
          {/* <PassingProps /> */}
          <Calendar  />
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
