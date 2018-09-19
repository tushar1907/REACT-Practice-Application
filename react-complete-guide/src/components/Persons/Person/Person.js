import React, { PureComponent } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types'
import { AuthContext } from '../../../containers/App'

class Person extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor', props)
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount')
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount')
        if(this.props.position === 0 ){
            this.inputElement.current.focus();
        }
        
    }
    render() {
        console.log('[Person.js] Inside render')
        return (
            <div className={classes.Person}>
                <AuthContext.Consumer>{auth=> auth ? <p>I'm authenticated</p>: null}</AuthContext.Consumer>
                <p onClick={this.props.click}> my name is {this.props.name} and my age is {this.props.age}</p>
                <p> {this.props.children} </p>
                <input 
                ref= {this.inputElement}
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