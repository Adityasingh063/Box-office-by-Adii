
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config'

const Home = () => {

    const [input, setInput] = useState('');
    const [results, setResults] = useState('');

    const onInputChange = ev => {
        // console.log(ev);
        setInput(ev.target.value);
    };

    const onSearch = () => {
        // https://www.api.tvmaze.com/search?q=men

        // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        //     .then(r => r.json())
        //     .then(result => {
        //         console.log(result);
        //         setResults(result);
        //     })

         apiGet(`/search/shows?q=${input}`).then(result => {
                    setResults(result);
         })
    };

    const onKeyDown = (ev) => {
        if (ev.keyCode === 13) {
            // console.log(ev.keyCode);
            onSearch();
        }
    }
    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>NO RESULT</div>
        }
        if (results && results.length > 0) {
            return (
                <div>
                    {results.map(item => (
                        <div key={item.show.id}>
                            {item.show.name}
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };


    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <button type="button" onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayout>
    );
};

export default Home;
