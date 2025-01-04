import React from 'react'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { WeatherData } from '../../../weather'

// Types for the component

interface Props {
  location: WeatherData | undefined;
  image: string;
}

const MainTemp : React.FC<Props> = ({ location, image }) => {

  // API call for the 'flagsapi', that will return the current country flag

  const countryFlag = `https://flagsapi.com/${location?.city.country}/flat/64.png`

  return (
    <div className='flex flex-col items-center justify-center w-full h-1/2 my-4'>
        {
          location ? (
            <>
            <div className='flex items-center pb-4'>
              <h1 className='text-2xl'>{location.city.name}, {location.city.country}</h1>
              <img className='ml-3 max-w-10' src={countryFlag} alt="" />
            </div>
              
              <WeatherIcon image={image} />
              {location.list ? (
                <>
                  <h2 className='text-2xl'>{Math.trunc(location.list[0].main.temp)}°C</h2>
                  <h2 className='uppercase font-semibold'>{location.list[0].weather[0].description}</h2>
                </>
                
              ) : (
                  <p>No image avaliable</p>
              )}
              
            </>
          ) : (
            <h1>Loading...</h1>
          )
        }
        
    </div>
  )
}

export default MainTemp