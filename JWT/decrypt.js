import jwt from "jsonwebtoken";


function decryptData(){
    try {

        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6InN1aGFpbCIsImxuYW1lIjoicm91c2hhbiIsImFnZSI6MjAsImlhdCI6MTczNDIzODkzMCwiZXhwIjoxNzM0MjQyNTMwfQ.e4pXfRkLIAFgO1O9qm1OShRsgtSRP2mNAFqYFw3ZAuc"
         let secrectKey = "12345";

         let userData = jwt.verify(token,secrectKey);
         console.log(userData)
    } catch (error) {
        console.log(error)
    }
}

decryptData()