import express from "express"
import deliveryGirls from "./controllers/deliveryGirls/index.js"
import  foodApi from "./controllers/food/index.js"
const app = express();

const PORT = 5007;

app.get("/home", (req, res)=>{
    try {
        
        res.status(200).send("WELCOME TO MY WEB APP!🙌`");
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

app.use("/delivery", deliveryGirls);
app.use("/food", foodApi)

app.listen(PORT, ()=>{
    console.log(`YOUR WEB APP IS RUNNING AT PORT NO ${PORT}`);
    
})

