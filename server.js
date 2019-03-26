const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

const PORT = 3000;

const usersRouter = require('./routes/usersRouter');

const app =  express();

app.use(cors());
app.use(bodyparser());
app.use(logger());

app.get('/', (req, res) => {
  res.json({msg: 'This is a test'});
});

app.use('/users', usersRouter)

app.listen(PORT, () => console.log(`Running on on port ${PORT}`));
