import React, { Component , useState} from 'react';
import classes from './App.css';
import Person from './Person/Person';


class App extends Component {
 
  state={
    persons:[
      {id:'lkj' , name:'maxmillian' ,age : 20},
      {id:'hgf',name: 'tina',age:32},
      {id:'dss',name: 'nini',age:27}
    ],
    otherstate:'some value',
    showPersons:false
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

    const style={
      backgroundColor:'Green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding :'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'Lightgreen',
      color:'black',
      }
    };
     
let persons=null;
if(this.state.showPersons){
persons=(<div>
  {this.state.persons.map((person,index)=>{
  return <Person
          click={()=>this.deletepersonHandler(index)} 
          name={person.name}  
          age={person.age}
          key={person.id}
          changed={(event)=>this.nameChangeHandler(event,person.id)}/>
  })}
  </div>);
  
  // style.backgroundColor='red';
  // style[':hover']={
  //   backgroundColor:'Lightred',
  // color:'black',
  // };
}

 const Assignedclasses=[];
 if (this.state.persons.length <= 2){
  Assignedclasses.push(classes.red); //classes=['red']
 }
 if (this.state.persons.length <= 1){
  Assignedclasses.push(classes.bold); //classes=['red','bold']
 }
    return (
      //Only one root element can be added i.e div in jsx
      //donot add () in the function call i.e switchNameHandler (we only want to send a reference)
      //other wise it will be called as soon as it renders.
   
        <div className="App"> 
        <h1>Hi i m react app</h1>
        <p className={Assignedclasses.join(' ')}>Its really working.</p>
        <button className="Button" onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
  
     );
   //JSX:-
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'does this work?'));
  }
}

export default App;



