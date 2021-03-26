import React from 'react';

const Checkbox = ({options, setter}) => {

    const renderedItems = options.map( (item, index) => {
        return (
            <form key={ item.label }>
                <input 
                    type="checkbox"
                    checked={ item.status }
                    onChange={ () => {
                        let newArr = [...options];
                        newArr[index] = {...item, status: !item.status}
                        console.log(newArr);
                        setter(newArr);
                    }}
                />
                <label style={{ marginLeft: 5}}>{ item.label }</label>
            </form>
        );
    });

    return (
        <div id="checkbox">
            { renderedItems }
        </div>
    );
};

export default Checkbox;