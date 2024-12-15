import axios  from "axios";
import config from "config"

let API_KEY = config.get("API_KEY");

async function weatherCLI(city){

    try {

        let weather = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`)
         
        console.log(weather.data[weather.data.length -1]);
        
        
    } catch (error) {
        console.log(error);
        
    }

}
weatherCLI("Riyadh")