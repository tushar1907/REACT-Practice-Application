
import React from 'react';

//import Person from './Person/Person';
import classes from './Cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnCLass = ''
    
    if(props.showPerson){
        btnCLass = classes.red
    }
    if(props.person.length <= 1){
        assignedClasses.push(classes.red);
    }
    if(props.person.length === 0){
        assignedClasses.push(classes.bold);
    }
     return (
        <div className={classes.Cockpit}>
            <h1>Hi I am a React App</h1>
            <p className={assignedClasses.join(' ')}> This is really Awesosme !</p>            
            <button className={btnCLass} onClick={this.togglePersonsHandler}>Switch Person</button>
        </div>
    );

}

export default cockpit;



