import React, { useEffect, useState } from 'react'
import Header from './layout/Header/Header'
import { WeatherData } from '../weather'
import InfoBox from './layout/InfoBox/InfoBox';
import { getGeoLocationInfo, getWeatherInfo } from '../api';
import Footer from './layout/Footer/Footer';

interface Props {
}

const WeatherMain : React.FC<Props> = () : JSX.Element => {

    // State that will hold the weather info

    const [currentWeather, setCurrentWeather] = useState<WeatherData | undefined >(undefined)
    
    // Will be responsible for the weather information when the application first loads

    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await getGeoLocationInfo()

                res ? setCurrentWeather(res) : setCurrentWeather(await getWeatherInfo("London"))
                
                console.log(res)
            } catch (err) {
                console.log(err)
            }
            
        }

        fetchData()
    }, [])

    // Putting together the three layouts components
    
    return (
        <div className='flex flex-col justify-between bg-slate-800 text-neutral-50 h-full max-w-full lg:w-6/12 '>
            <Header setCurrentWeather={setCurrentWeather} />
            <InfoBox currentWeather={currentWeather} />
            <Footer />
        </div>
    )
}

export default WeatherMain