const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const { Language } = require("./models");
const axios = require("axios");
require("dotenv").config();

// allow the port to be defined with an env var or a dev value
const PORT = 4000;

// router imports
const usersRouter = require("./routes/usersRouter");
const allergiesRouter = require("./routes/allergiesRouter");
const blogpostsRouter = require("./routes/blogpostsRouter");
const countriesRouter = require("./routes/countriesRouter");
const citiesRouter = require("./routes/citiesRouter");
const cardsRouter = require("./routes/cardsRouter");

// after importing middleware define app and mount them
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the allergy place" });
});

app.use("/users", usersRouter);
app.use("/allergies", allergiesRouter);
app.use("/blogposts", blogpostsRouter);
app.use("/countries", countriesRouter);
app.use("/cities", citiesRouter);
app.use("/cards", cardsRouter);

app.get("/places", async (req, res) => {
  try {
    let { city_string } = req.query;
    console.log("this is places reqbody", city_string);
    // city_string.replace(/ /g, "%20");
    let location_match = await axios(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${city_string}&inputtype=textquery&fields=photos&key=${
        process.env.REACT_APP_API_KEY
      }`
    );
    console.log("location_match", location_match);
    let photoreference =
      location_match.data.candidates[0].photos[0].photo_reference;
    let photo_resp = await axios(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoreference}&key=${
        process.env.REACT_APP_API_KEY
      }`
    );
    let resp = photo_resp.request.socket._httpMessage._redirectable._currentUrl;
    res.json(resp);
  } catch (e) {
    console.error(e);
  }
});

app.get("/languages", async (req, res) => {
  let resp = await Language.findAll().then(resp => resp);
  res.json(resp);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
