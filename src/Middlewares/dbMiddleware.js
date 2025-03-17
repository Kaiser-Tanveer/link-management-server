const { client } = require("../config/db");

// Middleware to attach client to the request object
const attachClientToRequest = (req, res, next) => {
    req.client = client;
    next();
};

module.exports = attachClientToRequest;
