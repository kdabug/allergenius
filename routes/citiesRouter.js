const { Router } = require("express");
const { City } = require("../models");
// let api_key = process.env.REACT_APP_API_KEY;
// let axios = require('axios');

const citiesRouter = Router();

citiesRouter.get("/", async (req, res) => {
  try {
    const cities = await City.findAll();
    res.json({ cities });
  } catch (e) {
    console.log(e);
  }
});

// citiesRouter.get('/', async (req, res) => {
//   try {
//     const city_string = req.body
//     city_string.replace(/ /g, '%20');
//     let location_match = await axios(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${city_string}&inputtype=textquery&fields=photos&key=${api_key}`);
//     let photoreference = location_match.data.candidates[0].photos[0].photo_reference;
//     let photo_resp = await axios(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoreference}&key=${api_key}`);
//     res.json({ photo_resp.request.socket._httpMessage._redirectable._currentUrl });
//   } catch(e) {
//     console.error(e);
//   }
// }

module.exports = citiesRouter;
