import React, { PureComponent } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types'

class Person extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor', props)

    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount')
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount')
        if(this.props.position === 0 ){
            this.inputElement.focus();
        }
        
    }
    render() {
        console.log('[Person.js] Inside render')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}> my name is {this.props.name} and my age is {this.props.age}</p>
                <p> {this.props.children} </p>
                <input 
                ref= {(inp) => {this.inputElement = inp}}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
            </div>
        )
        
    }
}

Person.propTypes = {
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed: PropTypes.func
}

export default Person;