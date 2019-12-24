import React ,{Component}from 'react';
import Person from './Person/Person';

class Persons extends Component{
        
// static getDerivedStateFromProps(props,state){
//         console.log('[Persons.js] getDerivedStateFromProps');
//         return state;
//       }
   
//Depriciated:-
// componentWillReceiveProps(props){
//         console.log('[Persons.js] componentWillReceiveProps');      
// }

shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate');   
        if (nextProps.persons !== this.props.persons){
                return true; 
        }else{
                return false;      
        }
         
}

getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');  
        return {message:'Snapshot!'};      
}

//Depriciated:-
// componentWillUpdate(){

// }

componentDidUpdate(prevProps,prevState,Snapshot){
        console.log('[Persons.js] componentDidUpdate');  
        console.log(Snapshot) ;   
}

componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');   
        //cleanup can be done here.    
}

render(){
        console.log('[Persons.js] is rendering');
        return this.props.persons.map((person,index)=>{
        return <Person
                click={()=>this.props.clicked(index)} 
                name={person.name}  
                age={person.age}  
                key={person.id}     
                changed={(event)=>this.props.changed(event,person.id)}/>
        });      
}
} 

export default Persons;