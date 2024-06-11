import React, { useState, useEffect } from 'react';
import Weather from './components/Weather';
import CitySelector from './components/CitySelector';
import CitySearch from './components/CitySearch';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar';

const API_KEY = '30d38b26954359266708f92e1317dac0';

function fetchWeather(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`)
        .then(response => response.json());
}

function App() {
    const [city, setCity] = useState('Tucuman');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetchWeather(city).then(data => {
            if (data.cod === 200) {
                setWeatherData(data);
            } else {
                console.error('Error en la solicitud:', data.message);
            }
        });
    }, [city]);

    return (
        <div>
            <Navbar/>
            <CitySelector onCityChange={setCity} />
            <CitySearch onSearch={setCity} />
            <Weather weatherData={weatherData} />
            <Footer /> 
        </div>
    );
}

export default App;
