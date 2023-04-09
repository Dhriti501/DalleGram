const express = require('express');
const dotenv = require('dotenv').config();
const port = 4000;

const app = express();

// Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a 
// server to indicate any origins (domain, scheme, or port) other than its own from which 
// a browser should permit loading resources.

const cors = require('cors')
app.use(cors())


app.use(express.json())
// The express.urlencoded() function is a built-in middleware function in Express. 
// It parses incoming requests with URL-encoded payloads and is based on a body parser.
app.use(express.urlencoded({extended:false}))

app.use('/openai', require('./routes/openaiRoutes'))

app.use('/mongodb', require('./routes/mongodbRoutes'))



app.listen(port, () => console.log(`Server started on port ${port}`));