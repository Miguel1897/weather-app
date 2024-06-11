const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
  ciudad: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Search', SearchSchema);
