import React from 'react';
import { FaSun } from 'react-icons/fa'; // Importa el icono de clima

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <FaSun className="weather-icon" />
                <h1 className="titulo">Clima diario</h1>
            </div>
        </nav>
    );
}

export default Navbar;
