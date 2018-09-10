import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    username: 'tushar1907',
    person: [
      {id:'adtf1', name:'Max' , age: 28 },
      {id:'plog7', name:'Samnu' , age: 26 }
    ],
    otherState: 'some value person',
    showPerson: false,
    string: ''
  }

  SateHandler = (newValue) => {
    console.log("was clicked !")

    this.setState({
      person: [
        {name:newValue , age: 28 },
        {name:'Samnu' , age: 30 }
      ]
    })

    
    
  }

  nameChangedHandler = (event, id) => {
    
    const personIndex = this.state.person.findIndex(p => {
      return p.id == id;
    })

    const person = {...this.state.person[personIndex]}

    person.name = event.target.value

    const persons = [...this.state.person]

    persons[personIndex] = person

    this.setState({ person: persons})
  }

  inputChangedHandler = (event) => {
    
    this.setState({      
      username: event.target.value
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person]
    persons.splice(personIndex,1)
    this.setState({ person: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson : !doesShow})
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px inherit blue',
      padding: '8px',
      cursor: 'pointer'
      
    }
    let persons = null;

    if(this.state.showPerson){
      
      persons = (        
        <div>          
          {this.state.person.map((person,index)=>{
            return <Person 
            click = {() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed = {(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        {/* <Person click={this.SateHandler.bind(this,"Suman")} 
        name={this.state.person[0].name}
        age={this.state.person[0].age}> my hobbies are XYZ</Person>
        <Person 
        name={this.state.person[1].name} 
        age={this.state.person[1].age} 
        change={this.nameChangedHandler}/>
        <Person /> */}
        </div>
      )

      style.backgroundColor =  'red'
      
    }
    return (
      
      <div className="App">
       <h1>Hi I am a React App</h1>
       <button onClick={this.SateHandler.bind(this,"Sanjeev")}>Switch</button>
       <button style={style} onClick={this.togglePersonsHandler}>Switch Person</button> 
       {persons}      
       {/* <UserInput change={this.inputChangedHandler} value={this.state.username}/>
       <UserOutput userName = {this.state.username}/>
       <UserOutput userName = "Tushar"/>
       <UserOutput userName = "Tushar"/> */}
       
      </div>
      
    );
  }
}

export default App;
