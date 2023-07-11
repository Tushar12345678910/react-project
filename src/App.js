import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    console.warn("Hello from constructor");
  }

  componentDidMount()
  {
    console.warn("ComponentDidMount Method");
  }
  render(){
    console.warn("render method");
    return(
      <div>
        <h1>Life Cycle Method's Examples</h1>
      </div>
    )
  }
}

export default App;
