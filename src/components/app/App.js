import React, { useState } from "react";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';

const api = {
  key: "92c5b33d068b27b720de1e01cb7c3c38",
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
};

const useStyles = makeStyles({
  inputStyle: {
  },
  titleStyle: {
  },
  toolbarStyle: {
  },
  spanStyle: {
  }
});

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState("");
  const [city, setCity] = useState("Sacramento");
  const [temp, setTemp] = useState(72);
  const [country, setCountry] = useState("US");
  const [conditionsMain, setConditionsMain] = useState("Clear");
  const [conditionsDescription, setConditionsDescription] = useState("clear sky");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [pressure, setPressure] = useState('');
  const [humidity, setHumidity] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [windDeg, setWindDeg] = useState('');

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.url}${query}&units=imperial&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity(result.name);
          setTemp(result.main.temp);
          setCountry(result.sys.country);
          setConditionsMain(result.weather[0].main);
          setConditionsDescription(result.weather[0].description);
          setWeatherIcon(result.weather[0].icon);
          setLongitude(result.coord.lon);
          setLatitude(result.coord.lat);
          setPressure(result.main.pressure);
          setHumidity(result.main.humidity);
          setWindSpeed(result.wind.speed);
          setWindDeg(result.wind.deg);
          setQuery("");
        });
    }
    return weather;
  };

  const classes = useStyles();
  
  return (
    <Container 
      maxWidth='sm'
    >

    <div className="app-container">

      {/**
       * SECTION 1
       */}

            <FormControl 
              fullWidth 
              className={classes.margin} 
              variant="filled"
              focused
              // styles={{marginBottom: '20px'}} 
            >
              <InputLabel 
                // style={{color: 'black', fontWeight: 900}} 
                htmlFor="filled-adornment-amount">
                City
              </InputLabel>
                <FilledInput
                  // style={{color: 'white', backgroundColor: 'inherit'}}
                  id="filled-adornment-amount"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={search}
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  />
            </FormControl>

      {/**
       * SECTION 2
       */}

      <Chip
        className={classes.chiplabelStyle}
        style={{color: '#3f51b5', fontWeight: 300, paddingBottom: 5}}
        size="large"
        label={
          <>
          <Icon style={{marginBottom: -8, marginLeft: -10}}>place</Icon>
          <span style={{paddingBottom: 30, fontFamily: 'cursive'}}>{city}, {country}</span>
          </>
          }
        />
      

      {/**
       * SECTION 3
      */}

      <div className='main'>
        <div style={{color: 'white', textAlign: 'center', fontWeight: 700, fontSize: '5rem'}}>
          <p>{temp}°</p>
        </div>
        <p>weather main: {conditionsMain}</p>

        implement for development only
        wait for useEffect() to display after DOM render
        <p><img src={(`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`)} alt="" /></p>


        <p>weather description: {conditionsDescription}</p>
      </div>

      {/**
       * SECTION 4 (OPTIONAL)
      */}

      <div className='extra'>
        <div>Latitude: {latitude}<br/>Longitude: {longitude}</div>
        <div>Humidity: {humidity}</div>
        <div>Pressure: {pressure}</div>
        <div>Wind Speed: {windSpeed}</div>
        <div>Wind Degrees: {windDeg}</div>
      </div>

    </div>
    </Container>
  );
}
export default App;
