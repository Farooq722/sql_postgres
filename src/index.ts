import { Client } from "pg";

export const client = new Client({
    // connectionString: "ENTER_YOUR_DATABASE_URL";
});


async function createUserTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(25) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result);
}

createUserTable();
