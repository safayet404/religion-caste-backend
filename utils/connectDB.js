const { default: mongoose } = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
    try {
        console.log(process.env.MONGODB_URI);

        await mongoose.connect(process.env.MONGODB_URI)

        console.log("DB Connected", process.env.MONGODB_URI);

    } catch (error) {
        console.log("DB Connect Error" + error);

    }
}

module.exports = dbConnection