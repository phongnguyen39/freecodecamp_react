*Source: https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-simple-jsx-element*. 

# Freecodecamp - React Lessons

These are my notes from following the curriculum.  Though this is a markdown file that is rendered by Github, it might be better to read it as a text file.

React has its own markup language.  JSX is an extension of Javascript that writes HTML can be directly written in.  JSX is not valid Javascript so it has to be compiled.  Then transpiled by packages like Babel to fully render.

Throughout the notes, syntax unique to or important to React will be called out with "Important Syntax"

# JSX Syntax
Important syntax:
Javascript is notated in code with curly braces, {'Javascript code'}.  
ReactDOM.render(JSX,document.getElementById('root')) is a virtual DOM.  This renders an element on a webpage. React only updates specific parts of the actual DOM.

///// JSX example /////

const JSX = <h1>Hello World</h1>;  // Renders Hello World


Multiple JSX elements must be nested in a single wraper otherwise it will not transpile.

Important syntax:

const JSX = 
"<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>"

{/*Commenting within JSX*/}

Facts about ReactDOM.render(componentToRender, targerNode)
1. It's a method that is part of ReactDOM's API
2. This method renders JSX components to the HTML DOM 
3. JSX elements must be delcared by before using ReactDOM.render just like how we declare variables

Example use of ReactDOM.render():

    const componentToRender = 
    <div>
        <p1>Hi</p1>
    </div>

    ReactDOM.render(componentToRender, document.getElementById('someIDinHTML'))

Important syntax (differences between JSX and HTML syntax):
* HTML class vs React className.  When employing classes in JSX, you must use 'className'
* All HTML attributes become camelCase:
** onclick => onClick
** onchange => onChange
* JSX uses self-closing tags:
** HTML can be written as <br> or <br><br />; <br></br> shouldn't be used because it doesn't contain any content
** JSX should be written as <br><br /> which is a self-closing tag.  
** JSX rules: 1) any JSX element can be written with a self-closing tag and 2) every eleemnt must be closed
**  A solid example is that when writing HTML, you can simply put <br> or <hr> without closing it.  HTML will still create a line-break or add a horizontal line.  In JSX, you must close them!  <br /> <hr /> respectively

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

class MyComponent extends React.component {
    
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
