import React, { Component , useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state={
    persons:[
      {name:'maxmillian' ,age : 20},
      {name: 'tina',age:32}
    ],
    otherstate:'some value',
    showPersons:false
  }

  switchNameHandler=(Newname)=>{
  //this.state.persons[0].name="";  wrong
  this.setState({ persons:[
    {name:Newname ,age : 20},
    {name: 'tina',age:32}
  ]})
  }

  //Two Way Binding example:-
  nameChangeHandler=(event)=>{
    this.setState({ persons:[
      {name: 'max',age : 20},
      {name: event.target.value,age:32}
    ]})
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
  <Person 
  name={this.state.persons[0].name} 
  age={this.state.persons[0].age}/>
  <Person 
  name={this.state.persons[1].name} 
  age={this.state.persons[1].age} 
  changed={this.nameChangeHandler}
  click={this.switchNameHandler.bind(this,'max')}>N my hobbies:racing</Person>
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