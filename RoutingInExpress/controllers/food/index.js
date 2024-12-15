import express from "express"

const router = express.Router();


router.use(express.json());

router.get("/api/home", (req, res)=>{
    try {

        res.status(200).json({msg: "THIS IS JSON"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});


router.post("/api/register", (req, res)=>{
    try {

        let userInfo = req.body;
        res.status(200).json(userInfo)

        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


router.put("/api/register", (req, res)=>{
    try {

        let userInfo = req.body;
        res.status(200).json(userInfo)

        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})



router.delete("/api/register", (req, res)=>{
    try {

         res.status(200).send(`YOUR DATA IS DELETED!`)

        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});


export default router