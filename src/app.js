const express = require('express');
const cors = require('cors');
const db = require('./utils/database');
const User = require('./models/users.model');
const userRoutes = require('./routes/user.routes');

const app = express();

const PORT = 8000;

User;

db.authenticate()
  .then(() => console.log('DB connection successful'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Database synchronized'))
  .catch(err => console.log(err));

app.use(cors());

app.use(express.json());

app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my server');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
