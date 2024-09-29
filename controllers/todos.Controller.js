const { getTodos, addTodo, uodateTodo, deleteTodo } = require("../services.js/todo.services")

const getTodosController = async (req, res) => {

    let data = await getTodos();
    return res.json({ success: true, data })

}
const addTodosController = async (req, res) => {

    let data = await addTodo(req.body);
    if (data) {
        return res.json({ success: true, message: "Todo added successfully" })
    }
    else return res.json({ success: false, message: "Some error occured" })

}

const updateTodosController = async (req, res) => {

    let data = await uodateTodo(req.body);
    if (data) {
        return res.json({ success: true, message: "Todo updated successfully" })
    }
    else return res.json({ success: false, message: "Some error occured" })

}

const deleteTodosController = async (req, res) => {

    let data = await deleteTodo(req.params);
    if (data) {
        return res.json({ success: true, message: "Todo deleted successfully" })
    }
    else return res.json({ success: false, message: "Some error occured" })

}

module.exports = { getTodosController, addTodosController, updateTodosController, deleteTodosController }