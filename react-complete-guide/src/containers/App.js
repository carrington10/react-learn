import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person.js';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
state = {
          persons: [
            {id: '1', name: 'max', age: 28},
            { id: '2', name: 'manu', age: 29},
            { id: '3', name: 'larce',age: 26}
          ]

        }// end of javascript object

    switchNameHandler = (newName) => {
    //console.log("was clicked");
    // dont do  this.state.persons[0].name = 'Maximilian';
    this.setState({persons:[
                      { name: newName,age:28},
                      { name: 'Manu',age:29},
                      { name: 'Stephanie',age:26}

        ]})
      } //end of funcion

      nameChangedHandler = (event,id) => {
        const personIndex = this.state.persons.findIndex(p => {

          return p.id === id;
        });

        const person =  { 
                          ...this.state.persons[personIndex]
                        }

        person.name = event.target.value;

      

        const persons = [...this.state.persons];
        persons[personIndex] = person ;

        this.setState({persons:[
          { name: 'Kano',age:40},
          { name: event.target.value,age:39},
          { name: 'Stephanie',age:26}
        ],
        showPersons: false  
      })// end of name changed persons
       
      }// end of name changed

      deletePersonHandler = (personIndex) => {
      //   const persons = this.state.persons;
      const persons = [...this.state.persons];
         persons.splice(personIndex,1);
        this.setState({persons: persons})
        }// end of method 

     togglePersonHandler = () => {
              const doesShow = this.state.showPersons
              this.setState({showPersons: !doesShow});
     }// end of method
 
  render() {

    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit' ,
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover':{
          backgroundColor: 'lightGreen',
          color:'black'
        }// end
    };// end of style 

    let persons = null;
  if(this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person,index) => {
             
               return <Person 
               click={() => this.deletePersonHandler(index)}
               name={person.name} 
               age = {person.age}
               key={person.id} 
               changed  = {(event) => this.nameChangedHandler(event,person.id)}
               />
            })} 
          
         </div>

        ); 
        style.backgroundColor = 'red';
        style[':hover']={
                backgroundColor: 'salmon',
                color: 'black'
        }
    }// emd

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }// end 
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }// end of 

    return (
      <StyleRoot>
              <div className="App">
                <h1>Hello World</h1>
                <p className={classes.join(' ')}>This is really working </p>
                <button 
                style={style}
                onClick={ this.togglePersonHandler }> Toggle persons </button>
                {persons}     
              </div>
      </StyleRoot>
      
    );// end of class
 //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'does this work now'));
  }
}

export default Radium(App);
