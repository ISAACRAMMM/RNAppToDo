import express from "express";
import {
    getTodo,
    getTodoByID,
    getUserByID,
    getUserByEmail,
    getSharedTodoByID,
    createTodo,
    shareTodo,
    deleteTodo,
    toggleCompleted
} from './db/query.js';

const app = express();

app.use(express.json());

app.get("/todos/:id", async (req, res) => {
    const todos = await getTodoByID(req.params.id);
    res.status(200).send(todos);
});

app.listen(3400, () => {
    console.log('server listening on port 3400') 
})