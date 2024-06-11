import React, { useState } from 'react';

const CitySearch = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query); // Llamar a la función onSearch para iniciar la búsqueda
            setQuery('');
            setError('');
        } else {
            setError('Por favor, ingrese el nombre de una ciudad.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="buscar-form">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar ciudad"
                className="buscar-input"
            />
            <button type="submit" className="buscar-btn">Buscar</button>
            {error && <p className="error-msg">{error}</p>}
        </form>
    );
}

export default CitySearch;
