import React, { Component } from 'react'; 
import './Person.css';

const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}> my name is {props.name} and my age is {props.age}</p>
            <p> {props.children} </p>
            <input onChange={props.change} value={props.name}/>
        </div>    
    )
}


export default person;