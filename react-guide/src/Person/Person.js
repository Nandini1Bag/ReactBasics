import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    /* If screen size is more than 500px wide, set the width of <div> to 450px 
    and set the background color to olive */
    const style={
     '@media (min-width : 500px)': {
         width :'450px',
         backgroundColor: 'olive'
     },
     '@media (min-width : 0px) and (max-width : 500px)': {
        width :'150px',
        backgroundColor: 'yellow'
    }
    };
return (   
    <div className="Person" style={style}>
        <p onClick={props.click}> I am {props.name} and i m {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>

)
}

export default Radium(person);

