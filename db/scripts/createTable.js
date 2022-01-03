import query from "../index.js";
// sql query function is imported - the first parameter we hand it, TEXT,  refers to sqlString.

const sqlString = `CREATE TABLE IF NOT EXISTS tasks (id SERIAL PRIMARY KEY, description TEXT);`;

async function createTable() {
  const res = await query(sqlString);
  console.log("Result:", res);
}

createTable();
