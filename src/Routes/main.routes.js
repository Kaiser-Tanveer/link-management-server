const express = require('express');
const routes = express.Router();

// Root route
routes.get('/', (req, res) => {
    res.send('Link Management Server is Running.....');
});

module.exports = routes;
