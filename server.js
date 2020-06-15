const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Server.js listening on port 3000');
  res.send('Hello world!');
});

app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);

app.listen(PORT);
