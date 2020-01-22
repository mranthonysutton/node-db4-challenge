exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Artichoke Hearts" },
        { name: "Spicy Italian Sausage" },
        { name: "Spinach" },
        { name: "Fire-roasted Tomatos" },
        { name: "Kraft Mac n Cheese" },
        { name: "Milk" },
        { name: "Hot Chili" },
        { name: "Chicken Thighs" },
        { name: "Spicy Salsa" },
        { name: "Chicken Broth" }
      ]);
    });
};
