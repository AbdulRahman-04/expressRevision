import bcrypt from "bcrypt"

async function userPass(password) {

    try {
 
        let hashedPass = await bcrypt.hash(password, 10);
        console.log(hashedPass);
        

        
    } catch (error) {
        console.log(error);
        
    }
    
}

userPass("faisal0404");


async function verifyPass(userPass, hashedPass){

    try {

        let comparePass = await bcrypt.compare(userPass, hashedPass);
        console.log(comparePass);
        
        
    } catch (error) {
        console.log(error);
        
    }

}
verifyPass("faisal0404", "$2b$10$bhhMI0.9zGEVMWig9LgHNe99hKyj1aUjX7egC3j7wE/OjKL3cyNNO")