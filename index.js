const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dbConnection = require('./utils/connectDB')
const cors = require('cors');
const app = express()
const port = 5000

dbConnection()
const corsOptions = {
    origin: '*',  // Allow all origins (for testing only)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use(bodyParser.json())
const religionRoutes = require('./routes/religionRoutes')
const casteRoutes = require('./routes/casteRoutes')

app.use('/api/religions', religionRoutes)
app.use('/api/castes', casteRoutes)

app.use(morgan("dev"))
app.listen(port, () => {
    console.log(`Server running on port ${port}`);

})