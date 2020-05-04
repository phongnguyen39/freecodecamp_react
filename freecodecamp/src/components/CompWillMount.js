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
        console.log("Mounted", date)
        // let dateStr1 = date.toString();
        // this.setInitialTime(dateStr1);
    }
    
    // setInitialTime(){
    //     let date1 = new Date();
    //     console.log("Mountedsdfsdfsdf", date1.toString())
    //     this.setState=({
    //         currentTime: ''
    //     })
    // }

    render() {
        console.log(this.state)
        return(
            <div className='p_components'>
                <h3>componentWillMount()</h3>
                <p>Method is called before the render() method when a component is being mounted to the DOM</p>
                <p>This is demonstrated by inspecting the web browser, there will be a timestamp of when the componentWillMount() executed in the console log. A couple of seconds would have now.  The lifecycle hook executed as the virtual DOM was mounted to the HTML DOM</p>
                {/* <p>Initial Timestamp: {this.state.initialTime}</p>
                <p>Current Timestamp: {this.state.currentTime}</p> */}
            </div>
        )
    }
}

export default CompWillMount;