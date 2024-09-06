import pool from './database.js'

export async function getTodoByID(id){
    const result = await pool.query(
        `SELECT todos.*, shared_todos.shared_with_id
        FROM todos 
        LEFT JOIN shared_todos ON todos.id = shared_todos.todo_id
        WHERE todos.user_id = $1 OR shared_todos.shared_with_id = $2`, [id,id]
    );
    const row = result.rows[0];
    return row;
}

export async function getTodo(id){
    const result= await pool.query(
        `SELECT * FOM todos WHERE id = $1`, [id]
    );
    const row = result.rows[0];
    return row;
}

export async function getSharedTodoByID(id){
    const result= await pool.query(
        `SELECT * FOM shared_todos WHERE todo_id = $1`, [id]
    );
    const row = result.rows[0];
    return row;
}

export async function getUserByID(id){
    const result= await pool.query(
        `SELECT * FROM users WHERE id = $1`, [id]
    );
    const row = result.rows[0];
    return row;
}

export async function getUserByEmail(email){
    const result= await pool.query(
        `SELECT * FROM users WHERE id = $1`, [email]
    );
    const row = result.rows[0];
    return row;
}

export async function createTodo(user_id, title){
    const result= await pool.query(
        `INSERT INTO todos (user_id, title) VALUES ($1, $2)`, [user_id,title]
    );
    const todoID = result.id;
    return getTodo(todoID);
}

export async function deleteTodo(id){
    const result= await pool.query(
        `DELETE FROM todos WHERE id = $1`,[id]
    );
    const row = result.rows[0];
    return row;
}

export async function toggleCompleted(id, value){
    const newValue = value === true ? "TRUE" : "FALSE";
    const result= await pool.query(
        `UPDATE todos SET completed =$1 WHERE id = $2`,[newValue,id]
    );
    const row = result.rows[0];
    return row;
}

export async function shareTodo(todo_id, user_id, shared_with_id){
    const result= await pool.query(
        `INSERT INTO shared_todos (todo_id,user_id,shared_with_id) 
        VALUES ($1,$2,$3)`,[todo_id,user_id,shared_with_id]
    );
    const row = result.rows[0];
    return row;
}