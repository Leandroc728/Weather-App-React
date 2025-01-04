import React from 'react'
import { WeatherData } from '../../../weather';
import MainTemp from '../../weather/MainTemp/MainTemp';
import sunny from '../../../assets/images/sunny.png'
import cloudy from '../../../assets/images/cloudy.png'
import snow from '../../../assets/images/snow.png'
import storm from '../../../assets/images/storm.png'
import OtherInfos from '../../weather/OtherInfos/OtherInfos';

// Types for the component

interface Props {
    currentWeather: WeatherData | undefined;
}

// Types for when chosing the image for the weather

type WeatherCondition = 'Clear' | 'Thunderstorm' | 'Rain' | 'Snow' | 'Clouds' | 'Default';

const InfoBox : React.FC<Props> = ({ currentWeather }) => {

  // Weather images

  const images = {
    Clear: sunny,
    Thunderstorm: storm,
    Rain: storm,
    Snow: snow,
    Clouds: cloudy,
    Default: sunny
  }

  // Loads the images based on the weather situation

  const weatherSituation : WeatherCondition = currentWeather?.list?.[0]?.weather?.[0]?.main || 'Default'

  // Put the image of the weather in a variable, if not avalible sticker with 'sunny'

  const weatherImg = images[weatherSituation] || images.Default;

  // Infos that will be used on the 'OtherInfos' component

  const secondaryInfos = currentWeather?.list?.[0]

  return (
    <div className='flex flex-col h-full py-2'>
          <MainTemp location={currentWeather} image={weatherImg} />
          <OtherInfos secondaryInfos={secondaryInfos} />
    </div>
  )
}

export default InfoBox