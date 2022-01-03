import query from "../index.js";
import tasks from "../../tasks-data.js";

async function populateTable() {
  tasks.forEach(async (item) => {
    const description = item.description;
    const data = await query(
      `INSERT INTO tasks (description) VALUES ($1) RETURNING *`,
      [description]
    );
    console.log(data);
  });
}

populateTable();
