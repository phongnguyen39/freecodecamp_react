import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const JSX =
  <div><p> Paragraph One</p><p>Paragraph Two</p><p>Paragraph Three</p></div>

class Descriptions extends React.Component {
  render() {
    return (
      <div>
        <h3>What are you seeing on this webpage?</h3>
        <p>Red boxes represents <i>parent components</i></p>
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

class JSXvsFunction extends Component {
  render() {
    return (
      <div className='c_components'>
        <h3>pure JSX element</h3>
        <pre><code>const JsxELement = <div><h1>I am a JSX element</h1></div></code>
        </pre>
        <h3>Functional component</h3>
        <pre><code>const FunctionalComponent =()=> {<div></div>}</code></pre>
      </div>
    )
  }
}

const ChildComponent = () => {
  return (
    <div className='c_components'>
      <p>I'm a child component</p>
      <JSXvsFunction />
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
class Es6Component extends React.Component {
  // constructor() {
  //   super(props)
  // }

  render() {
    return (
      <div className='container'>
        <div className='p_components'>
          <h1>Learning React</h1>
          <a href='https://github.com/phongnguyen39/freecodecamp_react' alt="Github link to readme" target='_blank'>For full notes see Github repo</a>
          <Descriptions array={['rate','fart']}/>
          
          <ParentComponent />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Es6Component />,
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
