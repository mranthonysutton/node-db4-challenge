const express = require("express");
const db = require("../data/db-config");
const Recipes = require("./recipe-model");
const router = express.Router();

router.get("/", (req, res) => {
  Recipes.find()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "Unable to retrieve recipes." });
    });
});

router.get("/:id", (req, res) => {
  Recipes.findById(req.params.id)
    .then(response => {
      if (response) {
        res.status(200).json(response);
      } else {
        res
          .status(404)
          .json({ error: "Could not find the recipe with that specified id." });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "Unable to retreive that recipe with the specified id."
      });
    });
});

module.exports = router;
