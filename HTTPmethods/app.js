import express from "express"

const app = express();

const PORT = 5012;

app.use(express.json())

// http methods: 

// GET METHOD(): this is the only one http method which runs on browser which means we cant use POST, PUT, DELETE
//               method in browser, ti use those methods we use postman.



// GET METHOD(): 

app.get("/home", (req, res)=>{
    try {

        res.status(200).send(`YOUR WEB APP IS HERE!⚡`)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

app.post("/posts", (req, res)=>{
    try {

        let userData = req.body;
        res.status(200).json(userData)
        
    } catch (error) {
        console.log(e);
        res.status(500).send(error)
    }
});


app.put("/posts", (req, res)=>{
    try {

        let userData1 = req.body;
        res.status(200).json(userData1)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

app.delete("/deleted", (req, res)=>{
    try {

        let userData = req.body;
        res.status(200).send(`${userData}`)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});


app.get("/api/:url", (req, res)=>{
    try {

        let userInfo = req.params.url;
        res.status(200).redirect(`http://${userInfo}`)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});


app.get("/api/query", (req, res)=>{
    try {

        let userQuery = req.query;
        res.status(200).json(userQuery)

        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)

    }
});


app.listen(PORT, ()=>{
    console.log(`YOUR SERVER IS LIVE AT ${PORT}`);
    
})