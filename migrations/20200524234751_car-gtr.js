exports.up = function (knex) {
  return knex.schema.table("cars1", (tbl) => {
    tbl.string("transmission");
    tbl.boolean("Clean Title");
  });
};

exports.down = function (knex) {};
