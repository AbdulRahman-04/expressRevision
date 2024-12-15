import express from "express"
import employees from "./controllers/employess/index.js"

const app = express();

const PORT = 5003;

app.use(express.json());


app.get("/home", (req, res)=>{
    try {

        res.status(200).json({msg: "HELLO WORLD"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

app.use("/employees", employees)


app.listen(PORT, ()=>{
    console.log(`your port is running live at ${PORT}`);
    
})