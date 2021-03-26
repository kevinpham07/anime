import React, { useState } from 'react';

const Dropdown = ({ options, setValue, value, label }) => {
    const [open, setOpen] = useState(false);

    const renderedItems = options.map( (anime) => {
        return <div key={ anime.num } onClick={ () => setValue(anime.num) } className="item">{ anime.num }</div>
    })

    return (
        <div id="dropdown">
            <p>{ label }</p>
            <br />
            <div onClick={ () => setOpen(!open) } className={ `ui compact selection dropdown ${ open ? 'visible active' : '' }` }>
                <div className="text">{ value }</div>
                <i className="dropdown icon" />
                <div className={ `menu ${ open ? 'visible transition' : '' }` }>
                    { renderedItems }
                </div>
            </div>        
        </div>
    );
};

export default Dropdown;