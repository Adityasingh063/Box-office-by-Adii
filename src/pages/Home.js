
import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config'

const Home = () => {

    const [input, setInput] = useState('');
    const [results, setResults] = useState('');
    const [searchOption, setSearchOption] = useState('shows');
    const isShowsSearch = searchOption === 'shows';


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

        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result);
        })
    };

    const onKeyDown = (ev) => {
        if (ev.keyCode === 13) {
            // console.log(ev.keyCode);
            onSearch();
        }
    }


    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value);
    }

    console.log(searchOption);

    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>NO RESULT</div>
        }
        if (results && results.length > 0) {
            return (results[0].show ?
                (
                    <ShowGrid  data = {results}/>
                ) :(
                    <ActorGrid data={results}/>
                )
            );
        }
        return null;
    };


    return (
        <MainPageLayout>
            <input type="text"
                placeholder="Search Something"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input} />

            <div>
                <label htmlFor="shows-search">
                    Shows
                <input id="shows-search" type="radio" value="shows" onChange={onRadioChange} checked={isShowsSearch} />
                </label>

                <label htmlFor="actor-search">
                    Actors
                <input id="actors-search" type="radio" value="people" onChange={onRadioChange} checked={!isShowsSearch} />
                </label>
            </div>

            <button type="button"
                onClick={onSearch}>
                Search
            </button>

            {renderResults()}
        </MainPageLayout>
    );
};

export default Home;
