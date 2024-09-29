const express = require('express');
const { getTodosController, addTodosController, updateTodosController, deleteTodosController } = require('../controllers/todos.Controller');
const { uodateTodo } = require('../services.js/todo.services');
const router = express.Router();

router.get("/",getTodosController) //to get todos from db

router.post("/",addTodosController) // to add todos

router.patch("/",updateTodosController) // to uodate todo

router.delete("/:id",deleteTodosController) // to delete todo


module.exports = router