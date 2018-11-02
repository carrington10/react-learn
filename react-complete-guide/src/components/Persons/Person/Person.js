import React from 'react';// not using a class extends component
import './Person.css'
import Radium, {StyleRoot} from 'radium'
const person = (props) =>{
    const style = {
      '@media(min-width: 500px)':{
        width: '450px'
      }//end        
    }    
    
    return (
      
           <div className="Person" style = {style}>
                <p onClick={props.click}>Im {props.name} and I am {props.age} years old </p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}></input>
           </div>
        )
        
    };// end of function

export default Radium(person);