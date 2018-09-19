
import React from 'react';

//import Person from './Person/Person';
import classes from './Cockpit.css'

import Aux from '../../hoc/Auxillary/Auxillary'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnCLass = classes.Button

    if (props.showPerson) {
        btnCLass = [classes.Button, classes.Red].join('');
    }
    if (props.person.length <= 1) {
        assignedClasses.push(classes.red);
    }
    if (props.person.length === 0) {
        assignedClasses.push(classes.bold);
    }
    return (
        // <div className={classes.Cockpit}>
            <Aux>
                <h1>{props.appTitle}</h1>
                <p className={assignedClasses.join(' ')}> List is empty </p>
                <button className={btnCLass} onClick={props.togglePersonsHandler}>Switch Person</button>
                <button onClick={props.login}>Log In</button>
            </Aux>

        // </div>
    );

}

export default cockpit;



