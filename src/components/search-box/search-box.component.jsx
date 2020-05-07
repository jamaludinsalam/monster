import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search center' 
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
)