import React from 'react';

const userInput = (props) => {

    return <input type="text" onChange={props.change} value={props.value}/>
}

export default userInput