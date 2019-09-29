import React from 'react';

const Ball = props => {
    return (
        <div className="ball">
            <p>{props.value}</p>
        </div>
    );
};

export default Ball;