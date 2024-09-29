const pool = require('../connections/dbConnection')
const getTodos = async () => {
    try {
        let query = 'select * from public.todos';
        let result = (await pool.query(query)).rows;
        return result
    } catch (error) {
        throw new Error(error.message)
    }


}

const addTodo = async ({assigned_to,status,due_date, priority, comments }) => {
    try {
        let query = `INSERT INTO public.todos(
	     assigned_to, status, due_date, priority, comments)
	     VALUES ($1, $2, $3, $4, $5);`;
        let result = (await pool.query(query, [assigned_to,status,due_date, priority, comments ])).rowCount;
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

const uodateTodo = async ({assigned_to,status,due_date, priority, comments,id }) => {
    try {
        let query = `UPDATE public.todos
	     SET assigned_to=$1, status=$2, due_date=$3, priority=$4, comments=$5
	     WHERE id = $6;`;
        let result = (await pool.query(query, [assigned_to,status,due_date, priority, comments, id])).rowCount;
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

const deleteTodo = async ({id }) => {
    try {
        let query = `delete from public.todos  WHERE id = $1;`;
        let result = (await pool.query(query, [id])).rowCount;
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = { getTodos, addTodo, uodateTodo, deleteTodo }