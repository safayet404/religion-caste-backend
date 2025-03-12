const { default: mongoose } = require("mongoose");

const religionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    castes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Caste"

        }
    ]
})

const Religion = mongoose.model('Religion', religionSchema)

module.exports = Religion