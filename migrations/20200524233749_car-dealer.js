exports.up = function (knex) {
  return knex.schema.createTable("cars1", (tbl) => {
    tbl.increments("id");
    tbl.integer("VIN").notNullable();
    tbl.string("MAKE").notNullable();
    tbl.string("MODEL").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableExists("cars1");
};
