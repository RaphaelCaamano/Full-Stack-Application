const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Use the item routes
app.use('/api/items', itemRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
