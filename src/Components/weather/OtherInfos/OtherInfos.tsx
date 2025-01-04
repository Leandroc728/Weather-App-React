import React from 'react'
import { WeatherData } from '../../../weather'
import './OtherInfos.css'

// Types for the component

interface Props {
  secondaryInfos: WeatherData | undefined;
}

const OtherInfos : React.FC<Props> = ({ secondaryInfos }) => {

  return (
    <div className='flex flex-col bg-gray-900 h-max mt-8'>
      <div className='flex w-full items-center justify-center h-1/5 py-6'>
        <h1 className='text-xl'>Other Infos:</h1>
      </div>
      <div className='flex lg:px-2 py-3 other-infos-div w-full h-3/5'>
        <div className="flex flex-col justify-center items-center w-1/3 px-2.5 py-1 text-center">
            <p className='text-xl'>Feels like:<br /> { Math.trunc(secondaryInfos?.main.feels_like || 0) }°C</p>
            <p className='mt-2'><span className='text-cyan-300'>min: { Math.trunc(secondaryInfos?.main.temp_min || 0) }°C</span> <span className='text-red-300'><br />max: { Math.trunc(secondaryInfos?.main.temp_max || 0) }°C</span></p>
          </div>
          <div className="flex flex-col justify-center w-1/3 px-2.5 items-center py-1 tertiaryInfo text-center">
            <p>Visibility: <br />{ (secondaryInfos?.visibility || 0) / 100 }%</p>
            <p>Wind:<br />{ secondaryInfos?.wind.speed } km/h</p>
            <p>N. of clouds:<br /> { secondaryInfos?.clouds.all }</p>
          </div>
          <div className="flex flex-col w-1/3 justify-center items-center px-2.5 py-1 tertiaryInfo text-center">
            <p>Sea level:<br />{ secondaryInfos?.main.sea_level }</p>
            <p>Humidity:<br />{ secondaryInfos?.main.humidity }%</p>
            <p>Pressure:<br />{ secondaryInfos?.main.pressure }</p>
          </div>
      </div>
    </div>
  )
}

export default OtherInfos