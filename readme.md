*Source: https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-simple-jsx-element*. 

# Freecodecamp - React Lessons

These are my notes from following the curriculum.  Though this is a markdown file that is rendered by Github, it might be better to read it as a text file.  All credits go back to freecodecamp.  

React has its own markup language.  JSX is an extension of Javascript that writes HTML can be directly written in.  JSX is not valid Javascript so it has to be compiled.  Then transpiled by packages like Babel to fully render.

Throughout the notes, syntax unique to or important to React will be called out with "Important Syntax"

# JSX Syntax
Important syntax:
Javascript is notated in code with curly braces, {'Javascript code'}.  
ReactDOM.render(JSX,document.getElementById('root')) is a virtual DOM.  This renders an element on a webpage. React only updates specific parts of the actual DOM.

JSX example

    const JSX = <h1>Hello World</h1>;  // Renders Hello World


Multiple JSX elements must be nested in a single wraper otherwise it will not transpile.

Important syntax:

    const JSX = 
        <div>
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
        <p>Paragraph Three</p>
        </div>

    {/*Commenting within JSX*/}

Facts about ReactDOM.render(componentToRender, targerNode)
1. It's a method that is part of ReactDOM's API
2. This method renders JSX components to the HTML DOM 
3. JSX elements must be delcared by before using ReactDOM.render just like how we declare variables
4. When rendering a simple variable vs component enter componentToRender without <> brackets.  Components you use <> brackets

Example use of ReactDOM.render():

    const componentToRender = 
    <div>
        <p1>Hi</p1>
    </div>

    ReactDOM.render(componentToRender, document.getElementById('someIDinHTML'))

Important syntax (differences between JSX and HTML syntax):
* HTML class vs React className.  When employing classes in JSX, you must use 'className'
* All HTML attributes become camelCase:
    * onclick => onClick
    * onchange => onChange
* JSX uses self-closing tags:
    * HTML can be written as 
        <br> or <br><br /> 
        <br></br> shouldn't be used because it doesn't contain any content
    * JSX should be written as 
        <br><br /> which is a self-closing tag.  
    * JSX rules: 
        1. any JSX element can be written with a self-closing tag and 
        2. every eleemnt must be closed
*  A solid example is that when writing HTML, you can simply put <br> or <hr> without closing it.  HTML will still create a line-break or add a horizontal line.  In JSX, you must close them!  <br /> <hr /> respectively

# React Components

React components can be created two ways:
1. Using Javascript functions
2. Using ES6 class syntax 

and they can be stateless vs stateful

Variants possible:
1. Stateless component created with Javascript function
2. Stateless component created with ES6 class syntax
3. Stateful component created with Javascript function
4. Stateful component created with ES6 class syntax

Stateless components in applications can receive data and render it, but does not manage or track changes to that data.

Important syntax:
The Javascript function must start with a capital letter.
This function should return a JSX component.  Return()

Examples:

Javascript function

    const MyComponent = function() {
        return(
            <div></div>
        )
    }

ES6 class syntax

    class MyComponent extends React.Component {
        
        constructor(props) {
            super(props);
        }
        
        render() {
            return(
                <div></div>
            )
        }
    }

Advantages of using ES6 syntax extends React.Component, so useful features such as:
* local state
* lifecycle hooks

## Parent and child components

Also called, "Component composition", what components are created and how they are nested affects the user UI experience. "Compose" and "nested" are used interchangeably

Child components are rendered in a parent component by writing it has a custom HTML tag within the parent

Example.  Here Navbar, Dashboard, and Footer are children to the App component

    return (
    <App>
    <Navbar />
    <Dashboard />
    <Footer />
    </App>
    )

Important syntax:
It is common practice in react to write child components using ES6 arrow functions (Javascript function)

    const ChildComponent =()=> {
        return(
            <div></div>
        )
    }

Review of the various components that can be composed and compiled within React:

JSX element

    const JSXelement = <div></div>

Stateless Javascript function

    const JSfunction =()=> {
        return(
            <div></div>
        )
    }

    const JSfunction = function(){
        return(
            <div></div>
        )
    }

ES6 Class component

    class ClassyComponent extends React.Component {
        constructor(props){
            super(props)
        }

        render() {
            return(
                <div></div>
            )
        }
    }

Rendering ES6 Class Component using ReactDOM:

    ReactDOM.render(<AppComponent />,document.getElementById('root'))

compared to JSX element render (notice the custom HTML tag was used above)

    ReactDOM.render(JSXelement, document.getElementById('root'))


## Pass Props to a Stateless Functional Component

"Props" or properties are passed to child components, specifically stateless functional components

Examples

JSX element
    const Welcome = (props) => <h1>Hello, {props.user}!</h1>

Stateless Functional Component
    const CurrentDate = () => {
        return(
            <div>
                <p>Current Date is: </p>
            </div>
        )
    }

## Pass Array as Props

    <ParentComponent>
        <ChildComponent colors={['blue','red','yellow']} />
    </ParentComponent >

Array methods can be used like join()

    const ChildComponent = (props) => <p>}{props.colors.join(', ')}</p>\
    {/*output will be <p>gree, blue, red*/}

Important syntax:

The stateless functional component will contain in the HTML string portion {props.attribute}
The ES6 class component will have the HTML attribute

    const List = (props) => {
    { /* change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* change code above this line */ }
    };

    class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <h1>To Do Lists</h1>
            <h2>Today</h2>
            { /* change code below this line */ }
            <List tasks={['Do dishes','sleep','eat']} />
                <h2>Tomorrow</h2>
            <List tasks={['laundry','jump','car repair']} />
            { /* change code above this line */ }
        </div>
        );
    }
    };


https://www.freecodecamp.org/learn/front-end-libraries/react/use-default-props

# Default Props

Default props passes some default value if none is provided.

Important syntax:

MyComponent.defaultProps = {
    someKey: someVal
}