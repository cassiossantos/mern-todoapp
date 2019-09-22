const TodoController = require("../controllers/index");
const express = require("express");
const route = express.Router();

route.get("/todo", TodoController.getTodos);
route.post("/todo", TodoController.createTodo);
route.put("/todo/:id", TodoController.editTodo);
route.delete("/todo/:id", TodoController.deleteTodo);

module.exports = route;
