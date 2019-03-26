const { Router } = require('express');


const {
  hasher,
  genToken,
  comparePassword,
} = require('../auth');

const usersRouter = Router();


module.exports = usersRouter;
