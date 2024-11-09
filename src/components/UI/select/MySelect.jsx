import React from 'react';

import classes from './MySelect.module.less'

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select 
            value={value}
            onChange={event => onChange(event.target.value)}
            className={classes.mySelect}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value} className={classes.option}>
                    {option.name}
                </option>
            )}
            
        </select>
    );
};

export default MySelect;