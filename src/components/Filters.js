import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Checkbox from './Checkbox';

const Filters = ({ submit }) => {
    const [numberOfAnimes, setNumberOfAnimes] = useState(3);
    const [score, setScore] = useState(null);
    const [genres, setGenres] = useState([
        { label: 'Adventure', status: false, input: 'adventure' },
        { label: 'Action', status: false, input: 'action' },
        { label: 'Comedy', status: false, input: 'comedy' },
        { label: 'Drama', status: false, input: 'drama' },
        { label: 'Mystery', status: false, input: 'mystery' },
        { label: 'Fantasy', status: false, input: 'fantasy' },
        { label: 'Romance', status: false, input: 'romance' },
        { label: 'School', status: false, input: 'school' },
        { label: 'Vampire', status: false, input: 'vampire' },
        { label: 'Music', status: false, input: 'music' },
        { label: 'Horror', status: false, input: 'horror' },
        { label: 'Zombies', status: false, input: 'zombies' },
        { label: 'Supernatural', status: false, input: 'supernatural' },
        { label: 'Slice of Life', status: false, input: 'slice' }
    ])
    
    const numberOfAnimesDropdown = [
        { num: 1 },
        { num: 2 },
        { num: 3 },
        { num: 4 },
        { num: 5 },
        { num: 6 },
        { num: 7 },
        { num: 8 },
        { num: 9 },
        { num: 10 }
    ]

    const scoreDropdown = [
        { num: null },
        { num: 60 },
        { num: 65 },
        { num: 70 },
        { num: 75 },
        { num: 80 },
        { num: 85 }
    ]

    const submissionObject = { pageLimit: numberOfAnimes, aGenres: genres, aScore: score }
    
    return (
        <div id="filters">
            <Dropdown
                label="Number of animes to show"
                value={ numberOfAnimes }
                setValue={ setNumberOfAnimes }
                options={ numberOfAnimesDropdown }
            />
            <Dropdown
                label="Filter by score"
                value={ score }
                setValue={ setScore }
                options={ scoreDropdown }
            />
            <Checkbox
                options={ genres }
                setter={ setGenres }
            />
            <button
                className="ui secondary button"
                onClick={ () => submit(submissionObject) }
            >
                Reroll
            </button>
        </div>
    );
};

export default Filters;