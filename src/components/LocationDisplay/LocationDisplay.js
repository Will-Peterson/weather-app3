import React, { useState } from 'react';
import './LocationDisplay.css';

const LocationDisplay = () => {

const [search, setSearch] = useState('');

function updateSearch(e) {
    setSearch(e.target.value);
}

    return (
        <div className='location-container'>
            <input 
                type='text'
                placeholder='location...' 
                name='location'
                className='search-bar'
                onChange={updateSearch}
            />
            <button className='material-icons'>search</button>
        </div>
    );
}

export default LocationDisplay;