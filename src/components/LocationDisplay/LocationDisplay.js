import React, { useState } from 'react';
import './LocationDisplay.css';

const api = {
    key: "92c5b33d068b27b720de1e01cb7c3c38",
    url: "api.openweathermap.org/data/2.5/weather?q="
};


const LocationDisplay = () => {

    const [location, setLocation] = useState('');
    const [currentWeather, setCurrentWeather] = useState({});

    const fetchData = (e) => {
        fetch(`${api.url}paris&appid=${api.key}`)
            .then(result => result.json())
            .then(res => {
                setLocation('');
                setCurrentWeather(res);
            });
    }

    const search = e => {
        if (e.key === 'Enter') fetchData(e);
    }

    const submit = (e) => {
        fetchData(e);
    }

    const date = (d) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getDate()];
        let year = d.getFullYear();
    }

    function updateLocation(e) {
        setLocation(e.target.value);
    }

    return (
        <div className='location-container'>
            <input 
                type='text'
                placeholder='location...' 
                name='location'
                className='search-bar'
                onChange={updateLocation}
                value={location}
                onKeyPress={search}
            />
            <button 
                onChange={submit}
                className='material-icons'>search
            </button>
        </div>
    );
}

export default LocationDisplay;