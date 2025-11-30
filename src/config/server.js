const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json()); // Middleware to parse JSON requests

const PORT = process.env.PORT || 5000;

module.exports = { app, PORT };