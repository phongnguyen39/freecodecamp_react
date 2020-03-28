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
        <ul>
          <li>Red boxes represents components</li>
          <li>They were applied with classNames</li>
        </ul>
        <br />
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
      <div>
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
    </div>
  )
}

const ParentComponent = () => {
  return (
    <div className='p_components'>
      <p1>I'm a parent component. Below me is my child</p1>
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
      <div className='components'>
        <h1>Learning React</h1>
        <a href='https://github.com/phongnguyen39/freecodecamp_react' alt="Github link to readme" target='_blank'>For full notes see Github repo</a>
        <Descriptions />
        <JSXvsFunction />
        <ParentComponent />
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
