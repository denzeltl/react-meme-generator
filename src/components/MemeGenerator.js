import React, { useState } from 'react';
import MemeOutput from './MemeOutput';

function MemeGenerator({ memeArray }) {
    const [inputTexts, setInputTexts] = useState({
        topText: '',
        bottomText: '',
    });
    const [randomImage, setRandomImage] = useState('http://i.imgflip.com/1bij.jpg');

    const handleSubmit = (e) => {
        e.preventDefault();
        const randNum = Math.floor(Math.random() * memeArray.length);
        const randMeme = memeArray[randNum].url;
        setRandomImage(randMeme ? randMeme : 'http://i.imgflip.com/1bij.jpg');
    };

    const handleChange = (e) => {
        setInputTexts({
            ...inputTexts,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputTexts.topText} onChange={handleChange} name="topText" placeholder="Top Text" />
                <input type="text" value={inputTexts.bottomText} onChange={handleChange} name="bottomText" placeholder="Bottom Text" />
                <button>Generate</button>
            </form>
            <MemeOutput randomImage={randomImage} topText={inputTexts.topText} bottomText={inputTexts.bottomText} />
        </div>
    );
}

export default MemeGenerator;
