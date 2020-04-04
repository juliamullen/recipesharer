const bodyParser = require("body-parser");
const express = require("express");

const { Recipe, Ingredient, Step } = require('./config')

const router = express.Router();

router.use(bodyParser.json());

router.get("/api/recipes", (req, res) => {
  Recipe.findAll({ include: [{model: Ingredient}, {model: Step}]}).then(recipes => {
    res.json(recipes)
  })
});

router.get("/api/recipes/:recipeId", (req, res) => {
  Recipe.findOne({ include: [{model: Ingredient}, {model: Step}], where: { id: req.params.recipeId }})
    .then(recipe => {
      res.json(recipe)
    })
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.sendStatus(401);
}

/*
* add ensureAuthenticated middleware here 
* to prevent users from adding recipes
* who are not logged in e.g.,
* router.post("/api/recipes", ensureAuthenticated, (req, res) => {
*/
router.post("/api/recipes", (req, res) => {
  const { ingredients, steps, title, description, anecdote } = req.body;
  const author = req.user ? req.user.displayName : 'Unknown user'
  const authorId = req.user ? req.user.user_id : ''
  const authorPic = req.user ? req.user.picture : ''
  const newRecipe = Recipe.create({
    author,
    authorId,
    authorPic,
    title: title,
    description: description,
    anecdote: anecdote
  }).then(recipe => {
    for (ingredient of ingredients) {
      Ingredient.create({
        recipeId: recipe.id,
        ...ingredient
      })
    }
    for (step of steps) {
      Step.create({
        recipeId: recipe.id,
        ...step
      })
    }
    res.send({ id: recipe.id});
  })
});

module.exports = router;
