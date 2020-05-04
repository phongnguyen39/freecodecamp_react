import React from 'react';
import {Component} from 'react';

class CompWillMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialTime: '',
            currentTime: ''
        }
    }

    componentWillMount(){
        let date = new Date();
        console.log("Mounted", date.toString())
        this.setInitialTime(date);
    }
    
    setInitialTime(date){
        this.setState=({
            currentTime: date.toString()
        })
    }

    render() {
        console.log(this.state)
        return(
            <div className='p_components'>
                <h3>componentWillMount()</h3>
                <p>Method is called before the render() method when a component is being mounted to the DOM</p>
                <p>This is demonstrated by </p>
                <p>Initial Timestamp: {this.state.initialTime}</p>
                <p>Current Timestamp: {this.state.currentTime}</p>
            </div>
        )
    }
}

export default CompWillMount;