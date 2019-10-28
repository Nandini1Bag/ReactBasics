import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      //Only one root element can be added i.e div in jsx
      <div className="App"> 
        <h1>Hi i m react app</h1>
        <Person name="max" age="30"/>
        <Person name="lili" age="20" >N my hobbies:racing</Person>/>
      </div>
    );
   //JSX:-
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'does this work?'));
  }
}

export default App;
