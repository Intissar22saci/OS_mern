//app.js
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectRoutes');
const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/mern");


app.use(session({
  secret: 'intissar',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },

}));
app.use(cors());

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', taskRoutes);
app.use('/api', projectRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
