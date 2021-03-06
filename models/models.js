import query from "../db/index.js";

// All Tasks
export const allTasks = async () => {
  const data = await query(`SELECT * FROM tasks;`);
  return data.rows;
};

// Task by ID
export const findTaskById = async (id) => {
  const data = await query(`SELECT * FROM tasks WHERE id = $1;`, [id]);
  return data.rows;
};

// ADD TASK
// export const createTask = async (item) => {
//   const description = item.description;
//   const sqlString = `INSERT INTO tasks (description) VALUES $1;`;
//   const data = await query(sqlString, [description]);
//   return data.rows;
// };

export async function addTask(taskObj) {
  const description = taskObj.description;
  const sqlString = `INSERT INTO tasks (description) VALUES ($1) RETURNING *`;
  const data = await query(sqlString, [description]);
  console.log(data.rows);
  return data.rows;
}

export const deleteTaskById = async (id) => {
  const data = await query(`DELETE FROM tasks WHERE id = $1;`, [id]);
  return data.rows;
};
