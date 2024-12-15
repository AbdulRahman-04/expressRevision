import express from "express"

const router = express.Router();


router.get("/getallemployees", (req, res)=>{
    try {

        res.status(200).send("AbdulRahman")
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

router.post("/registerEmployee", (req, res)=>{
    try {

        let userData = req.body;
        res.status(200).json(userData)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

router.put("/registerEmployee", (req, res)=>{
    try {

        let userData = req.body;
        res.status(200).json(userData);8
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

export default router