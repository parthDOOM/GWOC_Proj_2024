
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/register', (req, res) => {
  const { name, email, phone, date, time } = req.body;
  
  // Perform validation and processing here
  // For example, save the data to a database

  res.json({ message: 'Registration successful' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
