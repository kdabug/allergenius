const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const { Language } = require("./models");

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

app.get("/languages", async (req, res) => {
  let resp = await Language.findAll().then(resp => resp);
  res.json(resp);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
