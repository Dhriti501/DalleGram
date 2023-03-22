const express = require('express');
const dotenv = require('dotenv').config();
const port = 4000;

const app = express();

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/openai', require('./routes/openaiRoutes'))



app.listen(port, () => console.log(`Server started on port ${port}`));