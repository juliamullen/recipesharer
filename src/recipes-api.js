const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();

router.use(bodyParser.json());

const recipes = [
  { _id: 123, message: "I'm a hot dog!", author: "a hot dog" },
  { _id: 456, message: "I'm an even, hotter,, dog.", author: "unknown" }
];

router.get("/api/recipes", (req, res) => {
  const orderedRecipes = recipes.sort((t1, t2) => t2._id - t1._id);
  res.send(orderedRecipes);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.send(401);
}

router.post("/api/thoughts", ensureAuthenticated, (req, res) => {
  const { message } = req.body;
  const newThought = {
    _id: new Date().getTime(),
    message,
    author: req.user.displayName
  };
  thoughts.push(newThought);
  res.send({ message: "Thanks!" });
});

module.exports = router;
