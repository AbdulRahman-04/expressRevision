import jwt from "jsonwebtoken";

function encryptData() {
  try {

    let userData = {
        fname:"suhail",
        lname:"roushan",
        age:20
    }

    let secrectKey = "12345";

    let token = jwt.sign(userData,secrectKey,{
        expiresIn:"1h"
    })

    console.log(token)

  } catch (error) {
    console.log(error);
  }
}

encryptData();
