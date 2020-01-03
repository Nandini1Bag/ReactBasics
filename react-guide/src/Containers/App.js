import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('constuctor.');

  }
 
  state={
    persons:[
      {id:'lkj' , name:'maxmillian' ,age : 20},
      {id:'hgf',name: 'tina',age:32},
      {id:'dss',name: 'nini',age:27}
    ],
    otherstate:'some value',
    showPersons:false,
    showCockpit:true
  }


  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('componentdidmount');
  }

shouldComponentUpdate(nextProps,nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate'); 
}


  deletepersonHandler=(personIndex)=>{
    // const persons=this.state.persons; Wrong approach.
    //Objects and array are reference type.
    //Above persons is a pointer.
    //good approach is ceate a copy of the array before manupulating it.

    //Correct approach:-
    // const persons=this.state.persons.slice(); //1st method
    const persons=[...this.state.persons]; //spread operator(2nd method)
    //The spread operator allows an iterable to spread or expand individually inside a receiver.
    //Iterables are anything that can be looped over such as strings, arrays, and sets. 
    //ex:-const codeburst = 'CODEBURST'; // Line 1
    //const characters = [ ...codeburst ]; // Line 2
    // [ 'C', 'O', 'D', 'E', 'B', 'U', 'R', 'S', 'T' ]
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  //Two Way Binding example:-
  nameChangeHandler=(event,id)=>{
  const personindex=this.state.persons.findIndex(p=>{
  return p.id ===id;
  });

  const person=[...this.state.persons[personindex]];

  person.name=event.target.value;

  const persons=[...this.state.persons];
  persons[personindex]=person;

  this.setState({ persons:persons});
  }

  togglePersonsHandler=()=>{
   const doesShow=this.state.showPersons;
   this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('render');
    let persons=null;

if(this.state.showPersons){
persons=(
  <Persons 
   persons={this.state.persons} 
   changed={this.nameChangeHandler}
   clicked={this.deletepersonHandler}/>); 
}

    return (
        <WithClass classes="App"> 
        <button
        onClick={()=>{this.setState({showCockpit:false})}}>
        Remove Cockpit
        </button>
        {this.state.showCockpit ? (  <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler}
        />):null}
        {persons}
      </WithClass>
  
     );
  }
}

export default App;



