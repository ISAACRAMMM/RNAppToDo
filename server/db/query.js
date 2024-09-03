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

    );
    const row = result.rows[0];
    return row;
}

export async function getSharedTodoByID(id)){
    const result= await pool.query(

    );
    const row = result.rows[0];
    return row;
}

export async function getUserByID(id){
    const result= await pool.query(

    );
    const row = result.rows[0];
    return row;
}

export async function getUserByEmail(email){
    const result= await pool.query(

    );
    const row = result.rows[0];
    return row;
}

export async function createTodo(user_id, title){
    const result= await pool.query(

    );
    const row = result.rows[0];
    return row;
}

export async function deleteTodo(id){
    const result= await pool.query(

    );
    const row = result.rows[0];
    return row;
}

export async function toggleCompleted(id, value){
    const result= await pool.query(

    );
    const row = result.rows[0];
    return row;
}

export async function shareTodo(todo_id, user_id, shared_with_id){
    const result= await pool.query(

    );
    const row = result.rows[0];
    return row;
}