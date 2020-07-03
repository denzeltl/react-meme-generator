import React from 'react';

function MemeOutput({ randomImage, topText, bottomText }) {
    return (
        <div>
            <img src={randomImage} alt="" />
            <h2>{topText}</h2>
            <h2>{bottomText}</h2>
        </div>
    );
}

export default MemeOutput;
