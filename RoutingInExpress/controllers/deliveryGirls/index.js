import express from "express"

const router = express.Router();

router.get("/deliverygirl1", (req, res)=>{
    try {

        res.status(200).json({msg: 'haan agyi bacchi hamari delivery krke🥰'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

router.post("/join", (req, res)=>{
    try {
        let userData = req.body;
        res.status(200).json(userData)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

router.put("/join", (req, res)=>{
    try {

        let userData1 = req.body;
        res.status(200).json(userData1)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});


router.delete("/delete", (req, res)=>{
    try {

        res.status(200).send("DELETED USER!")
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});


export default router