const express = require("express");
const db = require("../data/db-config");
const Recipes = require("./recipe-model");
const router = express.Router();

function validateRecipeId(req, res, next) {
  Recipes.getRecipesById(req.params.id)
    .then(response => {
      if (response) {
        req.recipe = response;
        next();
      } else {
        res
          .status(404)
          .json({ error: "The specified recipe ID does not exist." });
      }
    })
    .catch(error => {
      console.log(error).json({ error: "Error obtaining the recipe ID." });
    });
}

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "Unable to retrieve recipes." });
    });
});

router.get("/:id", validateRecipeId, (req, res) => {
  res.send(req.recipe);
});

router.get("/:id/shoppingList", validateRecipeId, (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "Unable to retrieve the list of items." });
    });
});

router.get("/:id/instructions", validateRecipeId, (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "Unable to retrieve the instructions." });
    });
});

module.exports = router;
