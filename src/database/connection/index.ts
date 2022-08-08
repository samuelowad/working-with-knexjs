import knex from "knex";
import path from "path";
import connectObject from "./connection-object";

const connection = knex({
  client: "pg",
  connection: connectObject,

  useNullAsDefault: true,
});

export default connection;
