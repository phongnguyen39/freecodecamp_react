import React from 'react';
import {Component} from 'react';


const DefaultProp = (props) => {
  return (
    <div className='p_components'>
      <p>Default Prop</p>
      <p>.defaultProps passes a default value as a prop through a component if none is provided.   It can be overidden when another value is explicitly passed.</p>
      <p className='c_components'>{props.someKey}</p>
      <p>Type something below to override the default</p>
    </div>
  )
}

DefaultProp.defaultProps = {
  someKey: "I'm a default prop value"
}

export default DefaultProp;