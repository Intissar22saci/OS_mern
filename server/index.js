const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 8000; // Define your desired port


// Middleware to parse JSON requests
app.use(express.json(),cors());
const uri = process.env.MONGODB_URL;

//connecting MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("db Connected"))


// Example route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express app!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});