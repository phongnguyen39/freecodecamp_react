import React from 'react';
import {Component} from 'react';
import URLs from './URLs'

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

  export default Footer;