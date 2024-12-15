import axios from "axios"
import config from "config"

let TOKEN = config.get("TOKEN");


async function githubCli(username){

    try {

        let profile = await axios.get(`https://api.github.com/users/${username}`,
            {
                headers : {
                  Authorization: `Bearer ${TOKEN}`
                }
            }
        )
        
       

        console.log(profile.data);
        

        
    } catch (error) {
        console.log(error);
        
    }


}
githubCli("AbdulRahman-04")