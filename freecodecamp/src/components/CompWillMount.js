import React from 'react';
import {Component} from 'react';

class CompWillMount extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        console.log("Mounted")
    }

    render() {
        return(
            <div className='p_components'>
                <h3>componentWillMount()</h3>
                <p>Method is called before the render() method when a component is being mounted to the DOM</p>
         
            </div>
        )
    }
}

export default CompWillMount;