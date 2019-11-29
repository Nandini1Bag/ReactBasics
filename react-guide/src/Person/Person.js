import React from 'react';
import styled from 'styled-components';
//import './Person.css';


const StyledDiv=styled.div`
    width: 60%;
    margin: 16px auto;
    text-align: center;
    padding: 16px;
    box-shadow: 0 2px 3px #cccccc;
    border: 1px solid #eeeeee;
        
     @media (min-width : 500px){
            widows: 450px;
    } 
`;


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
    <StyledDiv>
        <p onClick={props.click}> I am {props.name} and i m {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>

)
}

export default person;

