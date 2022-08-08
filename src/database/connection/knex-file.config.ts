import path from "path";
import connectObject from "./connection-object";

const knex = {
  client: "pg",
  version: "7.2",
  connection: connectObject,
  migrations: {
    filename: path.resolve("./src/database/migrations"),
  },
};

export default knex;
