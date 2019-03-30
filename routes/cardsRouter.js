const { Router } = require('express');
const { Blogpost, Card } = require('../models');

const cardsRouter = Router();

cardsRouter.use((req, res, next) => {
  console.log("cards router triggered");
  next();
});

//get a trip's "aka blogpost's" cards
cardsRouter.get('/:blogpost_id', async (req, res,) => {
  try {
    console.log("cards router triggered");
    let blogpost = await Blogpost.findByPk(req.params.blogpost_id);
    let cards = await blogpost.getCards();
    res.json(cards);
  } catch(e) {
    console.error(e);
    res.status(403);
  }
});

cardsRouter.post('/:blogpost_id', async (req, res,) => {
  try {
    let {original, translation} = req.body;
    console.log("cards router triggered");
    let newCard = await Card.create({
      original,
      translation
    });
    let blogpost = await Blogpost.findByPk(req.params.blogpost_id);
    await newCard.setBlogpost(blogpost);
    res.json(newCard);
  } catch(e) {
    console.error(e);
    res.status(403);
  }
});

module.exports = cardsRouter;
