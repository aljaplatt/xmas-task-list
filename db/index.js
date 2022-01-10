import pg from "pg";
import * as config from "../config.js";

//pg is an object coming back from the pg library. pool is a method available on this obj
const pool = new pg.Pool({
  host: config.dbHost,
  database: config.dbName,
  user: config.username,
  port: config.dbPort,
  password: config.password,
  ssl: { rejectUnauthorized: false },
});

// export query function - this function exposes the query method from pool and exports it - allowing us to query elsewhere
export default async function query(text, params) {
  return pool.query(text, params); // returns a promise - we can await this in the function we use it in
}

//ssl - heroku security uses ssl - secure socket layer - don't reject unauthorized queries - can query db
