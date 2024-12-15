import express from "express"

const app = express();

const PORT = 5002;

app.get("/api/nodemon", (req, res)=>{
    try {
        res.status(200).send("YOU SERVER IS LIVE⚡")
        
    } catch (error) {
        console.log(error.name, error.message);
        res.status(500).json({msg: "not working"})
    }
});

app.listen(PORT, ()=>{
    console.log(`YOUR PORT IS RUNNING LIVE AT ${PORT}`);
    
})