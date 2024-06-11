import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const CitySelector = ({ onCityChange, saveCityToDatabase }) => {
    const cities = ['Hawai', 'Londres', 'Miami', 'Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'Mar del Plata'];

    const handleChange = (selectedCity) => {
        onCityChange(selectedCity);
        saveCityToDatabase(selectedCity);
    };

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {cities.map((city, index) => (
                <Link
                    key={index}
                    underline="hover"
                    color="inherit"
                    onClick={() => handleChange(city)}
                >
                    {city}
                </Link>
            ))}
        </Breadcrumbs>
    );
}

export default CitySelector;
