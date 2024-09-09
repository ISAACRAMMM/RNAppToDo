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

app.get("/todos/shared_todos/:id", async (req, res) => {
    const todo = await getSharedTodoByID(req.params.id);
    const author = await getUserByID(todo.user_id);
    const shared_with = await getUserByID(todo.shared_with);

    res.status(200).send({ author, shared_with });
});

app.get("/users/:id" ,async (req, res) => {
    const user = await getUserByID(req.params.id);
    
    res.status(200).send(user);
})

app.put("/todos/:id", async (req, res) => {
    const { value } = req.body;
    const todo = await toggleCompleted(rec.params.id, value);
    res.status(200).send(todo);
})

app.delete("/todos/:id", async  )


app.listen(3400, () => {
    console.log('server listening on port 3400') 
})