import { env } from "process";
console.log(env.DB_PASSWORD);

const connectObject = {
  host: env.HOST,
  port: 5432,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
};
export default connectObject;
