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
return (   
    <StyledDiv>
        <p onClick={props.click}> I am {props.name} and i m {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>

)
}

export default person;

