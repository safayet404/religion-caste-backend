const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dbConnection = require('./utils/connectDB')
const cors = require('cors');
const app = express()
const port = 5000

dbConnection()

app.use(cors());

app.use(bodyParser.json())
const religionRoutes = require('./routes/religionRoutes')
const casteRoutes = require('./routes/casteRoutes')
const userRoutes = require('./routes/userRoutes')
app.use('/api/religions', religionRoutes)
app.use('/api/castes', casteRoutes)
app.use('/api/user', userRoutes)

app.use(morgan("dev"))
app.listen(port, () => {
    console.log(`Server running on port ${port}`);

})