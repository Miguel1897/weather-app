require('dotenv').config(); // Cargar las variables de entorno del archivo .env
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const searchRoutes = require('./routes/search');

const app = express();
const PORT = process.env.PORT || 5001; // Cambia 5000 a 5001 o cualquier otro puerto disponible

// Middleware
app.use(cors()); // Manejo de CORS
app.use(express.json()); // Parseo del cuerpo de las solicitudes en formato JSON

// Rutas de la API
app.use('/api/search', searchRoutes); // Rutas para las búsquedas

// Conectar a MongoDB y luego iniciar el servidor
connectDB()
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Salir del proceso si hay un error de conexión a la base de datos
    });
