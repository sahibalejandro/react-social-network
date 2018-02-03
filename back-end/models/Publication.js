const mongoose = require('mongoose');

module.exports = mongoose.model('Publication', mongoose.Schema({
    body: String,
}));
