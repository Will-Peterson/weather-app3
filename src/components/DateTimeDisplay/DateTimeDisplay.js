import React from 'react';
import './DateTimeDisplay.css';
import LocationDisplay from '../LocationDisplay/LocationDisplay';

function DateTimeDisplay() {
    return (
        <div className='datetime-container'>
            <div className='day-of-week'>Monday</div>
            <hr />
    <div className='date'>October 03, 2020{year}</div>
            <hr />
            <div className='time'>6:18 PM</div>
        </div>
    );
}

export default DateTimeDisplay;