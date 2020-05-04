import React from 'react';
import { Components } from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='p_components'>
                <h3>Lifecycle Methods</h3>
                <p>The methods below perform actions at specific points of a component lifecycle (aka lifecycle hooks).</p>
                <p>Main lifecycle methods:</p>
                <ul>
                    <li>Before renders<br />
                        <code><strong>
                        [deprecated]
                        componentWillMount()</strong>
                    </code></li>
                    <li>Before updates<br /><strong>    <code>
                        componentDidMount()
                    </code></strong></li>
                    <li>Before receiving props<br /><strong><code>
                        shouldComponentUpdate()
                    </code></strong></li>
                    <li>Before unmounting</li>
                    <code>
                        componentDidUpdate()
                    </code>
                    <code>
                        componentWillUnmount()
                    </code>
                </ul>
            </div>
        )
    }
}

export default LifeCycle;