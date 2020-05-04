import React from 'react'
import {Component} from 'react'

const AboutState = () => {
    return (
      <div className='p_components'>
  
        <p>A stateless functional component is any function you write which accepts props and returns JSX.</p>
        <p>A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge).</p>
        <p>Finally, a stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.</p>
        <a href='https://www.freecodecamp.org/learn/front-end-libraries/react/review-using-props-with-stateless-functional-components'>Ref: freecodecamp</a>
      </div>
    )
  }
  

export default AboutState;