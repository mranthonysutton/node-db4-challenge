exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.text("name").notNullable();
      tbl.text("description");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.text("name").notNullable();
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();
      tbl.text("instructions").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.primary(["recipe_id", "ingredient_id"]);
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tbl
        .float("quantity")
        .unsigned()
        .notNullable();
      tbl.text("measurement").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
  return knex.schema.dropTableIfExists("instructions");
  return knex.schema.dropTableIfExists("ingredients");
  return knex.schema.dropTableIfExists("recipes");
};
