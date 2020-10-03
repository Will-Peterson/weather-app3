import React from 'react';
import './App.css';
import Location from '../location/Location';
import TimeAndPlace from '../timeandplace/TimeAndPlace';
import WeatherDisplay from '../weatherdisplay/WeatherDisplay'; 

function App() {
  return (
    <div className="main-container">
      <Location />
      <TimeAndPlace />
      <WeatherDisplay />
    </div>
  );
}

export default App;
