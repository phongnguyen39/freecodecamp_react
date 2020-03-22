*Source: https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-simple-jsx-element*

# Freecodecamp - React Lessons

React has its own markup language.  JSX is an extension of Javascript that writes HTML can be directly written in.  JSX is not valid Javascript so it has to be compiled.  Then transpiled by packages like Babel to fully render.

Throughout the notes, syntax unique to or important to React will be called out with "Important Syntax"

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

