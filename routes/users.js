import express from "express";

import {
  allTasks,
  findTaskById,
  addTask,
  deleteTaskById,
} from "../models/models.js";

const router = express.Router();

// GET ALL TASKS
router.get("/", async (req, res) => {
  const result = await allTasks();
  res.json({ message: "Here are all the tasks", payload: result });
});

// GET TASK BY ID
router.get("/:id", async (req, res) => {
  // convert url id to number, where is the id coming from?
  const id = Number(req.params.id);
  // find task with matching id & respond
  const reqTask = await findTaskById(id);
  if (reqTask === undefined)
    return res.json({
      message: `Task ${id} does not exist`,
    });
  res.json({
    message: `Task ${id} returned`,
    payload: reqTask,
  });
});

// CREATE NEW TASK
// router.post("/", async (req, res) => {
//   // take the new data from reuest body and store in var
//   const newTask = await createTask(req.body);
//    res.json({
//     message: "Your task has been created.",
//     payload: newTask,
//   });
// });

router.post("/", async function (req, res) {
  const newItem = req.body;
  const data = await addTask(newItem);
  res.json({
    success: true,
    message: "You have successfully added a new task",
    payload: data,
  });
});
// router.post('/', async (req, res) => {
//   const {description} = req.body;
//   const newTask = await query("INSERT INTO tasks (description) VALUES ")
// })

//UPDATE TASK BY ID
router.put("/:id", async (req, res) => {
  const taskUpdate = await updateTaskById(req.params.id, req.body);
  res.json({
    message: "Your task has been updated.",
    payload: taskUpdate,
  });
});

// DELETE TASK
router.delete("/:id", async (req, res) => {
  const taskDeleted = await deleteTaskById(req.params.id);
  res.json({
    message: "Your task has been deleted.",
    payload: taskDeleted,
  });
});

export default router;
