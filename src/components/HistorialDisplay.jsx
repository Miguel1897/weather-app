import React from 'react';

const HistorialDisplay = ({ historial }) => {
  return (
    <div>
      <h2>Historial de Búsquedas</h2>
      <ul>
        {historial.map((item) => (
          <li key={item._id}>{item.ciudad} - {new Date(item.fecha).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistorialDisplay;
