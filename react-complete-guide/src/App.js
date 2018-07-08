import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person: [
      {name:'Max' , age: 28 },
      {name:'Samnu' , age: 26 }
    ]
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

  nameChangedHandler = (event) => {
    
    this.setState({
      person: [
        {name:"Tushar" , age: 28 },
        {name:event.target.value , age: 30 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
       <h1>Hi I am a React App</h1>
       <button onClick={this.SateHandler.bind(this,"Sanjeev")}>Switch</button>
       <Person click={this.SateHandler.bind(this,"Suman")} 
       name={this.state.person[0].name}
       age={this.state.person[0].age}> my hobbies are XYZ</Person>
       <Person name={this.state.person[1].name} age={this.state.person[1].age} change={this.nameChangedHandler}/>
       <Person />
      </div>
    );
  }
}

export default App;
