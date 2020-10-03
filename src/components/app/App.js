import React from 'react';
import './App.css';
import QueryInput from '../queryinput/QueryInput';
import TimeAndPlace from '../timeandplace/TimeAndPlace';
import WeatherDisplay from '../weatherdisplay/WeatherDisplay'; 

function App() {
  return (
    <div className="main-container">
      <QueryInput />
      <TimeAndPlace />
      <WeatherDisplay />
    </div>
  );
}

export default App;
