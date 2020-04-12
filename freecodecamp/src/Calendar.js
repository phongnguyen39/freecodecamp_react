import React from 'react'
import {Component} from 'react'

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

  export default Calendar;