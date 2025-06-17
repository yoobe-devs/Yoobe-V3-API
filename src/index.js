
const express = require('express');
const app = express();
const routes = require('./routes');
require('dotenv').config();

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Yoobe API running on port ${PORT}`);
});
