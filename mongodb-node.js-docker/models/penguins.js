const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Penguin = new Schema ({
        name: { type: String, required: true },
        color: { type: String, required: true },
});

module.exports = mongoose.model('Penguin', Penguin);