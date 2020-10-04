import React from 'react';
import './LocationDisplay.css';

// const [latitude, getLatitude] = useState('');
// const [longitude, getLongitude] = useState('');
let latitude = '';
let longitude = '';

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoPosition);
} else {
    console.log('no connection');
}

function geoPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

function LocationDisplay() {
    return (
        <div className='location-container'>
            {latitude}<br/>
            {longitude}
            {/* Your latitude: {latitude}<br />
            Your longitude: {longitude} */}
        </div>
         
  

        
        
    );
}
// console.log(navigator.geolocation.getCurrentPosition());

export default LocationDisplay;