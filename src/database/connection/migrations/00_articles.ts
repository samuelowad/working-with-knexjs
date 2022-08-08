import { Knex } from "knex";

exports.up = function (knex: Knex) {
  return knex.schema.createTable("articles", function (table) {
    table.increments("id").primary();
    table.string("heading", 255).notNullable().defaultTo("Untitled article");
    table.string("content", 10000).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).nullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now()).nullable();
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTable("articles");
};

exports.config = { transaction: false };
