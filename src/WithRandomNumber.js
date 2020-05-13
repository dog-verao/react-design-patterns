import React, { useState } from 'react';

export const WithRandomNumber = WrappedComponent => 
    function Comp(props) {
        const [randomNumber, setRandomNumber ] = useState(0);
        const resetNumber = () => setRandomNumber(Math.floor(Math.random() * 100))

        return (
            <div className="Box">
                <WrappedComponent {...props} randomNumber={randomNumber} />
                <button className="button is-dark" onClick={resetNumber}>Generate Number</button>
            </div>
    )
}