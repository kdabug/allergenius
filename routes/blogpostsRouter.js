const { Router } = require('express');
const {User, Blogpost, Country} = require('../models');
const blogpostsRouter = Router();

blogpostsRouter.use((req, res, next) => {
  console.log("blogpost route triggered")
  next();
})


//get all blogposts
blogpostsRouter.get('/', async (req, res) => {
  try {
    const resp = await Blogpost.findAll();
    res.json(resp);
  } catch (e) {
    console.error(e);
    res.status(403);
  }
});


//make blogpost ... user_id is the id of the user making the post
blogpostsRouter.post('/user/:user_id', async (req, res) => {
  try {
    const {user_id} = req.params;
    const {countryId, title, content} = req.body;
    const resp = await Blogpost.create({
      countryId,
      title,
      content,
      userId: user_id});
    res.json(resp);
  } catch (e) {
    console.error(e);
    res.status(403);
  }
})

//get a user's blogposts
blogpostsRouter.get('/user/:user_id', async (req, res) => {
  try {
    const {user_id} = req.params;
    const user = await User.findOne({where: {id: user_id}});
    const resp = await user.getBlogposts().then(resp => resp);
    res.json(resp);
  } catch (e) {
    console.error(e);
    res.status(403);
  }
})

//get a country's blogposts
blogpostsRouter.get('/country/:country_id', async (req, res) => {
  try {
    const {country_id} = req.params;
    const country = await Country.findOne({where: {id: country_id}});
    const resp = await country.getBlogposts().then(resp => resp);
    res.json(resp);
  } catch (e) {
    console.error(e);
    res.status(403);
  }
})


module.exports = blogpostsRouter;
