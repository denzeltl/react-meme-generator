import React from 'react';

function MemeOutput({ randomImage, topText, bottomText }) {
    return (
        <div className="meme-output">
            <img src={randomImage} alt="" />
            <h2 className="top">{topText}</h2>
            <h2 className="bottom">{bottomText}</h2>
        </div>
    );
}

export default MemeOutput;
