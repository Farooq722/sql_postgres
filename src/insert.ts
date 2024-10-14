import { client } from ".";

//This is bad way to store data in database, instead use sql injections check get.ts file

async function insertUserTable() {
    const result = await client.query(`
       INSERT INTO users(username, email, password) VALUES ('bfarooq', 'faraq@gmail.com', 'farooq1233') 
        `);
    console.log(result);
}

insertUserTable();