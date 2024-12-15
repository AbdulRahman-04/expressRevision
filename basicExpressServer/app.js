import express from "express"

const app = express();

const PORT = 5003;

app.get("/api", (req, res)=>{
    try {

        res.status(200).send(`hey you🫵, yes you🥰, Congrats, you are on my webapp `)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(`error in the above code!`)
    }
});


app.listen(PORT, ()=>{
    console.log(`YOUR SERVER IS LIVE AT ${PORT}`);
    
})