import React from 'react';
import {Component} from 'react';

// https://www.freecodecamp.org/learn/front-end-libraries/react/pass-state-as-props-to-child-components

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    render(){
        return (
            <div>
                <p className='c_components'>State that was passed as a prop: <strong>{this.props.submit}</strong></p>
            </div>
        ) 
    }
}

class StatePropsComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this)
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submit: this.state.input
        })
    }
    reset(){
        this.setState({
            input: '',
            submit: ''
        })
    }

    render() {
        return(
            <div className='p_components'>
                <h3>Pass State as Props to Child Components</h3>
                <p>We can pass the state of a component as a prop.</p>
                <p>The example provided by FreeCodeCamp is a navbar.  The navbar captures your username so naturally we will want to store it in the state and pass it as a prop</p>
                <p>Uni-directional data flow.   State flows down the tree of app components.  Child components receiving only what they need</p>
                <p>Complex, stateful can be reduced to a few stateful components.  There naturally becomes a separation of state management vs UI rendering in the code.</p>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} placeholder='type something'/>
                    <button type='submit'>Submit</button>
                </form> 
                
                <button type='submit' onClick={this.reset}>Clear Submission</button>           
                <Navbar submit={this.state.submit} />
            </div>
        )
    }
}

export default StatePropsComponents;