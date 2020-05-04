import React from 'react';
import { Component } from 'react';

class GetInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='c_components' >
                <h4>Get Input:</h4>
                <input value={this.props.input}
                    onChange={this.props.handleChange} />
            </div>
        )
    }
}

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='c_components' >
                <h4>Input Render:</h4>
                <p>{this.props.input}</p>
            </div>
        )
    }
}

class PassingCallBacks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }


    render() {
        return (
            <div className='p_components'>
                <h3>Passing Callback Methods as Props</h3>
                <p>We can pass handler functions or methods to child components from the parent component too.  These functions are passed as this.props.</p>
                
                <GetInput input={this.state.input} handleChange={this.handleChange} />
                <RenderInput input={this.state.input} />

                <p>There are three components used here.  One has an onChange method (callback) that is called as you type something into the input field.</p>
            </div>
        )
    }
}


export default PassingCallBacks;