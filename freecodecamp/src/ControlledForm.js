import React from 'react'
import Components from 'react'

class ControlledForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            submit: this.state.input
        })
    }

    render() {
        return(
            <div className = 'p_components'>
                <h3>Controlled Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} placeholder='type something'/>
                    <button type='submit'>Submit</button>
                </form>
                <p>{this.state.submit}</p>
            </div>
        )
    }
}

export default ControlledForm