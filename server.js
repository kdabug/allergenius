const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

// allow the port to be defined with an env var or a dev value
const PORT = 3000;

// router imports
const usersRouter = require('./routes/usersRouter');

// after importing middleware define app and mount them
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.json({msg: 'Welcome to the allergy place'});
});

app.use('/users', usersRouter);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
