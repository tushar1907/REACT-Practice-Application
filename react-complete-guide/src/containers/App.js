import React, { Component } from 'react';

import classes from './App.css';

import Persons from '../components/Persons/Persons'

import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  state = {
    username: 'tushar1907',
    person: [
      { id: 'adtf1', name: 'Max', age: 28 },
      { id: 'plog7', name: 'Samnu', age: 26 }
    ],
    otherState: 'some value person',
    showPerson: false,
    string: ''
  }

  SateHandler = (newValue) => {
    console.log("was clicked !")

    this.setState({
      person: [
        { name: newValue, age: 28 },
        { name: 'Samnu', age: 30 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.person[personIndex] }

    person.name = event.target.value

    const persons = [...this.state.person]

    persons[personIndex] = person

    this.setState({ person: persons })
  }

  inputChangedHandler = (event) => {

    this.setState({
      username: event.target.value
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person]
    persons.splice(personIndex, 1)
    this.setState({ person: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
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

    if (this.state.showPerson) {

      persons =
          <Persons
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        

      style.backgroundColor = 'red'

    }
    return (

      <div className={classes.App}>
        <Cockpit
          showPerson={this.state.showPerson}
          person={this.state.person}
          togglePersonsHandler = {this.togglePersonsHandler}></Cockpit>
        {persons}
      </div>

    );
  }
}

export default App;
