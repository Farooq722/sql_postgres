import { client } from ".";

async function ref_output(user_id: string) {
    const query = (`
        SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.pincode FROM users JOIN addresses ON users.id = addresses.id WHERE users.id = $1 
        `);
    
    const result = await client.query(query, [user_id]);

    if(result.rows.length > 0 ){
        console.log(result.rows[0]);
    }
    else{
        console.log("No data Found for the given data");
    }
    
}

ref_output("1");