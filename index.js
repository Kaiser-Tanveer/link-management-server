const express = require('express');
const cors = require('cors');
require('dotenv').config();

const testRoutes = require('./Routes/main.routes');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// App's Routes 
app.use('/', testRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on : ${port}`);
});
