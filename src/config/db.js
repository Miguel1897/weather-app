const mongoose = require('mongoose');
const password = 'admin'; 

const uri = `mongodb+srv://admin:${password}@cluster0.v7hj7jk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Salir del proceso si hay un error de conexión
    }
};

module.exports = connectDB;
