import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {

    const [input, setInput] = useState('');
    const onInputChange = ev => {
        // console.log(ev);
        setInput(ev.target.value);
    };

    const onSearch = () => {
        // https://www.api.tvmaze.com/search?q=men

        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
            .then(r => r.json())
            .then(result => {
                console.log(result);
            })
    };

    const onKeyDown = (ev) => {
        if (ev.keyCode === 13) {
            // console.log(ev.keyCode);
            onSearch();
        }
    }

    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <button type="button" onClick={onSearch}>Search</button>
        </MainPageLayout>
    );
};

export default Home;
