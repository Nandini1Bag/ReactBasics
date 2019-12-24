import React ,{useEffect} from 'react';
import  './Cockpit.css';

const Cockpit=(props)=>{

    useEffect(()=>{
    console.log('[Cockpit.js] useeffect');
    //Http request....
   const timer= setTimeout(() => {
       alert('Data saved to cloud!'); 
    }, 1000);
    
    return ()=>{
        clearTimeout(timer);
        console.log('[Cockpit.js] cleanup work in useEffect');   
    }

    },[]); //Note:-Just pass empty array as 2nd argument to useEffect function and it will work 
           //same as Componentdidmount.  


   useEffect(()=>{
    console.log('[Cockpit.js] 2nd useeffect');
    return ()=>{
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');   
    }    
   });


    let btnClass='';
    if(props.showPersons){
        btnClass='ButtonRed'; 
    }
    else{
        btnClass='Button';
    };

    const Assignedclasses=[];
    if (props.personsLength <= 2){
     Assignedclasses.push('red'); //classes=['red']
    }
    if (props.personsLength <= 1){
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

//React.memo is a higher order component that memoizes the result of a function component. 
//If a component returns the same result given the same props, wrapping it in memo can
//result in a performance boost.

export default React.memo(Cockpit);