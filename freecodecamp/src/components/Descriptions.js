import React from 'react'
import {Component} from 'react'

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

export default Descriptions;