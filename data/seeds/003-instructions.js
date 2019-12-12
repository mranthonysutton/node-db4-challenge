exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { step_number: 1, instructions: "Boil a pot of water", recipe_id: 1 },
        {
          step_number: 2,
          instructions: "While pot of water is boiling, cook italian sausages",
          recipe_id: 1
        },
        {
          step_number: 3,
          instructions: "Combine all ingredients in a large pan.",
          recipe_id: 1
        },
        {
          step_number: 1,
          instructions: "Boil a pot of water",
          recipe_id: 2
        },
        {
          step_number: 2,
          instructions: "Cook Mac n Cheese according in instructions on box",
          recipe_id: 2
        },
        {
          step_number: 3,
          instructions:
            "After Mac n Cheese is cooked, add a can of spicy chili",
          recipe_id: 2
        },
        {
          step_number: 1,
          instructions: "Place chicken things in instant pot",
          recipe_id: 3
        },
        {
          step_number: 2,
          instructions: "Pour a can of spicy salsa over chicken",
          recipe_id: 3
        },
        {
          step_number: 3,
          instructions: "Pour chicken broth into instant pot",
          recipe_id: 3
        },
        {
          step_number: 4,
          instructions: "Cook chicken for 14 minutes and quick release",
          recipe_id: 3
        }
      ]);
    });
};
