import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state={
    persons:[
      {name:'max' ,age : 20},
      {name: 'tina',age:32}
    ]
  }

  render() {
    return (
      //Only one root element can be added i.e div in jsx
      <div className="App"> 
        <h1>Hi i m react app</h1>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >N my hobbies:racing</Person>
      </div>
    );
   //JSX:-
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'does this work?'));
  }
}

export default App;
