const mongoose = require('mongoose');
require('dotenv').config(); // Cargar las variables de entorno del archivo .env

const uri = process.env.MONGO_URI;

const connectDB = () => {
    return mongoose.connect(uri); 
};

module.exports = connectDB;
