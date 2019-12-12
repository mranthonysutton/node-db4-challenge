const db = require("../data/db-config");

module.exports = {
  getIngredientById,
  getRecipesByIngredients
};

function getIngredientById(id) {
  return db("ingredients")
    .where({ id })
    .first();
}

function getRecipesByIngredients(id) {
  return db("recipes")
    .distinct("recipe_id", "name")
    .from("recipes")
    .join("recipe_ingredients", "recipes.id", "recipe_ingredients.recipe_id")
    .where({ ingredient_id: id });
}
