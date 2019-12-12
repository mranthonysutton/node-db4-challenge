const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getRecipesById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function getShoppingList(id) {
  return db("recipe_ingredients")
    .select("name", "quantity", "measurement")
    .from("recipe_ingredients")
    .join("ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
    .where({ recipe_id: id })
    .orderBy("name");
}

function getInstructions(id) {
  return db("instructions")
    .select("step_number", "instructions")
    .from("instructions")
    .where({ recipe_id: id })
    .orderBy("step_number");
}
