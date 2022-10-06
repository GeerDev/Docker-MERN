const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
    title: {
        type: String
    }
}, { timestamps: true });

const Text = mongoose.model('Text', TextSchema);

module.exports = Text;