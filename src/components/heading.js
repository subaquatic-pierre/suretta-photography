import React from 'react';
import Divider from './divider';

const Heading = props => {
    return (
        <div className='header-div'>
            <h1 >{props.text}</h1>
            <Divider />
        </div>
    )
}

export default Heading