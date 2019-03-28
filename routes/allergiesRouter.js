const { Router } = require('express');
const { User, UserAllergy, Allergy } = require('../models');

const allergiesRouter = Router();

allergiesRouter.use((req, res, next) => {
  console.log("allergy router triggered");
  next();
});

//get list of hardcoded allergies
allergiesRouter.get('/', async (req,res) => {
  try {
    console.log('main route triggered');
    const resp = await Allergy.findAll();
    res.json(resp);
  } catch(e) {
    res.status(403).message('invalid request')
  }
});


//set an allergies for a user, we could make this an array
allergiesRouter.post('/:user_id', async (req,res) => {
  try {
    const {user_id} = req.params;
    const {allergy_id} = req.body;
    const resp = await UserAllergy.create({
      userId: user_id,
      allergyId: allergy_id
    });
    res.json(resp);
  } catch (e) {
    console.error(e);
    res.status(403);
  }
});

//get allergies for a user
allergiesRouter.get('/:id', async (req,res) => {
  try {
    const {id} = req.params;
    const user = await User.findOne({
      where: {id}
    });
    const resp = await user.getAllergies().then(resp => resp);
    res.json(resp);
  } catch (e) {
    console.error(e);
    res.status(403).message('invalid request');
  }
});


module.exports = allergiesRouter;
