import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DefaultProp from './DefaultProp';
import CompTypes from './CompTypes';
import ParentComponent from './ParentComponent';
import UsingThis from './UsingThis';
import Calendar from './Calendar';
import Footer from './Footer';
import AboutState from './AboutState';
import FirstStatefulComponent from './FirstStatefulComponent';
import SecondStatefulComponent from './SecondStatefulComponent';
import ToggleState from './ToggleState';
import * as serviceWorker from './serviceWorker';

// TODO: deployment isn't working.  Missing build  / node_modules likely due to the git ignore https://app.netlify.com/sites/freecodecamp-react/deploys/5e8abb794587b60485a89303

const github = <a href='https://www.github.com' target='_blank' >Github</a>

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="hero"> 
        <p>Sometext</p>       
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

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  render(){
    return(
    <div className = 'p_components'>
      <h3>Controlled Inputs</h3>
      <form>
        <input type='text' placeholder='type something here'></input>
      </form>
    <p className='c_components'>{this.state.input}</p>
    </div>
    )
  }
}
class MainApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          <h1 className='header'>React Playground</h1>
          <div className='container'>
          
          
          {/* <Hero /> */}
          <Descriptions />
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
          <ToggleState />
          <ClickCounter />
          <ControlledInput />
          </div>

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
