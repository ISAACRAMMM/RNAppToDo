import { config } from 'dotenv';
import  pkg  from 'pg';

// Carga las variables de entorno
config();
const {Pool} = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function checkDatabaseConnection() {
  try {
    // Intenta obtener una conexión desde el pool
    const client = await pool.connect();

    // Realiza una consulta sencilla para comprobar la conexión
    const result = await client.query('SELECT NOW() as current_time');

    console.log('Conexión exitosa a la base de datos PostgreSQL:');
    console.log(`Hora actual en la base de datos: ${result.rows[0].current_time}`);

    // Libera la conexión de vuelta al pool
    client.release();
  } catch (error) {
    console.error('Error al conectar a la base de datos PostgreSQL:', error);
  } finally {
    // Cierra el pool de conexiones (esto no cierra las conexiones existentes)
  //  pool.end();
  }
}

// Llama a la función para comprobar la conexión
checkDatabaseConnection();

export default pool;
  