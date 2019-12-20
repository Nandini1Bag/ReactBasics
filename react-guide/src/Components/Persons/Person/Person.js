import React ,{Component}from 'react';
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

class Person extends Component {
    render(){
        console.log('[Person.js] is rendering...')
        return (   
            <StyledDiv>
                <p onClick={this.props.click}> I am {this.props.name} and i m {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>
            </StyledDiv>
        
        )
    }
}

export default Person;

