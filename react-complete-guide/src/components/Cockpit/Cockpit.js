
import React from 'react';

//import Person from './Person/Person';
import classes from './Cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnCLass = ''
    
    if(props.showPerson){
        btnCLass = classes.Red
    }
    if(props.person.length <= 1){
        assignedClasses.push(classes.red);
    }
    if(props.person.length === 0){
        assignedClasses.push(classes.bold);
    }
     return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}> List is empty </p>            
            <button className={btnCLass} onClick={props.togglePersonsHandler}>Switch Person</button>
        </div>
    );

}

export default cockpit;



