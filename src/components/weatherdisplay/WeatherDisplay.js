import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay() {
    return (
        <div className='weather-container'>
            <div>45 F</div>
            <div style={{backgroundColor:'red',height:'75px', width:'75px'}}>image</div>
            <div>RAIN</div>
        </div>
    );
}

export default WeatherDisplay;