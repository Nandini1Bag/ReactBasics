import React ,{useEffect} from 'react';
import  './Cockpit.css';

const Cockpit=(props)=>{
    useEffect(()=>{
    console.log('[Cockpit.js] useeffect');
    //Http request....
    setTimeout(() => {
       alert('Data saved to cloud!'); 
    }, 1000);
    },[]); //Note:-Just pass empty array as 2nd argument to useEffect function and it will work 
           //same as Componentdidmount.  

    let btnClass='';
    if(props.showPersons){
        btnClass='ButtonRed'; 
    }
    else{
        btnClass='Button';
    };

    const Assignedclasses=[];
    if (props.persons.length <= 2){
     Assignedclasses.push('red'); //classes=['red']
    }
    if (props.persons.length <= 1){
     Assignedclasses.push('bold'); //classes=['red','bold']
    }
    return(
        <div>
        <h1>{props.title}</h1>
        <p className={Assignedclasses.join(' ')}>Its really working.</p>
        <button className={btnClass} onClick={props.clicked}>
          Toggle Persons
        </button>
        </div>
       
    );
};


export default Cockpit;