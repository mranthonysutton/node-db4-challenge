exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 16, measurement: "oz" },
        { recipe_id: 1, ingredient_id: 2, quantity: 1, measurement: "lb" },
        { recipe_id: 1, ingredient_id: 3, quantity: 8, measurement: "oz" },
        { recipe_id: 1, ingredient_id: 4, quantity: 8, measurement: "oz" },
        { recipe_id: 2, ingredient_id: 5, quantity: 1, measurement: "box" },
        { recipe_id: 2, ingredient_id: 6, quantity: 0.6, measurement: "cup" },
        { recipe_id: 2, ingredient_id: 7, quantity: 16, measurement: "oz" },
        { recipe_id: 3, ingredient_id: 8, quantity: 1.25, measurement: "lbs" },
        { recipe_id: 3, ingredient_id: 9, quantity: 16, measurement: "oz" },
        { recipe_id: 3, ingredient_id: 10, quantity: 8, measurement: "oz" }
      ]);
    });
};
