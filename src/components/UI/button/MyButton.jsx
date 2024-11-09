import React from 'react';
import clsx from 'clsx';
import classes from './MyButton.module.less';
import './MyButton.module.less';

const MyButton = ({children, red, green, ...props}) => {
    return (
        <button {...props} className={clsx(classes.button, {[classes.red]: red }, {[classes.green]: green })} >
            {children}
        </button>
    );
};

export default MyButton;