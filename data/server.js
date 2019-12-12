const express = require("express");
const RecipeRouter = require("../recipes/recipe-router");
const IngredientRouter = require("../ingredients/ingredients-router");
const server = express();

server.use(express.json());

server.use("/api/recipes", RecipeRouter);
server.use("/api/ingredients", IngredientRouter);

server.use("/", (req, res) => {
  res.send({ message: "Recipe API is running..." });
});

module.exports = server;
