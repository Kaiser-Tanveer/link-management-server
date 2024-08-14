const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Link Management Server is Running.....');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on : ${port}`);
});
