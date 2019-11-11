import React, { Component , useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state={
    persons:[
      {id:'lkj' , name:'maxmillian' ,age : 20},
      {id:'hgf',name: 'tina',age:32}
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
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding :'8px',
      cursor:'pointer'
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
}
    return (
      //Only one root element can be added i.e div in jsx
      //donot add () in the function call i.e switchNameHandler (we only want to send a reference)
      //other wise it will be called as soon as it renders.
      <div className="App"> 
        <h1>Hi i m react app</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
   //JSX:-
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'does this work?'));
  }
}

export default App;

//----------------------------------------------------------------
//React hooks Example below
//-------------------------------------------------------------------
// const app = props => {
 
//   const [personState,setPersonState]= useState({
//     persons:[
//       {name:'max' ,age : 20},
//       {name: 'tina',age:32}
//     ]
//   });

//   const [otherState,setOtherState]= useState('some other value');

//   console.log(personState,otherState);

//   const switchNameHandler=()=>{
//   //Note:- However, unlike this.setState in a class, 
//   //updating a state variable always replaces it instead of merging it.
//   //So either you can manually add the other state here or use many state variables like above(i.e otherState).
//    setPersonState({ persons:[
//     {name:'nandini' ,age : 20},
//     {name: 'tina',age:32}
//   ]})
//   }


//     return (
//       //Only one root element can be added i.e div in jsx
//       //donot add () in the function call i.e switchNameHandler (we only want to send a reference)
//       //other wise it will be called as soon as it renders.
//       <div className="App"> 
//         <h1>Hi i m react app</h1>
//         <button onClick={switchNameHandler}>Switch name</button>
//         <Person 
//         name={personState.persons[0].name} 
//         age={personState.persons[0].age}/>
//         <Person 
//         name={personState.persons[1].name} 
//         age={personState.persons[1].age} >
//         N my hobbies:racing
//         </Person>
//       </div>
//     );
//    //JSX:-
//    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'does this work?'));
//   }


// export default app;