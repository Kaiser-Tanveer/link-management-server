const express = require('express');
const routes = express.Router();

// Define your routes
routes.get('/', (req, res) => {
    res.send('Link Management Server is Running.....');
});


module.exports = routes;
