import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const CitySelector = ({ onCityChange }) => {
    const cities = ['Hawai', 'Londres', 'Miami', 'Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'Mar del Plata'];
    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
        const selectedCity = event.target.value;
        setCity(selectedCity);
        onCityChange(selectedCity);
    };

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {cities.map((city, index) => (
                <Link
                    key={index}
                    underline="hover"
                    color="inherit"
                    onClick={() => handleChange({ target: { value: city } })}
                >
                    {city}
                </Link>
            ))}
        </Breadcrumbs>
    );
}

export default CitySelector;
