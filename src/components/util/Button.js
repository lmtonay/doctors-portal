import React from 'react';
import '../../styles/Button.css';

export default function Button ({children, ...rest}) {
    return (
        <button className='button' {...rest}>
            {children}
        </button>
    );
};