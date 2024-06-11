
import React from 'react';

const Weather = ({ weatherData }) => {
    if (!weatherData) return <p>Cargando...</p>;
    if (weatherData.cod !== 200) return <p>Ciudad no encontrada</p>;

    const weather = weatherData.weather[0];
    const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}.png`;

    return (
        <div>
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <img className="weather-icon" src={iconUrl} alt={weather.description} />
            <p className="temp">Temperatura actual: {weatherData.main.temp}°C</p>
            <p>Temperatura mínima: {weatherData.main.temp_min}°C</p>
            <p>Temperatura máxima: {weatherData.main.temp_max}°C</p>
            <p>Humedad: {weatherData.main.humidity}%</p>
        </div>
    );
}

export default Weather;
