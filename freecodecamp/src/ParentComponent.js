import React from 'react'
import {Component} from 'react'


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
      <h3>I'm a parent component</h3>
      <ChildComponent />
    </div>
  )
}

export default ParentComponent