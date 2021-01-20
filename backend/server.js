const app = require('./app');

const mongoose = require('mongoose');

const port = process.env.port || 8000;
require('dotenv').config();

const serverURI='http://localhost:'+port;
const mongoURI=process.env.MONGO_URI;

app.listen(port, () => console.log('Webserver running at:' +serverURI));
