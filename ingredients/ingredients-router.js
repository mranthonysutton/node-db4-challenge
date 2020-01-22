const express = require("express");
const db = require("../data/db-config");
const Ingredients = require("./ingredients-model");
const router = express.Router();

function validateIngredientId(req, res, next) {
  Ingredients.getIngredientById(req.params.id)
    .then(response => {
      if (response) {
        req.ingredients = response;
        next();
      } else {
        res
          .status(404)
          .json({ error: "The specified ingredient ID does not exist." });
      }
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ error: "Unable to search ingredients by the specified id." });
    });
}

router.get("/:id/recipes", validateIngredientId, (req, res) => {
  Ingredients.getRecipesByIngredients(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: "Unable to obtain recipes for the specified ingredients."
      });
    });
});

module.exports = router;
