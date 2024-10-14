import { client } from ".";

//userId, city, country, street, pincode

async function insertIntoRefTable(
    user_id: number,
    city: string,
    country: string,
    pincode: string
){

    const query = "INSERT INTO addresses(user_id, city, country, pincode) VALUES($1, $2, $3, $4)";
    const values = [user_id, city, country, pincode]; 

    const result = await client.query(query, values);
    console.log("Data Inserted ",result);

}

insertIntoRefTable(1,"adoni", "india", "518302");