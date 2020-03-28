import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const JSX =
  <div><p> Paragraph One</p><p>Paragraph Two</p><p>Paragraph Three</p></div>

const MyComponent = function () {
  return (
    <div>
      <h1>MyComponent</h1>
    </div>
  )
}

const ChildComponent=()=> {
  return(
    <div className='components'>
      <p>I'm a child component</p>
    </div>
  )
}

const ParentComponent=()=>{
  return(
    <div className='components'>
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
    return(
      <div className='components'>
        <h1>Learning React</h1>
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
