const { Router } = require("express");
const { User, Blogpost, Country, City } = require("../models");
const blogpostsRouter = Router();

blogpostsRouter.use((req, res, next) => {
  console.log("blogpost route triggered");
  next();
});

//get all blogposts
blogpostsRouter.get("/", async (req, res) => {
  try {
    const resp = await Blogpost.findAll();
    res.json(resp);
  } catch (e) {
    console.error(e);
    res.status(403);
  }
});

//make blogpost ... user_id is the id of the user making the post
blogpostsRouter.post("/user/:user_id", async (req, res) => {
  console.log("blogpost", req.params);
  try {
    const { user_id } = req.params;
    const { text, title, city_id } = req.body;
    const resp = await Blogpost.create({
      text,
      title,
      cityId: city_id,
      userId: user_id
    });
    res.json(resp);
  } catch (e) {
    console.error(e);
    res.status(403);
  }
});

//get a user's blogposts
blogpostsRouter.get("/user/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await User.findOne({ where: { id: user_id } });
    const resp = await user.getBlogposts().then(resp => resp);
    res.json(resp);
  } catch (e) {
    console.error(e);
    res.status(403);
  }
});

//get a country's blogposts
blogpostsRouter.get("/country/:country_id", async (req, res) => {
  try {
    const { country_id } = req.params;
    const country = await Country.findOne({ where: { id: country_id } });
    const cities = await country.getCities();
    const blogposts = await Promise.all(
      cities.map(async function(city) {
        let blogpost = city.getBlogposts().then(blogpost => blogpost);
        return blogpost;
      })
    );
    res.json(blogposts);
  } catch (e) {
    console.error(e);
    res.status(403);
  }
});

//get a city's blogposts
blogpostsRouter.get("/city/:city_id", async (req, res) => {
  try {
    const { city_id } = req.params;
    const city = await City.findOne({ where: { id: city_id } });
    const resp = await city.getBlogposts().then(resp => resp);
    res.json(resp);
  } catch (e) {
    console.error(e);
    res.status(403);
  }
});

module.exports = blogpostsRouter;
