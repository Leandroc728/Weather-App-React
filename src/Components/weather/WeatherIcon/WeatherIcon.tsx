import React from 'react'

// Types for the component

interface Props {
  image: string
}

const WeatherIcon : React.FC<Props> = ({ image }) => {
  return (
    <figure className='max-w-28'>
        <img src={image} alt="" className='max-w-full' />
    </figure>
  )
}

export default WeatherIcon