import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import CitySelector from './components/CitySelector';
import CitySearch from './components/CitySearch';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar';

const API_KEY = '30d38b26954359266708f92e1317dac0';

function fetchWeather(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos del clima');
            }
            return response.json();
        });
}

function App() {
    const [city, setCity] = useState('Tucuman');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetchWeather(city)
            .then(data => {
                if (data.cod === 200) {
                    setWeatherData(data);
                } else {
                    console.error('Error en la solicitud:', data.message);
                }
            })
            .catch(error => {
                console.error('Error al obtener datos del clima:', error.message);
            });
    }, [city]);

    const handleCitySearch = async (searchCity) => {
        try {
            const response = await fetch('http://localhost:5001/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ciudad: searchCity }),
            });
            if (!response.ok) {
                throw new Error('Error al guardar la búsqueda en la base de datos');
            }
            setCity(searchCity);
        } catch (error) {
            console.error('Error al guardar la búsqueda:', error.message);
        }
    };

    const saveCityToDatabase = async (selectedCity) => {
        try {
            const response = await axios.post('http://localhost:5001/api/cities', { city: selectedCity });
            console.log('City saved to database:', response.data);
        } catch (error) {
            console.error('Error saving city to database:', error.message);
        }
    };

    return (
        <div>
            <Navbar/>
            <CitySelector onCityChange={setCity} saveCityToDatabase={saveCityToDatabase} />
            <CitySearch onSearch={handleCitySearch} />
            <Weather weatherData={weatherData} />
            <Footer /> 
        </div>
    );
}

export default App;
