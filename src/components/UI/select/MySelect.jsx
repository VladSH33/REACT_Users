import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select 
            value={value}
            onChange={event => onChange(event.target.value)}
            style={{color: 'black'}}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value} style={{color: 'black'}}>
                    {option.name}
                </option>
            )}
            
        </select>
    );
};

export default MySelect;