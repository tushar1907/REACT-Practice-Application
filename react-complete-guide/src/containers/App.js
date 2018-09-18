import React, { PureComponent } from 'react';

import classes from './App.css';

import Persons from '../components/Persons/Persons'

import Cockpit from '../components/Cockpit/Cockpit';

import withClass from '../hoc/Auxillary/withClass'

import Aux from '../hoc/Auxillary/Auxillary'

class App extends PureComponent {


  render() {
    console.log('[App.js] Inside render')
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
      <Aux classes>
        <Cockpit appTitle={this.props.title}
          showPerson={this.state.showPerson}
          person={this.state.person}
          togglePersonsHandler={this.togglePersonsHandler}></Cockpit>
        {persons}

      </Aux>

    );
  }

  constructor(props) {
    super(props);
    console.log('[App,js] Inside constructor', props)
    this.state = {
      username: 'tushar1907',
      person: [
        { id: 'adtf1', name: 'Max', age: 28 },
        { id: 'plog7', name: 'Samnu', age: 4 },
        { id: '5s8ds', name: 'Raja', age: 35 },
        { id: 'a6s8d', name: 'Someshwar', age: 60 },
        { id: '2de2r', name: 'Peeku', age: 15 }
      ],
      otherState: 'some value person',
      showPerson: false,
      string: '',
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount')
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[App.js] Inside componentDidUpdate')
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
    this.setState((previousState, props) => {
      return { showPerson: !doesShow, toggleClicked: previousState.toggleClicked + 1 }
    }
)
  }

}

export default withClass(App, classes.App);
