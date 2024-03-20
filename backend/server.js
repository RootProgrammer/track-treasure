// backend/server.js
require('dotenv').config(); // Ensure this is at the top if you're using dotenv for environment variables
require('./config/database'); // Adjust the path according to your project structure

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const authRoutes = require('./routes/auth'); // Adjust path as necessary
app.use('/api/auth', authRoutes);


// Your middleware and routes setup...

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
