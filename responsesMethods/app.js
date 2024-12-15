import express from "express"

const app = express();


const PORT = 5001;


app.get("/api/responses", (req, res)=>{
    try {

        // only one response method works in an api🙌


        // res.status(200).send(`this is your web app🙌`);
        // res.status(200).download("./image.png");
        // res.status(200).json({name: "SYED ABDUL RAHMAN", cohort: "c24"});
        res.status(200).end("band hogya app") 

        
    } catch (error) {
        console.log(error);
        res.status(500).send(`error hai code mai`)
    }
})

app.listen(PORT, ()=>{
    console.log(`your ${PORT} is live!☕`);
    
})