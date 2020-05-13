import React from 'react';
import {WithRandomNumber} from './WithRandomNumber'

const Hello = ({text, randomNumber}) => {
    
    return (
        <div>
            <h1>Hello, this is the text => {text}</h1>
            <h2>{randomNumber}</h2>
        </div>
    )
}

export const EnhancedHello = WithRandomNumber(Hello)