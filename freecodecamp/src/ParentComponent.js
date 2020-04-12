import React from 'react'
import {Component} from 'react'


const ChildComponent = () => {
  return (
    <div className='c_components'>
      <p>Child component</p>

    </div>
  )
}

const ParentComponent = () => {
  return (
    <div className='p_components'>
      <h3>Parent component</h3>
      <ChildComponent />
    </div>
  )
}

export default ParentComponent