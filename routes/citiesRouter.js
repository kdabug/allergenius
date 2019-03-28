const { Router } = require('express');
const { City } = require('../models');

const citiesRouter = Router();

citiesRouter.get('/', async (req, res) => {
  try {
    const cities = await City.findAll();
    res.json({ cities })
  }
  catch (e) {
    console.log(e);
  }
});



module.exports = citiesRouter
