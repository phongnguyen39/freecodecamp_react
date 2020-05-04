import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hero from './components/Hero';
import Descriptions from './components/Descriptions';
import DefaultProp from './components/DefaultProp';
import CompTypes from './components/CompTypes';
import UsingThis from './components/UsingThis';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import AboutState from './components/AboutState';
import FirstStatefulComponent from './components/FirstStatefulComponent';
import SecondStatefulComponent from './components/SecondStatefulComponent';
import ToggleState from './components/ToggleState';
import ClickCounter from './components/ClickCounter';
import ControlledInput from './components/ControlledInput';
import ControlledForm from './components/ControlledForm';
import StatePropsComponents from './components/StatePropsComponents';
import PassingProps from './components/PassingCallbacks';
import LifeCycle from './components/LifeCycle';
import CompWillMount from './components/CompWillMount';
import * as serviceWorker from './serviceWorker';

// TODO: deployment isn't working.  Missing build  / node_modules likely due to the git ignore https://app.netlify.com/sites/freecodecamp-react/deploys/5e8abb794587b60485a89303

const github = <a href='https://www.github.com' target='_blank' >Github</a>

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

const MyComponent = function () {
  return (
    <div>
      <h1>MyComponent</h1>
    </div>
  )
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
          <Hero />
          <div className='container'>
            <CompTypes />
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
            <ControlledForm />
            <StatePropsComponents />
            <PassingProps />
            <LifeCycle />
            <CompWillMount />
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
