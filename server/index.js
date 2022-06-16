const express = require('express');
const cors = require('cors')

const SERVER_PORT = 3001;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(SERVER_PORT, () => {
  console.log(`Example app listening on port ${SERVER_PORT}`);
});
