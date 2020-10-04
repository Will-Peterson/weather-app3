import React from 'react';
import './DateTimeDisplay.css';

function DateTimeDisplay() {
    return (
        <div className='datetime-container'>
            <div className='day-of-week'>Monday</div>
            <hr />
            <div className='date'>October 03, 2020</div>
            <hr />
            <div className='time'>6:18 PM</div>
        </div>
    );
}

export default DateTimeDisplay;