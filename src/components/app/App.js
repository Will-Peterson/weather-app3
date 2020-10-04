import React from 'react';
import './App.css';
import LocationDisplay from '../LocationDisplay/LocationDisplay';
import DateTimeDisplay from '../DateTimeDisplay/DateTimeDisplay';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'; 

function App() {
  return (
    <div className="app-container">
      <LocationDisplay />
      <div className='datetime-weather-container'>
        <DateTimeDisplay />
        <WeatherDisplay />
      </div>
    </div>
  );
}

export default App;
