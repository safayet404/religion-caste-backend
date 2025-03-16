const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    company: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    religion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Religion",
        required: true,
    },
    caste: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Caste",
        required: true,
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
