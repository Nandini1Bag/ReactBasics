import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state={
    persons:[
      {name:'max' ,age : 20},
      {name: 'tina',age:32}
    ],
    otherstate:'some value'
  }

  switchNameHandler=()=>{
  //this.state.persons[0].name="";  wrong
  this.setState({ persons:[
    {name:'nandini' ,age : 20},
    {name: 'tina',age:32}
  ]})
  }

  render() {
    return (
      //Only one root element can be added i.e div in jsx
      //donot add () in the function call i.e switchNameHandler (we only want to send a reference)
      //other wise it will be called as soon as it renders.
      <div className="App"> 
        <h1>Hi i m react app</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >N my hobbies:racing</Person>
      </div>
    );
   //JSX:-
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'does this work?'));
  }
}

export default App;
