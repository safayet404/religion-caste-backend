const mongoose = require('mongoose');

const casteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    religion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Religion',
        required: true,
    },
});

const Caste = mongoose.model('Caste', casteSchema);

module.exports = Caste;
