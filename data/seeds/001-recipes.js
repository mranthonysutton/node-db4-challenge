exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "Artichoke Pasta",
          description: "Tasty artichoke pasta with spicy italian sausage"
        },
        { name: "Chili Mac n Cheese", description: "Our cheap cheat meal" },
        {
          name: "Easy Chicken Street Tacos",
          description: "Quick street-style tacos made in the instant pot"
        }
      ]);
    });
};
