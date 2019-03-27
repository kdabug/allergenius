const { Router } = require('express');
const { Country, Language, City } = require('../models');

const countriesRouter = Router();

countriesRouter.get('/', async (req, res) => {
  try {
    const countries = Country.findAll();
    res.json({ countries })
  }
  catch (e) {
    console.log(e);
  }
});

countriesRouter.get('/:id', async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    res.json({ country });
  }
  catch(e) {
    console.log(e);
  }
});

countriesRouter.post('/', async (req, res) => {
  try {
    const { name } = req.body
    const country = await Country.create({
      name
    })
    res.json(country.dataValues)
  }
  catch(e) {
    console.log(e);
  }
});

module.exports = countriesRouter;
