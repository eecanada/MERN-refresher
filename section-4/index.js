// JSX lets me write HTML in my React app

// What makes up a react component? - A react component can be one of two things, A function that returns JSX or it can be a JS class that has a render method. 

//FUNCTION COMPONENT
const app = () => {
  return <h1> hi </h1>
}

//CLASS COMPONENT
class App extends React.Component {
  render () {
    return <h1> hi</h1>
  }
}

// css classes do not exist in React JSX, so use className="" instead
// every component should just do one thing.


// I have to import React from react every turn 