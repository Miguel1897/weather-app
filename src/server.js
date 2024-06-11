const mongoose = require('mongoose');
const express = require('express');
const searchRoutes = require('./routes/search');
const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Middleware
app.use(express.json());

// Rutas de la API
app.use('/api/search', searchRoutes);

module.exports = app;
