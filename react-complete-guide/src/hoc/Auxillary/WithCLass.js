import React from 'react';

const withClass = (props) => {
    <div className={props.classes}>
        {props.children}
    </div>

    return null
}

export default withClass;