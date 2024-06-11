const express = require('express');
const router = express.Router();
const Search = require('../models/Search');

// Guardar una búsqueda
router.post('/', async (req, res) => {
  const { ciudad } = req.body;
  try {
    let search = new Search({ ciudad });
    await search.save();
    res.json(search);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Obtener historial de búsquedas
router.get('/', async (req, res) => {
  try {
    const searches = await Search.find().sort({ fecha: -1 });
    res.json(searches);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
