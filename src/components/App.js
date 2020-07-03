import React, { useState, useEffect } from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

function App() {
    const [memeArray, setMemeArray] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((data) => setMemeArray(data.data.memes));
    }, []);

    return (
        <div className="App">
            <Header />
            <MemeGenerator memeArray={memeArray} />
        </div>
    );
}

export default App;
