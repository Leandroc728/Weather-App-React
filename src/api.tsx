import axios from "axios"
import { CityLocation, WeatherData } from "./weather"

// Gets the api key from the .env file

const apiKey = import.meta.env.VITE_API_KEY

// Funtion to get the current location and make a call to the API

export const getGeoLocationInfo = async () => {

    if("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude

            try {
                const data = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
    
                return data.data
            } catch(err) {
                console.log(err)
            }
        });
        

    } else {
        return undefined
    }
}

// Function responsible for taking the coordinates of a location and making a call for the OpenWeather api

export const getWeatherInfo = async (query: string) => {
    
    try {

        const location = await axios.get<CityLocation[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apiKey}`)

        const data = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.data[0].lat}&lon=${location.data[0].lon}&units=metric&appid=${apiKey}
`)
    
        console.log(data.data)
        
        return data.data;
    } catch (err) {
        
        console.log("Error:" + err)

    }

}