import { client } from ".";

// this is the is SECURE way to store or retreve data fro database
//eg : instead of sending the entire query store in some variable and use sql injections to store or retreve data .

async function getUserDetails(email:string) {
    const query =  `SELECT * FROM users WHERE email=$1`;
    const result = await client.query(query, [email]);

    if(result.rows.length > 0 ){
        console.log("User Found: ", result.rows[0]);
        return result.rows[0];
    }
    else{
        console.log("User Not Found");
        return null;
    }
}

getUserDetails("faraq@gmail.com").catch(console.error);