import React from 'react';
import './WeatherDisplay.css';
import Alien from '../../images/wi-alien.svg';
import LocationDisplay from '../LocationDisplay/LocationDisplay';

function WeatherDisplay() {
    return (
        <div className='weather-container'>
            <div className='degrees'>45 F</div>
            <div className='forcast-img'><img src={Alien} /></div>
            <div className='forcast'>RAIN</div>
        </div>
    );
}

export default WeatherDisplay;